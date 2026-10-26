import Link from "next/link";

import { portfolioData } from "@/data/portfolio";

export function SiteFooter() {
  const { name } = portfolioData.personal;

  return (
    <footer className="w-full border-t border-hairline bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-12 text-on-surface-variant md:flex-row lg:px-12">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="font-sans text-sm text-on-surface">
            Engineered &amp; Designed by {name}
          </p>
          <p className="font-mono text-[11px] tracking-wide uppercase">
            Crafted with structural elegance &amp; dark mode ergonomics · © 2026
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/#about"
            className="font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
          >
            {"// overview"}
          </Link>
          <Link
            href="/#projects"
            className="font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
          >
            {"// archive"}
          </Link>
          <Link
            href="/#contact"
            className="font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
          >
            {"// contact"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
