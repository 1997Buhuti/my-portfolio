import type { TechItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const DEVICON_CDN =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

/** Devicon glyphs that render near-black by default. */
const INVERT_DEVICONS = new Set(["github", "express"]);

function iconSrc(item: TechItem): string | undefined {
  if (!item.icon) return undefined;

  const provider = item.provider ?? "devicon";

  if (provider === "simpleicons") {
    return `${SIMPLE_ICONS_CDN}/${item.icon}`;
  }

  if (provider === "local") {
    return `/icons/${item.icon}.svg`;
  }

  const variant = item.variant ?? "original";
  return `${DEVICON_CDN}/${item.icon}/${item.icon}-${variant}.svg`;
}

function shouldInvert(item: TechItem): boolean {
  if (item.invert !== undefined) return item.invert;
  if ((item.provider ?? "devicon") !== "devicon") return false;
  return Boolean(item.icon && INVERT_DEVICONS.has(item.icon));
}

function monogram(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

interface TechIconProps {
  item: TechItem;
  className?: string;
}

export function TechIcon({ item, className }: TechIconProps) {
  const src = iconSrc(item);
  const invert = shouldInvert(item);

  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-2.5 rounded-xl border border-hairline bg-surface-container-low p-4 shadow-sm transition-colors hover:border-primary/25 hover:bg-surface-container",
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center sm:size-11">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            width={40}
            height={40}
            className={cn(
              "size-9 object-contain sm:size-10",
              invert && "brightness-0 invert",
            )}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-md border border-hairline bg-surface-container-highest font-mono text-[11px] font-semibold tracking-wide text-primary sm:size-10"
          >
            {monogram(item.name)}
          </span>
        )}
      </div>
      <span className="text-center font-mono text-[11px] leading-tight tracking-wide text-on-surface-variant transition-colors group-hover:text-on-surface">
        {item.name}
      </span>
    </div>
  );
}
