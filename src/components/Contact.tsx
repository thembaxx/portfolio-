"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from "@phosphor-icons/react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  async function handleCopy() {
    if (timeout.current) clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText("me@themba.dev");
      setStatus("copied");
      timeout.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("failed");
    }
  }

  return (
    <section id="contact" className="portfolio-section" aria-labelledby="contact-heading">
      <div className="portfolio-wrap">
        <SectionLabel title="04 — Contact" note="Available now" />
        <h2 id="contact-heading" className="section-heading">
          Have a role or project in <em>mind?</em>
        </h2>
        <a className="contact-email" href="mailto:me@themba.dev">
          me@themba.dev
        </a>
        <div className="action-row">
          <button
            className="portfolio-button"
            type="button"
            onClick={handleCopy}
            aria-label={
              status === "copied"
                ? "Email address me@themba.dev copied to clipboard"
                : "Copy email address me@themba.dev to clipboard"
            }
          >
            {status === "copied" ? (
              <>
                <CheckIcon size={16} weight="bold" aria-hidden="true" />
                Copied
              </>
            ) : (
              <>
                <CopyIcon size={16} aria-hidden="true" />
                Copy email
              </>
            )}
          </button>
          <a
            className="text-link mono"
            href="https://www.linkedin.com/in/themba-p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            LinkedIn <ArrowUpRightIcon size={14} aria-hidden="true" />
          </a>
          <a
            className="text-link mono"
            href="https://github.com/thembaxx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            GitHub <ArrowUpRightIcon size={14} aria-hidden="true" />
          </a>
        </div>
        <p
          className={status === "failed" ? "copy-status" : "sr-only"}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {status === "copied"
            ? "Email address me@themba.dev copied to clipboard"
            : status === "failed"
              ? "Could not copy automatically. Select the email address above to copy it, or click it to open your email app."
              : ""}
        </p>
      </div>
    </section>
  );
}
