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
        <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
          {screenshots.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                activeTab === idx
                  ? "bg-slate-800 text-sky-400 border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
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

      {/* Primary Displayed Screenshot */}
      <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 group">
        <div className="aspect-[16/9] relative w-full overflow-hidden bg-slate-900">
          <Image
            src={screenshots[activeTab]?.src || screenshots[0].src}
            alt={screenshots[activeTab]?.alt || `${projectName} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
