"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ProjectData } from "@/data/projects";

gsap.registerPlugin(useGSAP);
if (typeof window === "undefined" || typeof window.matchMedia === "function") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectCarousel({ projects }: { projects: ProjectData[] }) {
  const id = useId();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window.matchMedia !== "function") return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".carousel-heading", {
          y: 20,
          opacity: 0.4,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 90%", once: true },
        });
        gsap.fromTo(
          ".carousel-track",
          { y: 24 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "top 55%",
              scrub: 0.6,
            },
          },
        );
      });
      return () => media.revert();
    },
    { scope: root },
  );
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const left = element.getBoundingClientRect().left;
        let nearest = 0;
        let distance = Infinity;
        Array.from(element.children).forEach((child, index) => {
          const delta = Math.abs(child.getBoundingClientRect().left - left);
          if (delta < distance) {
            nearest = index;
            distance = delta;
          }
        });
        setActive(nearest);
      });
    };
    element.addEventListener("scroll", update, { passive: true });
    const resize = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    resize?.observe(element);
    window.addEventListener("resize", update);
    update();
    return () => {
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resize?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  function goTo(index: number) {
    const element = track.current;
    const card = element?.children[Math.max(0, Math.min(index, projects.length - 1))];
    if (!element || !card) return;
    const offset = card.getBoundingClientRect().left - element.getBoundingClientRect().left;
    element.scrollTo({
      left: element.scrollLeft + offset,
      behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  if (!projects.length) return null;

  return (
    <section
      ref={root}
      className="project-carousel"
      aria-roledescription="carousel"
      aria-labelledby={`${id}-heading`}
    >
      <div className="carousel-heading">
        <div>
          <h3 id={`${id}-heading`}>
            More projects <em>&amp; experiments.</em>
          </h3>
          <p>Small ideas, fully explored. Take a closer look.</p>
        </div>
        <div className="carousel-controls">
          <span className="mono carousel-count" aria-hidden="true">
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Previous project"
            aria-controls={`${id}-track`}
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <ArrowLeftIcon size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            aria-controls={`${id}-track`}
            disabled={active === projects.length - 1}
            onClick={() => goTo(active + 1)}
          >
            <ArrowRightIcon size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul
        id={`${id}-track`}
        ref={track}
        className="carousel-track"
        tabIndex={0}
        aria-label="Project collection. Swipe, scroll, or use left and right arrow keys."
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const target = {
            ArrowLeft: active - 1,
            ArrowRight: active + 1,
            Home: 0,
            End: projects.length - 1,
          }[event.key];
          if (target === undefined) return;
          event.preventDefault();
          goTo(target);
        }}
      >
        {projects.map((project, index) => {
          const screenshot =
            project.screenshots.find((item) => item.type === "desktop") ?? project.screenshots[0];
          return (
            <li key={project.id} className="carousel-slide" data-active={active === index}>
              <Link className="carousel-card" href={`/projects/${project.id}`}>
                {screenshot && (
                  <div className="carousel-image">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={screenshot.width ?? 1280}
                      height={screenshot.height ?? 668}
                      unoptimized={screenshot.src.startsWith("https://") || undefined}
                      sizes="(min-width: 1000px) 600px, (min-width: 760px) 70vw, 86vw"
                    />
                  </div>
                )}
                <div className="carousel-copy">
                  <span className="mono carousel-position" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{project.title}</h4>
                  <ArrowUpRightIcon className="carousel-link-icon" size={24} aria-hidden="true" />
                  <p>{project.subtitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="carousel-footer mono">
        <span>Swipe or scroll to explore</span>
        <span className="sr-only" role="status" aria-atomic="true">
          Project {active + 1} of {projects.length}: {projects[active]?.title}
        </span>
        <div className="carousel-progress" aria-hidden="true">
          <span
            style={{
              width: `${100 / projects.length}%`,
              transform: `translateX(${active * 100}%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
