import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects/feed");

const BASE = "https://feedapp-dev.insomniafest.ru";
const USER = process.env.FEED_ADMIN_USER;
const PASS = process.env.FEED_ADMIN_PASS;

if (!USER || !PASS) {
  console.error("Set FEED_ADMIN_USER and FEED_ADMIN_PASS environment variables.");
  process.exit(1);
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`${BASE}/login`, { waitUntil: "networkidle" });

  await page.getByText("Логин и пароль", { exact: false }).click();
  await page.locator('input[placeholder="Логин"]').fill(USER);
  await page.locator('input[placeholder="Пароль"]').fill(PASS);
  await page.getByRole("button", { name: "Войти" }).click();
  await page.waitForURL((url) => !url.pathname.includes("/login"), { timeout: 30000 });

  await page.goto(`${BASE}/volunteers`, { waitUntil: "networkidle" });
  await page.waitForSelector(".ant-table, .ant-spin", { timeout: 30000 });
  await page.waitForTimeout(2500);

  const filterToggle = page.getByText("Фильтры", { exact: false }).first();
  if (await filterToggle.isVisible().catch(() => false)) {
    await filterToggle.click();
    await page.waitForTimeout(800);
  }

  await page.screenshot({
    path: path.join(outDir, "volunteers-table.png"),
    fullPage: false,
  });

  const tableRow = page.locator(".ant-table-tbody tr.ant-table-row").first();
  const hasRows = await tableRow.isVisible({ timeout: 5000 }).catch(() => false);

  if (hasRows) {
    await tableRow.click();
    await page.waitForURL(/\/volunteers\/edit\/\d+/, { timeout: 20000 });
  } else {
    const apiVolunteerId = await page.evaluate(async (base) => {
      const res = await fetch(`${base}/api/v1/volunteers/?page=1&page_size=1`, {
        credentials: "include",
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.results?.[0]?.id ?? data?.[0]?.id ?? null;
    }, BASE);

    if (!apiVolunteerId) {
      throw new Error("No volunteers found on stage — cannot capture card screenshot");
    }

    await page.goto(`${BASE}/volunteers/edit/${apiVolunteerId}`, {
      waitUntil: "networkidle",
    });
  }

  await page.waitForTimeout(2000);

  const feedingHeading = page.getByText("Питание", { exact: false }).first();
  if (await feedingHeading.isVisible().catch(() => false)) {
    await feedingHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  }

  await page.screenshot({
    path: path.join(outDir, "volunteer-card-calendar.png"),
    fullPage: true,
  });

  await browser.close();
  console.log("Saved screenshots to", outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
