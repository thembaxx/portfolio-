import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
