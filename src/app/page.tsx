import type { Metadata } from "next";
import { UnderConstructionContent } from "@/components/under-construction/UnderConstructionContent";

export const metadata: Metadata = {
  title: "clamby.id - Fashion Brand Under Construction",
  description:
    "clamby.id website is currently under construction. Please check back soon for our latest fashion collections and updates.",
  keywords: ["fashion", "clamby", "clothing", "style", "fashion brand"],
  authors: [{ name: "clamby.id" }],
  creator: "clamby.id",
  publisher: "clamby.id",
  openGraph: {
    title: "clamby.id - Fashion Brand Under Construction",
    description:
      "clamby.id website is currently under construction. Please check back soon for our latest fashion collections and updates.",
    url: "https://clamby.id",
    siteName: "clamby.id",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "clamby.id - Fashion Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "clamby.id - Fashion Brand Under Construction",
    description:
      "clamby.id website is currently under construction. Please check back soon for our latest fashion collections and updates.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://clamby.id"),
};

export default function Home() {
  return <UnderConstructionContent />;
}
