import { siteUrl } from "@/lib/seo";

export default function sitemap() {
  // No invented production URLs. Configure SITE_URL to populate this sitemap.
  if (!siteUrl) return [];
  return ["/", "/experience", "/contact"].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
