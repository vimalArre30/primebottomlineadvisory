import type { Metadata } from "next";
import AdvisoryPrivacy from "@/components/advisory/AdvisoryPrivacy";
import { ADVISORY_SITE } from "@/lib/advisory-config";
import "./privacy.css";

// www.primebottomlineadvisory.com/privacy
export const metadata: Metadata = {
  metadataBase: new URL(ADVISORY_SITE),
  title: "Data privacy and cookies — Prime Bottomline Advisory",
  description:
    "How Prime Bottomline Advisory collects, uses and protects your personal data, and the cookies used on our websites.",
  alternates: { canonical: `${ADVISORY_SITE}/privacy` }
};

export default function AdvisorySitePrivacy() {
  return <AdvisoryPrivacy standalone />;
}
