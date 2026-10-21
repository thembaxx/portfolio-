"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";

export interface ScreenshotItem {
  src: string;
  alt: string;
  type: "desktop" | "mobile" | "tablet";
  label: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  screenshots: ScreenshotItem[];
  projectName: string;
}

export function ProjectScreenshotGallery({ screenshots, projectName }: GalleryProps) {
  const [activeTab, setActiveTab] = useState(0);
  const id = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  if (!screenshots.length) return null;

  const current = screenshots[activeTab] ?? screenshots[0];
  const hasTabs = screenshots.length > 1;
  const panelId = `${id}-panel`;

  function handleKey(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % screenshots.length; break;
      case "ArrowLeft": next = (index - 1 + screenshots.length) % screenshots.length; break;
      case "Home": next = 0; break;
      case "End": next = screenshots.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActiveTab(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="screenshot-gallery">
      {hasTabs && (
        <div role="tablist" aria-label={`Screenshot view options for ${projectName}`} className="screenshot-tabs mono">
          {screenshots.map((screenshot, index) => (
            <button key={screenshot.label} type="button" role="tab"
              ref={element => { tabs.current[index] = element; }}
              id={`${id}-tab-${index}`} aria-controls={panelId}
              aria-selected={activeTab === index} tabIndex={activeTab === index ? 0 : -1}
              aria-label={`Show ${screenshot.label} screenshot for ${projectName}`}
              onClick={() => setActiveTab(index)} onKeyDown={event => handleKey(event, index)}>
              {screenshot.label}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Showing ${current.label} screenshot for ${projectName}`}
      </p>
      <div id={panelId} role={hasTabs ? "tabpanel" : undefined}
        aria-labelledby={hasTabs ? `${id}-tab-${activeTab}` : undefined}>
        <figure className={`screenshot-figure screenshot-${current.type}`}>
          <a href={current.src} target="_blank" rel="noopener noreferrer"
            aria-label={`View full ${current.label} screenshot for ${projectName} (opens in a new tab)`}>
            <Image src={current.src} alt={current.alt} unoptimized={current.src.startsWith("https://") || undefined} width={current.width ?? 1280}
              height={current.height ?? 668} sizes="(min-width: 1024px) 960px, calc(100vw - 48px)" />
          </a>
          <figcaption className="mono">{current.label} <span aria-hidden="true">↗</span></figcaption>
        </figure>
      </div>
    </div>
  );
}
