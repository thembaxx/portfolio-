"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone, Wifi, Battery, Signal } from "lucide-react";

export interface ScreenshotItem {
  src: string;
  alt: string;
  type: "desktop" | "mobile";
  label: string;
}

interface GalleryProps {
  screenshots: ScreenshotItem[];
  projectName: string;
}

export function ProjectScreenshotGallery({ screenshots, projectName }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!screenshots || screenshots.length === 0) return null;

  const currentScreenshot = screenshots[activeTab] || screenshots[0];

  return (
    <div className="space-y-4">
      {/* Gallery view switcher tabs */}
      {screenshots.length > 1 && (
        <div
          role="tablist"
          aria-label={`Screenshot view options for ${projectName}`}
          className="flex items-center gap-2 border-b border-[var(--line)] pb-2"
        >
          {screenshots.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              onClick={() => setActiveTab(idx)}
              aria-selected={activeTab === idx}
              aria-label={`Show ${s.label} screenshot for ${projectName}`}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                activeTab === idx
                  ? "bg-[var(--accentSoft)] text-[var(--accent)] font-semibold"
                  : "text-[var(--mute)] hover:text-[var(--ink)] hover:bg-[var(--card)]"
              }`}
            >
              {s.type === "desktop" ? (
                <Monitor className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Smartphone className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              )}
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Screen reader live notification for screenshot changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Showing ${currentScreenshot.label} screenshot for ${projectName}`}
      </div>

      {/* iPhone Frame Display - exact CSS-drawn frame with real screenshot inside */}
      <div className="flex justify-center items-center py-4 bg-[var(--bg)] rounded-2xl border border-[var(--line)]">
        <div className="relative w-[280px] sm:w-[310px] h-[560px] sm:h-[600px] bg-[#111111] rounded-[48px] p-3 shadow-xl border-4 border-[#2b2b2b] flex flex-col justify-between overflow-hidden">
          {/* Dynamic Island / Speaker notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-between px-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-gray-800" />
            <div className="w-2 h-2 rounded-full bg-blue-900/40" />
          </div>

          {/* iPhone Status Bar */}
          <div className="relative z-10 pt-2 px-6 pb-1 flex justify-between items-center text-[10px] text-white/80 font-sans tracking-tight">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content Container */}
          <div className="relative flex-1 w-full bg-white dark:bg-zinc-900 rounded-[36px] overflow-hidden my-1 border border-black/10">
            <Image
              src={currentScreenshot.src}
              alt={currentScreenshot.alt || `${projectName} screenshot`}
              fill
              sizes="(max-width: 760px) 280px, 310px"
              className="object-cover object-top"
              priority={false}
            />
          </div>

          {/* Home Bar Indicator */}
          <div className="relative z-10 pt-1 pb-0.5 flex justify-center">
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
