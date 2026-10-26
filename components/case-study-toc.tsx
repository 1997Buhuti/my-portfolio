"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const toc = [
  { href: "#showcase", id: "showcase", label: "01. Showcase Mockup" },
  { href: "#topology", id: "topology", label: "02. System Topology" },
  { href: "#stack", id: "stack", label: "03. Technical Stack" },
  { href: "#challenge", id: "challenge", label: "04. Challenge & Solution" },
  { href: "#features", id: "features", label: "05. Engine Features" },
  { href: "#gallery", id: "gallery", label: "06. Interface Artifacts" },
] as const;

export function CaseStudyToc() {
  const [activeId, setActiveId] = useState<string>(toc[0].id);

  useEffect(() => {
    const sections = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden flex-col gap-4 rounded-2xl bg-surface-container-low p-5 shadow-sm lg:flex">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-semibold tracking-wider text-on-surface uppercase">
          Table of Contents
        </span>
        <span className="font-mono text-xs text-primary">06 SECTIONS</span>
      </div>
      <nav className="flex flex-col gap-1 font-mono text-xs" aria-label="Sections">
        {toc.map((item) => {
          const active = activeId === item.id;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-lg px-2 py-1.5 transition-all",
                active
                  ? "bg-surface-container font-medium text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
              )}
              aria-current={active ? "true" : undefined}
            >
              <span>{item.label}</span>
              <ChevronRight
                className={cn(
                  "size-3.5 transition-opacity",
                  active ? "opacity-100" : "opacity-0",
                )}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
