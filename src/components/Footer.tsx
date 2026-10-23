import { LogoMark } from "./LogoMark";
import { brand } from "@/lib/brand";

export function Footer() {
  // oxlint-disable-next-line react/purity -- This server component renders the current copyright year.
  const year = new Date().getFullYear();
  return (
    <footer className="portfolio-footer portfolio-wrap mono">
      <span className="footer-identity">
        <LogoMark size={24} />© {year} {brand.name}
      </span>
      <span>Frontend Developer · South Africa</span>
    </footer>
  );
}
