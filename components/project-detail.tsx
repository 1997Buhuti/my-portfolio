import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  Gauge,
  GraphHub,
  Layers,
  MoveHorizontal,
  TrendingUp,
  TriangleAlert,
  Verified,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { CaseStudyFeatures } from "@/components/case-study-features";
import { CaseStudyToc } from "@/components/case-study-toc";
import {
  getNextFeaturedProject,
  type Project,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const caseStudy = project.caseStudy;
  const nextProject = getNextFeaturedProject(project.slug);

  if (!caseStudy) {
    return <BasicProjectDetail project={project} nextProject={nextProject} />;
  }

  return (
    <div className="relative w-full overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[900px] right-10 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[140px]"
      />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-6 pb-4 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-container-low px-4 py-2.5 shadow-sm">
          <div className="flex items-center gap-3">
            <Link
              href="/#projects"
              className="group flex items-center gap-1.5 font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
            <span className="hidden font-mono text-xs text-outline-variant sm:inline">
              /
            </span>
            <span className="hidden font-mono text-xs text-on-surface sm:inline">
              projects / {project.slug}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs font-medium tracking-tight text-primary">
              ● {caseStudy.status}
            </span>
            <span className="rounded-full bg-surface-container-highest px-2 py-0.5 font-mono text-[11px] text-secondary">
              {caseStudy.version}
            </span>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-4 pb-8 sm:px-6 lg:px-12 lg:pb-12">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-4xl flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              <Code2 className="size-3.5" />
              {caseStudy.badge}
            </div>
            <h1 className="font-sans text-[32px] leading-9 font-bold tracking-tight text-on-surface sm:text-5xl sm:leading-[52px] lg:text-[56px] lg:leading-16">
              {project.title}
            </h1>
            <p className="max-w-3xl font-mono text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-5 py-3 font-mono text-xs font-semibold text-on-primary-container shadow-[0_0_24px_rgba(45,212,191,0.25)] transition-all hover:bg-primary hover:text-on-primary"
              >
                Live Production Demo
                <ExternalLink className="size-4" />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-container-high px-5 py-3 font-mono text-xs text-primary transition-all hover:bg-surface-container-highest"
              >
                <Code2 className="size-4" />
                Source Code (GitHub)
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}
            <a
              href="#challenge"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-container-low px-5 py-3 font-mono text-xs text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            >
              <FileText className="size-4" />
              Architectural Spec
            </a>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-sm md:grid-cols-4 md:gap-4 md:p-6">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1">
                <span className="font-mono text-[11px] tracking-wider text-on-surface-variant uppercase">
                  {metric.label}
                </span>
                <span
                  className={cn(
                    "font-sans text-lg font-semibold text-on-surface",
                    metric.value.includes("Architect") && "text-primary",
                    metric.value.includes("Edge") && "text-secondary",
                  )}
                >
                  {metric.value}
                </span>
                <span className="font-mono text-xs text-on-surface-variant">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="order-2 flex flex-col gap-6 lg:order-1 lg:sticky lg:top-24 lg:col-span-3">
            <CaseStudyToc />

            <div className="hidden flex-col gap-4 rounded-2xl bg-surface-container p-5 shadow-sm lg:flex">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-on-surface uppercase">
                  Engine Telemetry
                </span>
                <span className="size-2 animate-pulse rounded-full bg-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <TelemetryRow
                  icon={Gauge}
                  title="Lighthouse Score"
                  detail="Core Web Vitals"
                  value={caseStudy.telemetry.lighthouse}
                  accent="primary"
                />
                <TelemetryRow
                  icon={Zap}
                  title="TTFB Global Edge"
                  detail="p95 Anycast Route"
                  value={caseStudy.telemetry.ttfb}
                  accent="secondary"
                />
                <TelemetryRow
                  icon={MoveHorizontal}
                  title="Cumulative Shift"
                  detail="Zero Jank Layout"
                  value={caseStudy.telemetry.cls}
                  accent="tertiary"
                />
              </div>
              <div className="flex items-center justify-between border-t border-hairline pt-3 font-mono text-xs text-on-surface-variant">
                <span>UPTIME RATIO</span>
                <span className="text-primary">{caseStudy.telemetry.uptime}</span>
              </div>
            </div>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group hidden flex-col gap-2 rounded-2xl bg-surface-container-low p-5 transition-colors hover:bg-surface-container lg:flex"
              >
                <span className="flex items-center gap-1 font-mono text-[11px] tracking-wider text-on-surface-variant uppercase">
                  Next Case Study
                  <ArrowRight className="size-3.5 text-primary transition-transform group-hover:translate-x-1" />
                </span>
                <h4 className="font-sans text-lg font-semibold text-on-surface transition-colors group-hover:text-primary">
                  {nextProject.title}
                </h4>
                <p className="line-clamp-2 font-mono text-[13px] text-on-surface-variant">
                  {nextProject.description}
                </p>
              </Link>
            ) : null}
          </aside>

          <div className="order-1 flex flex-col gap-10 lg:order-2 lg:col-span-9 lg:gap-14">
            <section id="showcase" className="scroll-mt-28">
              <div className="relative h-56 overflow-hidden rounded-xl bg-surface-container-low shadow-xl sm:h-72 lg:h-96">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={caseStudy.coverImage}
                  alt=""
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full bg-surface-container-highest/80 px-2.5 py-1 backdrop-blur-md">
                    <span className="size-2 animate-ping rounded-full bg-primary" />
                    <span className="font-mono text-[11px] text-primary">
                      {caseStudy.coverCaption}
                    </span>
                  </div>
                  <span className="rounded bg-surface-container-high/80 px-2 py-0.5 font-mono text-xs text-on-surface-variant backdrop-blur-md">
                    {caseStudy.version}
                  </span>
                </div>
              </div>
            </section>

            <section
              id="topology"
              className="scroll-mt-28 flex flex-col gap-4 rounded-xl bg-surface-container-low p-4 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraphHub className="size-5 text-primary" />
                  <h2 className="font-sans text-lg font-semibold text-on-surface">
                    System Topology
                  </h2>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
                  Distributed
                </span>
              </div>

              <div className="flex flex-col gap-2 rounded-lg bg-surface-container p-3">
                {caseStudy.topology.map((node, index) => (
                  <div key={node.index}>
                    <div className="flex items-center justify-between rounded-md bg-surface-container-high px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-primary">
                          {node.index}
                        </span>
                        <span className="font-mono text-xs text-on-surface sm:text-sm">
                          {node.title}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-on-surface-variant">
                        {node.detail}
                      </span>
                    </div>
                    {index < caseStudy.topology.length - 1 ? (
                      <div className="flex justify-center py-0.5 text-primary">
                        <ArrowRight className="size-4 rotate-90" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 lg:hidden">
                <TelemetryStat
                  label="Lighthouse"
                  value={caseStudy.telemetry.lighthouse}
                  accent="primary"
                />
                <TelemetryStat
                  label="TTFB Edge"
                  value={caseStudy.telemetry.ttfb}
                  accent="secondary"
                />
                <TelemetryStat
                  label="Layout Shift"
                  value={caseStudy.telemetry.cls}
                  accent="primary"
                />
              </div>
            </section>

            <section id="stack" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Layers className="size-5 text-primary" />
                <h2 className="font-sans text-lg font-semibold text-on-surface">
                  Technical Stack
                </h2>
              </div>
              <div className="space-y-3">
                {caseStudy.stackGroups.map((group) => (
                  <div
                    key={group.title}
                    className="space-y-2 rounded-xl bg-surface-container-low p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-on-surface-variant">
                        {group.title}
                      </span>
                      <span className="font-mono text-[11px] text-outline">
                        {group.runtime}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {group.items.map((item) => (
                        <span
                          key={item.label}
                          className={cn(
                            "rounded-full px-2.5 py-1 font-mono text-[11px]",
                            item.accent === "primary"
                              ? "bg-primary/10 text-primary"
                              : item.accent === "secondary"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-surface-container-high text-on-surface",
                          )}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="challenge"
              className="scroll-mt-28 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <Verified className="size-5 text-primary" />
                <h2 className="font-sans text-lg font-semibold text-on-surface">
                  The Challenge &amp; Solutions
                </h2>
              </div>

              <div className="space-y-2 rounded-xl bg-surface-container-low p-4 sm:p-5">
                <div className="flex items-center gap-2 text-error">
                  <TriangleAlert className="size-4" />
                  <h3 className="font-sans text-lg font-semibold text-on-surface">
                    The Problem
                  </h3>
                </div>
                <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="space-y-3 rounded-xl bg-surface-container-low p-4 sm:p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Verified className="size-4" />
                  <h3 className="font-sans text-lg font-semibold text-on-surface">
                    The Architectural Solution
                  </h3>
                </div>
                <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                  {caseStudy.solution}
                </p>
                <div className="my-2 overflow-x-auto rounded-lg bg-surface-container-lowest p-3 font-mono text-[13px] text-on-surface-variant">
                  <div className="flex items-center justify-between pb-1 text-outline">
                    <span className="text-[11px]">
                      {caseStudy.codeSnippet.filename}
                    </span>
                    <span className="text-[11px] text-primary">
                      {caseStudy.codeSnippet.label}
                    </span>
                  </div>
                  {caseStudy.codeSnippet.lines.map((line) => (
                    <p key={line} className="whitespace-pre text-on-surface">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-surface-container-high p-4 sm:p-5">
                <div className="flex items-center gap-2 text-primary-container">
                  <TrendingUp className="size-4" />
                  <h3 className="font-sans text-lg font-semibold text-on-surface">
                    Measured Outcomes
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
                  {caseStudy.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="font-mono text-[13px] text-on-surface-variant">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="features" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="size-5 text-primary" />
                  <h2 className="font-sans text-lg font-semibold text-on-surface">
                    Key Engine Features
                  </h2>
                </div>
                <span className="font-mono text-[11px] text-outline">
                  Tap to view
                </span>
              </div>
              <CaseStudyFeatures features={caseStudy.features} />
            </section>

            <section id="gallery" className="scroll-mt-28 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider text-outline uppercase">
                  Interface Snapshots
                </span>
                <span className="font-mono text-[11px] text-primary">
                  {String(caseStudy.gallery.length).padStart(2, "0")} Artifacts
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {caseStudy.gallery.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative h-32 overflow-hidden rounded-lg bg-surface-container-high sm:h-48"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {nextProject ? (
              <section className="pt-2 lg:hidden">
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex flex-col gap-2 rounded-xl bg-surface-container p-4 transition-all hover:bg-surface-container-high active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-primary uppercase">
                      Next Case Study
                    </span>
                    <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                  <h4 className="font-sans text-xl font-semibold text-on-surface transition-colors group-hover:text-primary">
                    {nextProject.title}
                  </h4>
                  <p className="line-clamp-2 font-mono text-[13px] text-on-surface-variant">
                    {nextProject.description}
                  </p>
                </Link>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function TelemetryStat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "primary" | "secondary";
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-surface-container p-3 text-center">
      <span
        className={cn(
          "font-mono text-sm font-semibold",
          accent === "primary" ? "text-primary" : "text-secondary",
        )}
      >
        {value}
      </span>
      <span className="mt-0.5 font-mono text-[11px] text-outline">{label}</span>
    </div>
  );
}

function TelemetryRow({
  icon: Icon,
  title,
  detail,
  value,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
  value: string;
  accent: "primary" | "secondary" | "tertiary";
}) {
  const accentClass =
    accent === "primary"
      ? "bg-primary/10 text-primary"
      : accent === "secondary"
        ? "bg-secondary/10 text-secondary"
        : "bg-tertiary-container/20 text-tertiary";
  const valueClass =
    accent === "primary"
      ? "text-primary"
      : accent === "secondary"
        ? "text-secondary"
        : "text-on-surface";

  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-3">
      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "flex size-8 items-center justify-center rounded-lg",
            accentClass,
          )}
        >
          <Icon className="size-4" />
        </div>
        <div>
          <p className="font-mono text-[11px] text-on-surface">{title}</p>
          <p className="font-mono text-[11px] text-on-surface-variant">
            {detail}
          </p>
        </div>
      </div>
      <span className={cn("font-sans text-lg font-bold", valueClass)}>
        {value}
      </span>
    </div>
  );
}

function BasicProjectDetail({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project | undefined;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to Projects
      </Link>
      <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
        {project.year} · {project.category}
      </p>
      <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-on-surface-variant sm:text-base">
        {project.longDescription}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-on-primary"
          >
            <ExternalLink className="size-4" />
            Live site
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-surface-container px-4 py-2.5 font-mono text-xs text-on-surface"
          >
            <Code2 className="size-4 text-primary" />
            GitHub
          </a>
        ) : null}
      </div>
      <section className="mt-12">
        <h2 className="font-mono text-xs tracking-wider text-on-surface-variant uppercase">
          Architecture
        </h2>
        <p className="mt-2 font-mono text-sm leading-relaxed text-on-surface-variant">
          {project.architectureNotes}
        </p>
      </section>
      {nextProject ? (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group mt-12 flex flex-col gap-2 rounded-xl bg-surface-container p-5 transition-colors hover:bg-surface-container-high"
        >
          <span className="font-mono text-[11px] tracking-widest text-primary uppercase">
            Next Case Study
          </span>
          <span className="font-sans text-xl font-semibold text-on-surface group-hover:text-primary">
            {nextProject.title}
          </span>
        </Link>
      ) : null}
    </article>
  );
}
