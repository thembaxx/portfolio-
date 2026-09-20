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
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring ${
                activeTab === idx
                  ? "bg-secondary text-foreground border border-border shadow-2xs font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {s.type === "desktop" ? (
                <Monitor className="w-3.5 h-3.5" />
              ) : (
                <Smartphone className="w-3.5 h-3.5" />
              )}
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Primary Displayed Screenshot with 1px outline offset by -1px */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card group shadow-2xs">
        <div className="aspect-[16/9] relative w-full overflow-hidden bg-muted outline outline-1 outline-foreground/10 -outline-offset-1 rounded-2xl">
          <Image
            src={screenshots[activeTab]?.src || screenshots[0].src}
            alt={screenshots[activeTab]?.alt || `${projectName} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
