"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function HashLink({ href, className, children }: Props) {
  const pathname = usePathname();
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const basePath = href.slice(0, hashIndex) || "/";
  const targetId = href.slice(hashIndex + 1);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== basePath) {
      return;
    }

    event.preventDefault();
    scrollToId(targetId);
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
