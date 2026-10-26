import Link from "next/link";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio";

const sectionClass =
  "scroll-mt-24 border-b border-white/5 py-20 last:border-b-0";

export default function HomePage() {
  const { personal, about, experience, education, projects, contact } =
    portfolioData;

  const featuredProjects = projects.filter((project) => project.featured);
  const projectGrid = featuredProjects.length > 0 ? featuredProjects : projects;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <section id="about" className={`${sectionClass} pt-16 lg:pt-24`}>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-teal-400 uppercase">
            {personal.availability}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            {personal.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-teal-400/90 sm:text-base">
            {personal.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {personal.tagline}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
            {personal.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<a href={personal.resumeUrl} />}
              className="bg-teal-400 text-zinc-950 hover:bg-teal-300"
            >
              Resume
            </Button>
            {personal.socials.map((social) => (
              <Button
                key={social.href}
                variant="outline"
                render={
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  />
                }
                className="border-white/10 bg-transparent text-zinc-300 hover:border-teal-400/40 hover:bg-zinc-900 hover:text-teal-400"
              >
                {social.label}
              </Button>
            ))}
          </div>

          <div className="mt-16 space-y-5 border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-teal-400">
                01 //
              </span>
              <h2 className="text-xl font-semibold tracking-wide text-zinc-50 uppercase">
                About
              </h2>
            </div>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-2xl leading-relaxed text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-xl border border-white/5 bg-zinc-900/40 px-4 py-3 font-mono text-sm text-zinc-300"
                >
                  <span className="mr-2 text-teal-400">▹</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className={sectionClass}>
          <div className="mb-10 flex items-center gap-3 border-b border-white/5 pb-4">
            <span className="font-mono text-sm font-bold text-teal-400">
              02 //
            </span>
            <h2 className="text-xl font-semibold tracking-wide text-zinc-50 uppercase">
              Experience
            </h2>
          </div>

          <ol className="flex flex-col gap-6">
            {experience.map((job) => (
              <li key={job.id}>
                <article className="group rounded-xl border border-white/5 bg-zinc-900/30 p-6 transition-colors hover:border-teal-400/30 hover:bg-zinc-900/60 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-50 transition-colors group-hover:text-teal-400">
                      {job.role}
                      <span className="font-normal text-zinc-500">
                        {" "}
                        · {job.company}
                      </span>
                    </h3>
                    <time className="shrink-0 font-mono text-xs tracking-wide text-teal-400/90">
                      {job.startDate} — {job.endDate}
                    </time>
                  </div>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {job.location}
                  </p>
                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {job.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm leading-relaxed text-zinc-500"
                      >
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-teal-400/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-teal-400/20 bg-teal-400/10 font-mono text-teal-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className={sectionClass}>
          <div className="mb-10 flex items-center gap-3 border-b border-white/5 pb-4">
            <span className="font-mono text-sm font-bold text-teal-400">
              03 //
            </span>
            <h2 className="text-xl font-semibold tracking-wide text-zinc-50 uppercase">
              Education
            </h2>
          </div>

          <ul className="flex flex-col gap-4">
            {education.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-2 rounded-xl border border-white/5 bg-zinc-900/30 px-6 py-5 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-zinc-50">
                    {item.degree} in {item.field}
                    <span className="font-normal text-zinc-500">
                      {" "}
                      · {item.institution}
                    </span>
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="font-mono text-sm text-teal-400/80"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <time className="shrink-0 font-mono text-xs text-zinc-500">
                  {item.startDate} — {item.endDate}
                </time>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className={sectionClass}>
          <div className="mb-10 flex items-center gap-3 border-b border-white/5 pb-4">
            <span className="font-mono text-sm font-bold text-teal-400">
              04 //
            </span>
            <h2 className="text-xl font-semibold tracking-wide text-zinc-50 uppercase">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projectGrid.map((project) => (
              <Card
                key={project.id}
                className="group border-white/5 bg-zinc-900/40 ring-white/5 transition-colors hover:border-teal-400/30 hover:bg-zinc-900/70"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg text-zinc-50 transition-colors group-hover:text-teal-400">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5"
                      >
                        {project.title}
                        <ArrowUpRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </Link>
                    </CardTitle>
                    <span className="font-mono text-xs text-zinc-500">
                      {project.year}
                    </span>
                  </div>
                  <CardDescription className="text-zinc-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/10 bg-zinc-950/50 font-mono text-teal-300/90"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3 border-white/5 bg-transparent">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-mono text-xs tracking-wider text-teal-400 uppercase hover:underline"
                  >
                    Case study
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 transition-colors hover:text-teal-400"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 transition-colors hover:text-teal-400"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FolderGit2 className="size-4" />
                    </a>
                  ) : null}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className={`${sectionClass} pb-28`}>
          <div className="mb-10 flex items-center gap-3 border-b border-white/5 pb-4">
            <span className="font-mono text-sm font-bold text-teal-400">
              05 //
            </span>
            <h2 className="text-xl font-semibold tracking-wide text-zinc-50 uppercase">
              Contact
            </h2>
          </div>

          <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-zinc-50">
              {contact.heading}
            </h3>
            <p className="mt-2 max-w-xl text-zinc-400">{contact.subheading}</p>

            <form
              className="mt-8 flex flex-col gap-5"
              action={`mailto:${personal.email}`}
              method="get"
              encType="text/plain"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="name"
                    className="font-mono text-xs tracking-wider text-zinc-500 uppercase"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-white/10 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:border-teal-400/50 focus-visible:ring-teal-400/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="email"
                    className="font-mono text-xs tracking-wider text-zinc-500 uppercase"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="border-white/10 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:border-teal-400/50 focus-visible:ring-teal-400/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="font-mono text-xs tracking-wider text-zinc-500 uppercase"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="body"
                  required
                  rows={4}
                  placeholder="Project scope, timeline, or just hello…"
                  className="border-white/10 bg-zinc-950/60 text-zinc-100 placeholder:text-zinc-600 focus-visible:border-teal-400/50 focus-visible:ring-teal-400/30"
                />
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="font-mono text-xs text-zinc-600">
                  Static form · opens your mail client
                </p>
                <Button
                  type="submit"
                  className="bg-teal-400 text-zinc-950 hover:bg-teal-300"
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
