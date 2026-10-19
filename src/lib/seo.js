// Set SITE_URL to the verified production origin before a production build.
// Preview deployment hostnames are deliberately not treated as canonical URLs.
const configuredUrl = process.env.SITE_URL;

function productionOrigin(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
      throw new Error('Expected an HTTP(S) origin without a path, credentials, query, or fragment');
    }
    return url.origin;
  } catch {
    throw new Error('SITE_URL must be the verified production origin, for example an HTTPS origin without a path.');
  }
}

export const siteUrl = productionOrigin(configuredUrl);
export const siteName = "Christian Tomas Ocampo";
export const siteDescription = "Christian Tomas Ocampo - Computer Science at UC Berkeley. Building backend infrastructure, full-stack products, and AI tools.";

export function pageMetadata(title, description = siteDescription, path = "/") {
  const fullTitle = title ? `${title} - ${siteName}` : siteName;
  const url = siteUrl ? new URL(path, siteUrl).href : null;
  return {
    ...(title ? { title } : {}),
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      type: "website",
      locale: "en_US",
      ...(url ? { url } : {}),
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
