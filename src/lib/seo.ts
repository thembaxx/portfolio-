import type { Metadata } from "next";
import { brand } from "./brand";
import { absoluteUrl, isIndexable, siteUrl } from "./site";
import type { ProjectData } from "@/data/projects";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: brand.title, template: `%s | ${brand.name}` },
  description: brand.description,
  applicationName: `${brand.name} Portfolio`,
  manifest: "/manifest.webmanifest",
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: brand.title,
    description: brand.description,
    url: siteUrl,
    siteName: `${brand.name} Portfolio`,
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/brand/social.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.title,
    description: brand.description,
    images: ["/brand/social.png"],
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: { index: isIndexable, follow: isIndexable, "max-image-preview": "large" },
  },
  category: "technology",
};

export const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: brand.name,
      url: siteUrl,
      image: absoluteUrl("/profile.jpg"),
      jobTitle: brand.role,
      email: `mailto:${brand.email}`,
      homeLocation: { "@type": "Place", name: brand.location },
      sameAs: [brand.github, brand.linkedin],
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "Web Accessibility",
        "Frontend Architecture",
        "UI/UX Engineering",
      ],
      description:
        "Frontend developer with a design background and about four years of experience building React products.",
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteUrl,
      name: `${brand.name} Portfolio`,
      description: brand.description,
      publisher: { "@id": absoluteUrl("/#person") },
      inLanguage: "en-ZA",
    },
  ],
};

export function projectMetadata(project: ProjectData): Metadata {
  const images = project.screenshots.length
    ? project.screenshots
    : [
        {
          src: "/brand/social.png",
          width: 1200,
          height: 630,
          alt: `${project.title} — ${brand.name}`,
        },
      ];
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.title} — A project by ${brand.name}`,
      description: project.description,
      url: absoluteUrl(`/projects/${project.id}`),
      siteName: `${brand.name} Portfolio`,
      type: "article",
      images: images.map((screenshot) => ({
        url: screenshot.src,
        width: screenshot.width,
        height: screenshot.height,
        alt: screenshot.alt,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${brand.name}`,
      description: project.description,
      images: [images[0].src],
    },
  };
}

export function projectSchema(project: ProjectData) {
  const url = absoluteUrl(`/projects/${project.id}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#application`,
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
        url: project.liveUrl || project.githubUrl,
        ...(project.githubUrl ? { sameAs: project.githubUrl } : {}),
        image: absoluteUrl(project.screenshots[0]?.src ?? "/brand/social.png"),
        author: { "@id": absoluteUrl("/#person") },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: brand.name, item: siteUrl },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ] as const,
  };
}

export const serializeSchema = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");
