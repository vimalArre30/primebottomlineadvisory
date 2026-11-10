import AdvisoryHeader from "./AdvisoryHeader";
import AdvisoryHero from "./AdvisoryHero";
import TrackSwitcher from "./TrackSwitcher";
import FoundersTrack from "./FoundersTrack";
import BusinessTrack from "./BusinessTrack";
import AdvisoryShared from "./AdvisoryShared";
import AdvisoryFooter from "./AdvisoryFooter";

// The Advisory landing page body, used on two addresses:
//   primebottomline.vc/advisory           → standalone=false (fund header on top)
//   www.primebottomlineadvisory.com       → standalone=true  (own site, Advisory header on top)
export default function AdvisoryLanding({ standalone = true }: { standalone?: boolean }) {
  return (
    <>
      <div className={standalone ? "pba standalone" : "pba"}>
        <AdvisoryHeader standalone={standalone} />
        <main id="top" className="pba-main">
          <AdvisoryHero />
          <TrackSwitcher founders={<FoundersTrack />} business={<BusinessTrack />} />
          <AdvisoryShared />
        </main>
        <AdvisoryFooter standalone={standalone} />
      </div>
    </>
  );
}
