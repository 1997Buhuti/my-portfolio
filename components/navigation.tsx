"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Code2, Terminal, UserRound } from "lucide-react";

import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const desktopLinks = [
  { href: "/#about", label: "About", hash: "about" },
  { href: "/#experience", label: "Experience", hash: "experience" },
  { href: "/#projects", label: "Projects", hash: "projects" },
  { href: "/#contact", label: "Contact", hash: "contact" },
] as const;

const mobileLinks = [
  { href: "/#about", label: "About", icon: UserRound },
  { href: "/#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/#projects", label: "Projects", icon: Code2 },
  { href: "/#contact", label: "Contact", icon: Terminal },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const { name, monogram, availability } = portfolioData.personal;
  const onProject = pathname.startsWith("/projects");

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-hairline bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-6">
            <Link href="/" className="group flex items-center gap-2 focus:outline-none">
              <span className="font-mono text-sm font-bold text-primary transition-colors group-hover:text-primary-fixed">
                {monogram}
              </span>
              <span className="hidden font-sans text-lg font-semibold tracking-tight text-on-surface transition-colors group-hover:text-primary sm:inline">
                {name}
              </span>
            </Link>
            <div className="hidden items-center gap-2 rounded-full border border-hairline bg-surface-container-high/60 px-2.5 py-1 md:flex">
              <span className="size-2 animate-pulse rounded-full bg-primary-container" />
              <span className="font-mono text-[11px] tracking-wide text-on-surface-variant uppercase">
                {availability}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Primary"
            >
              {desktopLinks.map((link) => {
                const active =
                  (link.hash === "projects" && onProject) ||
                  (!onProject && link.hash === "about" && pathname === "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-lg px-3 py-1.5 font-mono text-xs tracking-wider transition-all",
                      active
                        ? "bg-primary-container font-medium text-on-primary-container"
                        : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-lg border border-hairline bg-surface-container px-3 py-1.5 font-mono text-xs text-on-surface-variant sm:inline-flex">
                <Terminal className="size-4 text-primary" />
                CMS
              </span>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                <UserRound className="size-4" aria-hidden />
                <span className="sr-only">Profile</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <nav
        className="pointer-events-none fixed bottom-0 z-50 mb-4 flex w-full justify-center px-4 pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
        aria-label="Mobile"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-surface-container-low/85 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          {mobileLinks.map((link) => {
            const Icon = link.icon;
            const active =
              (link.label === "Projects" && onProject) ||
              (link.label === "About" && pathname === "/" && !onProject);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-11 items-center gap-1.5 rounded-full px-3 py-2 transition-all",
                  active
                    ? "bg-primary-container/20 text-primary shadow-[0_0_16px_rgba(45,212,191,0.25)]"
                    : "text-on-surface-variant hover:text-on-surface",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-5" />
                <span className="font-mono text-xs tracking-wide">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
