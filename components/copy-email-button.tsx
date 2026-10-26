"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  labelClassName?: string;
}

export function CopyEmailButton({
  email,
  className,
  labelClassName,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-lg border border-hairline bg-surface-container px-5 py-2.5 font-mono text-xs tracking-wider text-on-surface transition-all hover:bg-surface-container-high",
        className,
      )}
    >
      {copied ? (
        <Check className="size-4 text-primary" />
      ) : (
        <Copy className="size-4 text-primary" />
      )}
      <span className={labelClassName}>{email}</span>
      <span
        className={cn(
          "pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-0.5 font-mono text-[11px] text-on-primary transition-opacity",
          copied ? "opacity-100" : "opacity-0",
        )}
      >
        Copied!
      </span>
    </button>
  );
}
