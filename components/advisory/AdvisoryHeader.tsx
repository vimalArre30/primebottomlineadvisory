import AdvisoryLogo from "./AdvisoryLogo";
import { FUND_SITE } from "@/lib/advisory-config";
// Advisory header: the sticky top bar of the site.
export default function AdvisoryHeader({ base = "", standalone = true }: { base?: string; standalone?: boolean }) {
  // standalone: on www.primebottomlineadvisory.com this is the top bar (no fund header above it)
  // base="/advisory" when used on another page (e.g. /advisory/privacy) so the links go back to the page sections
  return (
    <header className="pba-header">
      <div className="wrap bar">
        <a className="logo" href={standalone ? "/" : "/advisory"} aria-label="Prime Bottomline Advisory">
          <AdvisoryLogo onDark />
        </a>
        <nav>
          <a className="n" href={`${base}#founders`}>
            Founders
          </a>
          <a className="n" href={`${base}#business`}>
            Established businesses
          </a>
          <a className="n" href={`${base}#scope`}>
            Scope
          </a>
          {standalone ? (
            <a className="n" href={FUND_SITE} target="_blank" rel="noopener">
              Ventures ↗
            </a>
          ) : null}
          <a className="btn" href={`${base}#book`}>
            Schedule a call
          </a>
        </nav>
      </div>
    </header>
  );
}
