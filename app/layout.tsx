import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { ADVISORY_SITE } from "@/lib/advisory-config";
import "./globals.css";
import "./montserrat.css";
import "./advisory.css";

export const metadata: Metadata = {
  metadataBase: new URL(ADVISORY_SITE),
  title: "Prime Bottomline Advisory",
  description: "Fractional CFO, capital strategy and transaction advisory for founders and established businesses.",
  openGraph: {
    siteName: "Prime Bottomline Advisory",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prime Bottomline Advisory" }]
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
