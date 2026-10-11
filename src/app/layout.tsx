import type { Metadata, Viewport } from "next";
import { identitySchema, serializeSchema, siteMetadata } from "@/lib/seo";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#efeae0" }, { media: "(prefers-color-scheme: dark)", color: "#0f0e0c" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM portfolio overview" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(identitySchema) }}
        />
      </head>
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] font-sans selection:bg-[var(--accentSoft)] selection:text-[var(--accent)]`}
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
        <Analytics />
      </body>
    </html>
  );
}
