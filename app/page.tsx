import type { Metadata } from "next";
import AdvisoryLanding from "@/components/advisory/AdvisoryLanding";
import { ADVISORY_SITE } from "@/lib/advisory-config";

// Home page of www.primebottomlineadvisory.com
const title = "Prime Bottomline Advisory — Finance for founders and established businesses";
const description =
  "For founders: clean finance, the right business direction and a stronger position in every round. For established businesses: monthly numbers by channel and plant, compliance that never slips, and readiness for an IPO or a strategic sale.";

export const metadata: Metadata = {
  metadataBase: new URL(ADVISORY_SITE),
  title,
  description,
  alternates: { canonical: `${ADVISORY_SITE}/` },
  openGraph: {
    title: "Prime Bottomline Advisory",
    description: "We start with your finance. We stay for what it's worth.",
    url: `${ADVISORY_SITE}/`,
    siteName: "Prime Bottomline Advisory",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prime Bottomline Advisory" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Bottomline Advisory",
    description: "We start with your finance. We stay for what it's worth.",
    images: ["/og-image.png"]
  }
};

export default function AdvisorySiteHome() {
  return <AdvisoryLanding standalone />;
}
