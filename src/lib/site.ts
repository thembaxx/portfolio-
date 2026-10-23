/** Canonical URL configuration for metadata and crawler documents. */
const origin = new URL(process.env.SITE_URL ?? "https://themba.dev");
if (!["https:", "http:"].includes(origin.protocol) || origin.username || origin.password) {
  throw new Error("SITE_URL must be a public HTTP(S) URL without credentials.");
}
export const siteUrl = origin.origin;
export const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).toString();
export const isIndexable =
  process.env.INDEXING_ENABLED === "true" ||
  (process.env.INDEXING_ENABLED !== "false" && process.env.VERCEL_ENV !== "preview");
