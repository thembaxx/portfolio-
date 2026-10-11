import { LogoMark } from "./LogoMark";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="portfolio-footer portfolio-wrap mono">
      <span className="footer-identity"><LogoMark size={24} />© {new Date().getFullYear()} {brand.name}</span>
      <span>Frontend Developer · South Africa</span>
    </footer>
  );
}
