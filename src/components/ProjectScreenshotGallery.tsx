"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone } from "lucide-react";

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

  return (
    <div className="space-y-4">
      {/* Viewport switcher tabs */}
      {screenshots.length > 1 && (
        <div className="flex items-center gap-2 border-b border-border pb-2">
          {screenshots.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeTab === idx
                  ? "bg-secondary text-foreground border border-border shadow-2xs font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
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

      {/* Primary Displayed Screenshot with 1px outline offset -1px */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card group shadow-xs outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10">
        <div className="aspect-[16/9] relative w-full overflow-hidden bg-muted">
          <Image
            src={screenshots[activeTab]?.src || screenshots[0].src}
            alt={screenshots[activeTab]?.alt || `${projectName} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01] will-change-transform"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
