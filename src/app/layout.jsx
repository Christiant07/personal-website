import { DM_Serif_Display, DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Christian Tomas Ocampo",
    template: "%s - Christian Tomas Ocampo",
  },
  description:
    "Christian Tomas Ocampo - Computer Science at UC Berkeley. Building backend infrastructure, full-stack products, and AI tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
