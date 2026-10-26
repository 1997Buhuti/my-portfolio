"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FolderGit2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24"
    >
      <Button
        variant="ghost"
        render={<Link href="/#projects" />}
        className="mb-10 -ml-2 gap-2 text-zinc-400 hover:bg-zinc-900 hover:text-teal-400"
      >
        <ArrowLeft className="size-4" />
        Back
      </Button>

      <p className="font-mono text-xs tracking-[0.2em] text-teal-400 uppercase">
        {project.year} · Case study
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
        {project.longDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="border-teal-400/20 bg-teal-400/10 font-mono text-teal-300"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <Button
            className="bg-teal-400 text-zinc-950 hover:bg-teal-300"
            render={
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <ExternalLink className="size-4" />
            Live site
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button
            variant="outline"
            className="border-white/10 text-zinc-300 hover:border-teal-400/40 hover:text-teal-400"
            render={
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <FolderGit2 className="size-4" />
            GitHub
          </Button>
        ) : null}
      </div>

      <section className="mt-14">
        <h2 className="font-mono text-xs tracking-wider text-zinc-500 uppercase">
          Architecture
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.architectureNotes}
        </p>
        <div className="mt-6 flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-dashed border-teal-400/25 bg-zinc-900/50">
          <div className="px-6 text-center">
            <p className="font-mono text-sm text-teal-400/80">
              Architecture diagram placeholder
            </p>
            <p className="mt-2 max-w-sm text-xs text-zinc-600">
              Drop a system diagram, sequence sketch, or infrastructure map
              here.
            </p>
          </div>
        </div>
      </section>
    </motion.article>
  );
}
