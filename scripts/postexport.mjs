import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

writeFileSync(join(outDir, ".nojekyll"), "");

// GitHub Pages runs Jekyll by default; without .nojekyll it skips _next/ and assets break.
// For project sites hosted at /portfolio/, a custom 404 helps hard refreshes on deep links.
const segments = basePath ? basePath.split("/").filter(Boolean).length : 0;
const redirect404 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <script>
      (function () {
        var segmentsToKeep = ${segments};
        var location = window.location;
        location.replace(
          location.protocol +
            "//" +
            location.hostname +
            (location.port ? ":" + location.port : "") +
            location.pathname
              .split("/")
              .slice(0, 1 + segmentsToKeep)
              .join("/") +
            "/?/" +
            location.pathname
              .slice(1)
              .split("/")
              .slice(segmentsToKeep)
              .join("/")
              .replace(/&/g, "~and~") +
            (location.search ? "&" + location.search.slice(1).replace(/&/g, "~and~") : "") +
            location.hash
        );
      })();
    </script>
  </head>
  <body></body>
</html>
`;

writeFileSync(join(outDir, "404.html"), redirect404);

console.log("postexport: wrote .nojekyll and 404.html", basePath ? `(basePath ${basePath})` : "(root site)");
