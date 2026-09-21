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
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] font-sans selection:bg-[var(--accentSoft)] selection:text-[var(--accent)]`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground font-semibold text-xs rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
