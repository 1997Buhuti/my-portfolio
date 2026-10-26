import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Download,
  ExternalLink,
  Mail,
  Send,
  Terminal,
} from "lucide-react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentText = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
} as const;

const accentBorderHover = {
  primary: "hover:border-primary/30",
  secondary: "hover:border-secondary/30",
  tertiary: "hover:border-tertiary/30",
} as const;

const accentChip = {
  primary: "border-hairline bg-surface-container text-primary",
  secondary: "border-hairline bg-surface-container text-secondary",
  tertiary: "border-hairline bg-surface-container text-tertiary",
} as const;

export default function HomePage() {
  const { personal, stats, about, experience, education, projects, contact } =
    portfolioData;

  const featuredProjects = projects.filter((project) => project.featured);
  const primaryEducation = education[0];

  return (
    <div className="relative w-full overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[35%] -right-40 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[70%] -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-20 px-4 py-10 sm:px-6 lg:space-y-28 lg:px-6 lg:py-24">
        <section
          id="hero"
          className="flex flex-col gap-6 pt-2 lg:items-center lg:gap-8 lg:pt-8 lg:text-center"
        >
          <div className="relative mx-auto mb-1 hidden lg:block">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-md" />
            <div className="relative size-40 overflow-hidden rounded-full border-2 border-primary/40 bg-surface-container-high p-1 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="size-full rounded-full object-cover"
              />
            </div>
            <div className="absolute right-2 bottom-1 flex size-5 items-center justify-center rounded-full border-2 border-surface bg-surface-container-lowest">
              <span className="size-3 animate-pulse rounded-full bg-primary-container" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-hairline bg-surface-container-high px-3.5 py-1.5 shadow-sm lg:self-center">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wide text-primary uppercase">
              {personal.availability}
            </span>
          </div>

          <p className="font-mono text-xs tracking-[0.05em] text-on-surface-variant uppercase lg:hidden">
            01 // Profile &amp; Core
          </p>

          <div className="flex max-w-3xl flex-col gap-4">
            <h1 className="font-sans text-[36px] leading-[44px] font-bold tracking-tight text-on-surface lg:text-[42px] lg:leading-[50px]">
              {personal.tagline}
            </h1>
            <p className="max-w-2xl font-mono text-sm leading-[22px] text-on-surface-variant lg:mx-auto lg:text-base lg:leading-[26px]">
              {personal.title} specializing in{" "}
              <span className="font-medium text-on-surface">Next.js</span>,{" "}
              <span className="font-medium text-on-surface">TypeScript</span>,
              and distributed web interfaces. {personal.summary.split(". ")[1]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-center lg:gap-3">
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-mono text-xs font-semibold tracking-wider text-on-primary shadow-[0_0_18px_rgba(45,212,191,0.25)] transition-transform active:scale-95 lg:rounded-lg lg:px-5 lg:shadow-lg lg:shadow-primary/20 lg:hover:bg-primary-fixed"
            >
              <Download className="size-4" />
              Resume (PDF)
            </a>
            <CopyEmailButton
              email={personal.email}
              className="hidden lg:inline-flex"
            />
            {personal.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-3 py-2 font-mono text-xs tracking-wider text-on-surface transition-colors hover:text-primary lg:rounded-lg lg:border lg:border-transparent lg:bg-transparent lg:p-2.5 lg:hover:border-hairline lg:hover:bg-surface-container"
                aria-label={social.label}
              >
                {social.icon === "github" ? (
                  <GitHubIcon className="size-4" />
                ) : social.icon === "linkedin" ? (
                  <LinkedInIcon className="size-4" />
                ) : social.icon === "email" ? (
                  <Mail className="size-4" />
                ) : (
                  <ExternalLink className="size-4" />
                )}
                <span className="lg:hidden">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-2 w-full rounded-xl border border-hairline bg-surface-container-low p-4 shadow-sm sm:p-5 lg:mt-4">
            <div className="grid grid-cols-2 gap-4 text-center divide-y divide-hairline sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center pt-2 sm:pt-0"
                >
                  <div
                    className={cn(
                      "font-sans text-xl font-bold sm:text-2xl",
                      accentText[stat.accent],
                    )}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] tracking-wider text-on-surface-variant uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-low p-4 shadow-md lg:hidden">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <BrainCircuit className="size-5" />
              <span className="font-mono text-xs tracking-wider text-primary uppercase">
                Engineering Philosophy
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
              {about.philosophy}
            </p>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 flex flex-col gap-6 lg:gap-8"
        >
          <div className="flex items-center gap-3 border-b border-hairline pb-4">
            <span className="font-mono text-sm font-bold text-primary">
              01 //
            </span>
            <h2 className="font-sans text-xl font-semibold tracking-wider text-on-surface uppercase sm:text-2xl">
              About &amp; Philosophy
            </h2>
          </div>

          <div className="flex flex-col gap-5 font-mono text-sm leading-relaxed text-on-surface-variant lg:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {about.competencies.map((item) => (
              <div
                key={item.index}
                className={cn(
                  "flex flex-col gap-2 rounded-xl border border-hairline bg-surface-container-low p-5 shadow-sm transition-colors",
                  accentBorderHover[item.accent],
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-wider",
                    accentText[item.accent],
                  )}
                >
                  {item.index}
                </span>
                <h3 className="font-sans text-lg font-semibold text-on-surface">
                  {item.title}
                </h3>
                <p className="font-mono text-[13px] leading-5 text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden items-start gap-3.5 rounded-xl border border-hairline bg-surface-container-high/40 p-5 lg:flex">
            <Terminal className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="font-mono text-[13px] leading-relaxed text-on-surface-variant">
              <span className="font-medium text-on-surface">Core belief:</span>{" "}
              {about.philosophy}
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 flex flex-col gap-6 lg:gap-8"
        >
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-primary">
                02 //
              </span>
              <h2 className="font-sans text-xl font-semibold tracking-wider text-on-surface uppercase sm:text-2xl">
                Experience &amp; Path
              </h2>
            </div>
            <span className="font-mono text-[11px] text-on-surface-variant">
              2014 — Present
            </span>
          </div>

          <ol className="relative flex flex-col gap-6 pl-3 lg:pl-0">
            <div
              aria-hidden
              className="absolute top-2 bottom-3 left-[13px] w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent lg:hidden"
            />
            {experience.map((job) => (
              <li key={job.id} className="relative flex items-start gap-4">
                <div className="relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-container-lowest shadow-sm lg:hidden">
                  <span
                    className={cn(
                      "size-2.5 rounded-full",
                      job.accent === "primary"
                        ? "bg-primary shadow-[0_0_8px_rgba(87,241,219,0.8)]"
                        : "bg-secondary",
                    )}
                  />
                </div>
                <article
                  className={cn(
                    "group flex flex-1 flex-col gap-3 rounded-xl border border-hairline bg-surface-container-low p-5 shadow-sm transition-all duration-300 hover:bg-surface-container/70 sm:p-7",
                    accentBorderHover[job.accent],
                  )}
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3
                      className={cn(
                        "font-sans text-lg font-semibold text-on-surface transition-colors",
                        job.accent === "primary"
                          ? "group-hover:text-primary"
                          : "group-hover:text-secondary",
                      )}
                    >
                      {job.role}
                      <span className="font-normal text-on-surface-variant">
                        {" "}
                        · {job.company}
                      </span>
                    </h3>
                    <time
                      className={cn(
                        "shrink-0 font-mono text-[11px] font-medium tracking-wide",
                        accentText[job.accent],
                      )}
                    >
                      {job.startDate} — {job.endDate}
                    </time>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "rounded-md border border-hairline bg-surface-container-highest px-2.5 py-1 font-mono text-[11px]",
                          accentText[job.accent],
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}

            {primaryEducation ? (
              <li className="relative flex items-start gap-4">
                <div className="relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-container-lowest shadow-sm lg:hidden">
                  <span className="size-2.5 rounded-full bg-tertiary-fixed-dim" />
                </div>
                <article className="flex flex-1 flex-col gap-2 rounded-xl border border-hairline bg-surface-container-low p-5 shadow-sm sm:p-7">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="font-sans text-lg font-semibold text-on-surface">
                      {primaryEducation.degree} in {primaryEducation.field}
                      <span className="font-normal text-on-surface-variant">
                        {" "}
                        · {primaryEducation.institution}
                      </span>
                    </h3>
                    <time className="font-mono text-[11px] text-on-surface-variant">
                      {primaryEducation.startDate} — {primaryEducation.endDate}
                    </time>
                  </div>
                  <p className="font-mono text-[13px] text-primary">
                    {primaryEducation.details.join(" · ")}
                  </p>
                </article>
              </li>
            ) : null}
          </ol>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 flex flex-col gap-6 lg:gap-8"
        >
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-primary">
                03 //
              </span>
              <h2 className="font-sans text-xl font-semibold tracking-wider text-on-surface uppercase sm:text-2xl">
                Featured Work
              </h2>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary">
                ({String(featuredProjects.length).padStart(2, "0")})
              </span>
            </div>
            <a
              href="#projects"
              className="group hidden items-center gap-1.5 font-mono text-[11px] text-primary hover:underline sm:flex"
            >
              Full archive
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface-container-low shadow-md transition-all duration-300 hover:bg-surface-container/70 md:flex-row md:gap-6 md:p-6",
                  accentBorderHover[project.accent],
                )}
              >
                {project.coverImage ? (
                  <div className="relative aspect-video shrink-0 overflow-hidden border-b border-hairline bg-surface-container-highest md:aspect-auto md:w-5/12 md:rounded-lg md:border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.coverImage}
                      alt=""
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 mix-blend-overlay",
                        project.accent === "secondary"
                          ? "bg-secondary/10"
                          : "bg-primary/10",
                      )}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-surface-container-low via-surface-container-high/40 to-transparent p-4 md:hidden">
                      <span
                        className={cn(
                          "rounded bg-surface-container-lowest/80 px-2 py-1 font-mono text-[11px] tracking-widest uppercase",
                          accentText[project.accent],
                        )}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col justify-between gap-4 p-4 md:w-7/12 md:p-0">
                  <div className="flex flex-col gap-2">
                    <div className="hidden items-center justify-between md:flex">
                      <span
                        className={cn(
                          "font-mono text-[11px] tracking-wider uppercase",
                          accentText[project.accent],
                        )}
                      >
                        {project.category}
                        {project.versionLabel
                          ? ` · ${project.versionLabel}`
                          : ""}
                      </span>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-on-surface-variant transition-colors hover:text-primary"
                          aria-label={`${project.title} live site`}
                        >
                          <ExternalLink className="size-5" />
                        </a>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between gap-2 md:block">
                      <h3
                        className={cn(
                          "font-sans text-xl font-semibold text-on-surface transition-colors sm:text-2xl",
                          project.accent === "secondary"
                            ? "group-hover:text-secondary"
                            : project.accent === "tertiary"
                              ? "group-hover:text-tertiary"
                              : "group-hover:text-primary",
                        )}
                      >
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      {project.versionLabel ? (
                        <span
                          className={cn(
                            "font-mono text-[11px] md:hidden",
                            accentText[project.accent],
                          )}
                        >
                          {project.versionLabel}
                        </span>
                      ) : null}
                    </div>
                    <p className="font-mono text-[13px] leading-relaxed text-on-surface-variant">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "rounded px-2.5 py-1 font-mono text-[11px]",
                          accentChip[project.accent],
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-1 md:hidden">
                    <Link
                      href={`/projects/${project.slug}`}
                      className={cn(
                        "inline-flex items-center gap-1 font-mono text-xs hover:underline",
                        accentText[project.accent],
                      )}
                    >
                      Case Study
                      <ArrowRight className="size-4" />
                    </Link>
                    {project.githubUrl ? (
                      <>
                        <span className="text-outline-variant">•</span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs text-on-surface-variant hover:text-on-surface"
                        >
                          GitHub
                          <ArrowUpRight className="size-4" />
                        </a>
                      </>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 flex flex-col gap-6 pb-8 lg:gap-8"
        >
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-primary">
                04 //
              </span>
              <h2 className="font-sans text-xl font-semibold tracking-wider text-on-surface uppercase sm:text-2xl">
                Get In Touch
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-xl border border-hairline bg-surface-container-low p-5 shadow-lg sm:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-lg font-semibold text-on-surface">
                {contact.heading}
              </h3>
              <p className="font-mono text-sm text-on-surface-variant">
                {contact.subheading}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-3 lg:hidden">
              <div className="flex min-w-0 items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <span className="truncate font-mono text-xs text-on-surface">
                  {personal.email}
                </span>
              </div>
              <CopyEmailButton
                email={personal.email}
                className="rounded-full px-3 py-1.5 text-[11px]"
                labelClassName="sr-only"
              />
            </div>

            <form
              className="flex flex-col gap-4"
              action={`mailto:${personal.email}`}
              method="get"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="name"
                    className="font-mono text-[11px] tracking-wide text-on-surface-variant"
                  >
                    <span className="text-primary lg:hidden">$ </span>
                    <span className="hidden lg:inline">{"// "}</span>
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-hairline bg-surface-container-high font-mono text-sm text-on-surface placeholder:text-outline focus-visible:border-primary focus-visible:ring-primary/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="email"
                    className="font-mono text-[11px] tracking-wide text-on-surface-variant"
                  >
                    <span className="text-primary lg:hidden">$ </span>
                    <span className="hidden lg:inline">{"// "}</span>
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="border-hairline bg-surface-container-high font-mono text-sm text-on-surface placeholder:text-outline focus-visible:border-primary focus-visible:ring-primary/40"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="message"
                  className="font-mono text-[11px] tracking-wide text-on-surface-variant"
                >
                  <span className="text-primary lg:hidden">$ </span>
                  <span className="hidden lg:inline">{"// "}</span>
                  Project scope &amp; timeline
                </Label>
                <Textarea
                  id="message"
                  name="body"
                  required
                  rows={4}
                  placeholder="Architecture needs, team size, and target start date…"
                  className="resize-none border-hairline bg-surface-container-high font-mono text-sm text-on-surface placeholder:text-outline focus-visible:border-primary focus-visible:ring-primary/40"
                />
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="hidden font-mono text-[11px] text-on-surface-variant sm:block">
                  Encrypted via TLS 1.3
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-mono text-xs font-semibold tracking-wider text-on-primary shadow-[0_0_24px_rgba(45,212,191,0.25)] transition-all hover:bg-primary-fixed active:scale-[0.98] sm:w-auto sm:rounded-lg"
                >
                  <Send className="size-4" />
                  Dispatch message
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 rounded-lg border border-hairline bg-surface-container p-4 font-mono text-[11px] text-on-surface-variant shadow-sm sm:flex-row">
            <span className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              sys.status: optimal [latency: 18ms]
            </span>
            <span>
              Designed &amp; engineered with Next.js, Tailwind &amp; JetBrains
              Mono.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
