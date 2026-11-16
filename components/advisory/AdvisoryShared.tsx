import { CALENDLY, FUND_SITE } from "@/lib/advisory-config";
// Shown under both tracks: scope, the fund link and the booking band.
export default function AdvisoryShared() {
  return (
    <div className="wrap">
      <section className="block" data-section="scope" id="scope">
        <div className="block-h">
          <div>
            <div className="eyebrow">Scope</div>
            <h3>Clear on what we do. Clearer on what we don't.</h3>
          </div>
        </div>
        <div className="scope">
          <div>
            <h4>We do</h4>
            <ul>
              <li>Books, monthly close, MIS and unit economics</li>
              <li>GST, TDS, payroll and ROC compliance through professional partners</li>
              <li>Data room, cap table and governance</li>
              <li>Transaction structuring, documentation and closing</li>
              <li>Introductions to investors, lenders and bankers in our network</li>
              <li>Legal documents coordinated with legal professionals</li>
            </ul>
          </div>
          <div>
            <h4>We don't</h4>
            <ul>
              <li>Guarantee funding, a valuation or an exit</li>
              <li>Give SEBI-regulated investment advice</li>
              <li>Take fees from investors for bringing them your deal</li>
              <li>Act as statutory auditor for any company, including ones our fund has invested in</li>
              <li>Broadcast your round publicly</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="block" data-section="fund-link">
        <div className="pblv">
          <div>
            <div className="eyebrow">Part of Prime Bottomline Ventures</div>
            <h3>Financial and Strategy Consulting firm.</h3>
            <p>
              Prime Bottomline Advisory is a consulting division of Prime Bottomline Ventures (a revenue-stage fund
              investing in Tier 2 cities). The fund may invest in companies we advise. When it does, we tell you in
              writing, and keep our advice and the fund's investment decisions separate.
            </p>
          </div>
          <a className="btn line" href={FUND_SITE} target="_blank" rel="noopener">
            About the fund →
          </a>
        </div>
      </section>
      <section className="block" data-section="book" id="book">
        <div className="book">
          <h3>Schedule a call.</h3>
          <p>Pick the one that fits. Thirty minutes, no preparation needed.</p>
          <div className="book-btns">
            <a className="btn" href={CALENDLY.founders} target="_blank" rel="noopener">
              I'm a founder
            </a>
            <a className="btn" href={CALENDLY.business} target="_blank" rel="noopener">
              I run an established business
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
