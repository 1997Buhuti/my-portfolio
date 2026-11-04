import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/project-detail";
import { portfolioData } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} · ${portfolioData.personal.name}`;
  const canonical = `/projects/${project.slug}/`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: portfolioData.personal.name,
      title,
      description: project.description,
      ...(project.coverImage ? { images: [project.coverImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      ...(project.coverImage ? { images: [project.coverImage] } : {}),
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
