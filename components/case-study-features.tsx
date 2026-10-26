"use client";

import { useState } from "react";
import { ChevronDown, Shield, Terminal, Webhook } from "lucide-react";

import type { CaseStudyFeature } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const icons = {
  terminal: Terminal,
  shield: Shield,
  webhook: Webhook,
} as const;

interface CaseStudyFeaturesProps {
  features: CaseStudyFeature[];
}

export function CaseStudyFeatures({ features }: CaseStudyFeaturesProps) {
  const [openId, setOpenId] = useState<string>(features[0]?.id ?? "");

  return (
    <div className="space-y-2">
      {features.map((feature) => {
        const Icon = icons[feature.icon];
        const open = openId === feature.id;
        return (
          <div
            key={feature.id}
            className="overflow-hidden rounded-xl bg-surface-container-low transition-all"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between p-4 text-left sm:p-5"
              onClick={() => setOpenId(open ? "" : feature.id)}
              aria-expanded={open}
            >
              <div className="flex items-center gap-2">
                <Icon className="size-5 text-primary" />
                <span className="font-sans text-lg font-semibold text-on-surface">
                  {feature.title}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 text-outline transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>
            {open ? (
              <div className="px-4 pb-4 font-mono text-sm leading-relaxed text-on-surface-variant sm:px-5 sm:pb-5">
                {feature.body}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
