import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Themba Mndebele — Frontend Developer | React & TypeScript",
  description:
    "Themba Mndebele is a South Africa-based Frontend Developer specialising in React, TypeScript, Next.js, and modern UI/UX design. View production projects and contact for engineering opportunities.",
  keywords: [
    "Themba Mndebele",
    "Frontend Developer",
    "React Developer",
    "TypeScript Developer",
    "Next.js",
    "South Africa Frontend Developer",
    "UI/UX Engineer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Themba Mndebele", url: "https://themba.dev" }],
  creator: "Themba Mndebele",
  metadataBase: new URL("https://themba.dev"),
  openGraph: {
    title: "Themba Mndebele — Frontend Developer | React & TypeScript",
    description:
      "Frontend Developer specialising in React, TypeScript, and thoughtful digital user experiences. Based in South Africa, open to remote opportunities.",
    url: "https://themba.dev",
    siteName: "Themba Mndebele Portfolio",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Themba Mndebele — Frontend Developer | React & TypeScript",
    description:
      "Frontend Developer specialising in React, TypeScript, and thoughtful digital user experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://themba.dev/#person",
        name: "Themba Mndebele",
        url: "https://themba.dev",
        image: "https://themba.dev/profile.jpg",
        jobTitle: "Frontend Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance / Open to Opportunities",
        },
        sameAs: [
          "https://github.com/thembaxx",
          "https://www.linkedin.com/in/themba-p",
        ],
        knowsAbout: [
          "React",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "UI/UX Engineering",
          "Web Accessibility",
          "Frontend Architecture",
        ],
        description:
          "Frontend developer with ~4 years of experience building responsive, accessible web applications using React, TypeScript, and Next.js.",
      },
      {
        "@type": "WebSite",
        "@id": "https://themba.dev/#website",
        url: "https://themba.dev",
        name: "Themba Mndebele Portfolio",
        description:
          "Official portfolio of Themba Mndebele, Frontend Developer specialising in React, TypeScript, and Next.js.",
        publisher: {
          "@id": "https://themba.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] font-sans selection:bg-[var(--accentSoft)] selection:text-[var(--accent)]`}
      >
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-4 z-[100] px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium text-xs shadow-md border border-[var(--line)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] transition-all"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
