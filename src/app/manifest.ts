import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} Portfolio`, short_name: brand.initials,
    description: brand.description, start_url: "/", scope: "/",
    display: "browser", background_color: brand.colors.paper, theme_color: brand.colors.paper,
    icons: [192, 512].map(size => ({ src: `/brand/icon-${size}.png`, sizes: `${size}x${size}`, type: "image/png", purpose: "any" })),
  };
}
