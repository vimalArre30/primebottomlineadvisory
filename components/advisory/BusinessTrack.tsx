import { CALENDLY } from "@/lib/advisory-config";
import SelfCheck from "./SelfCheck";
export default function BusinessTrack() {
  return (
    <div className="wrap">
      <div className="intro-band">
        <div className="eyebrow">For established businesses</div>
        <h2>Build the company that earns a big exit.</h2>
        <p className="lead">
          You've built something real. The question is what it's worth, and to whom. An IPO or a strategic buyer pays
          for clear numbers, healthy margins and clean compliance. You get the same monthly dashboard our founders get,
          with compliance built into it, every month, so when the moment comes, your company is ready and the value is
          yours.
        </p>
        <div className="pillars">
          <div className="pillar">
            <div className="num">01 · CFO dashboard</div>
            <h3>Your whole business on one dashboard</h3>
            <p>
              Revenue, margins and cash, published by the 10th. Margin by channel, product and plant shows what drags
              and what earns.
            </p>
          </div>
          <div className="pillar">
            <div className="num">02 · Compliance tracker</div>
            <h3>Compliance management</h3>
            <p>
              Every compliance relating to GST, income tax and ROC monitored through our tech platform. AI summarises
              TDS and GST gaps. New states and countries mapped before you move.
            </p>
          </div>
          <div className="pillar">
            <div className="num">03 · Exit</div>
            <h3>Ready for an IPO or a strategic sale</h3>
            <p>
              Governance, audited history and a clean story, so you have a choice of exit, and are ready to be valued on
              what you built.
            </p>
          </div>
        </div>
      </div>
      <section className="block" data-section="fit-business" id="fit-business">
        <div className="block-h">
          <div>
            <div className="eyebrow">Is this for you?</div>
            <h3>Check if this is the right fit for your business.</h3>
          </div>
          <p>Tick what applies to you. Four or more and we should talk.</p>
        </div>
        <SelfCheck
          items={[
            "Revenue between ₹20 Cr and ₹100 Cr a year",
            "Promoter-led, with the family or founders still running it",
            "More than one plant, state, GSTIN or contract manufacturer",
            "A small finance team and an outside CA, stretched by growth",
            "Working capital or term loans from banks",
            "A new state, country or plant coming up in the next two years",
            "An IPO, a PE round or a sale is on the three-to-five-year horizon"
          ]}
          ctaHref="#book-business"
        >
          <div className="fit-not">
            <div className="fit-k">Not for you if</div>
            <ul>
              <li>You only want a statutory audit or tax filing</li>
              <li>You don't plan to change how finance runs</li>
              <li>You want to hand over decisions, not make them with better numbers</li>
            </ul>
            <p className="fit-alt">
              Under ₹20 Cr? <a href="#founders">See the founders track →</a>
            </p>
          </div>
        </SelfCheck>
      </section>
      <section className="block" data-section="growth-outrun">
        <div className="block-h">
          <div>
            <div className="eyebrow">Sound familiar?</div>
            <h3>Growth has outrun the finance function.</h3>
          </div>
        </div>
        <div className="pains">
          <div className="pain">
            <span className="pn">01</span>
            <p>You know the year's profit. You can't say which plant, channel or product earned it.</p>
          </div>
          <div className="pain">
            <span className="pn">02</span>
            <p>Last month's numbers arrive after the 20th of this month.</p>
          </div>
          <div className="pain">
            <span className="pn">03</span>
            <p>A GST notice on one registration surprises everyone.</p>
          </div>
          <div className="pain">
            <span className="pn">04</span>
            <p>The bank asks for a stock statement and covenant figures, and the team drops everything.</p>
          </div>
          <div className="pain">
            <span className="pn">05</span>
            <p>A new state or plant means learning the licences as you go.</p>
          </div>
          <div className="pain">
            <span className="pn">06</span>
            <p>
              A buyer asks about related-party deals and trademarks held by the promoter. Nobody has a clean answer.
            </p>
          </div>
        </div>
      </section>
      <section className="block" data-section="gap-assessment">
        <div className="block-h">
          <div>
            <div className="eyebrow">Step one: the gap assessment</div>
            <h3>An honest look at where your finance stands, in 3–4 weeks.</h3>
          </div>
          <p>A fixed fee, agreed upfront after the first call.</p>
        </div>
        <div className="gap">
          <div className="gap-areas">
            <div className="fit-k">What we review</div>
            <ol>
              <li>
                <b>Books and month-end close</b>
                <span>How long the close takes, and what breaks it</span>
              </li>
              <li>
                <b>GST, across every registration</b>
                <span>Returns, credit matching, e-invoices and e-way bills</span>
              </li>
              <li>
                <b>TDS and payroll</b>
                <span>Sections, rates, thresholds, PF, ESI and professional tax</span>
              </li>
              <li>
                <b>Costing and margins</b>
                <span>By plant, product and channel</span>
              </li>
              <li>
                <b>Working capital and banking</b>
                <span>Limits, covenants, stock statements and receivables</span>
              </li>
              <li>
                <b>Governance</b>
                <span>Related parties, board records, ROC filings and IP ownership</span>
              </li>
              <li>
                <b>Reporting</b>
                <span>MIS, dashboards and what leadership actually sees</span>
              </li>
            </ol>
          </div>
          <div className="gap-out">
            <div className="fit-k">What you get at the end</div>
            <ul>
              <li>Every gap, ranked by money at risk</li>
              <li>A fix plan in three phases: money first, then risk, then growth</li>
              <li>A proposal for the monthly retainer, if you want one</li>
            </ul>
            <div className="gap-card" aria-label="Sample report summary">
              <span className="gap-tag">Sample report · made-up figures</span>
              <div className="gap-row">
                <div>
                  <div className="gk">Money at risk</div>
                  <div className="gv bad">₹18.4 L</div>
                </div>
                <div>
                  <div className="gk">Gaps found</div>
                  <div className="gv">23</div>
                </div>
              </div>
              <div className="gap-line">
                <span>01</span>GST credit not matched to suppliers' filings<em className="h">High</em>
              </div>
              <div className="gap-line">
                <span>02</span>TDS: wrong sections and missed thresholds<em className="h">High</em>
              </div>
              <div className="gap-line">
                <span>03</span>No margin by plant or product line<em>Medium</em>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block" data-section="how-we-work-business">
        <div className="block-h">
          <div>
            <div className="eyebrow">How we work together</div>
            <h3>Assess, then run it every month, then the deal.</h3>
          </div>
          <p>The gap assessment tells us which problems cost you most, so we fix them in that order.</p>
        </div>
        <ol className="model">
          <li>
            <span className="mn">Step 1</span>
            <h4>Gap assessment</h4>
            <p>
              Books, GST, TDS, payroll, costing, governance and reporting reviewed. You get the gaps, what they could
              cost, and a plan in order of money and risk.
            </p>
            <span className="mt">First 3–4 weeks · fixed fee</span>
          </li>
          <li>
            <span className="mn">Step 2</span>
            <h4>Monthly retainer</h4>
            <p>
              The same monthly dashboard founders get, with compliance built in: margins by channel and plant, every
              filing tracked, new markets mapped and a monthly leadership review.
            </p>
            <span className="mt">Every month</span>
          </li>
          <li>
            <span className="mn">Step 3</span>
            <h4>Transaction advisory</h4>
            <p>
              When you borrow, bring in an investor, move shares in the family, or prepare for an IPO or a sale, we run
              it with you.
            </p>
            <span className="mt">When you're ready</span>
          </li>
        </ol>
      </section>
      <section className="block" data-section="dashboard">
        <div className="block-h">
          <div>
            <div className="eyebrow">What you get each month</div>
            <h3>The same monthly dashboard, with compliance built in.</h3>
          </div>
          <p>
            Your finance team keeps running the day-to-day. We give them the process, the portal and a monthly review.
          </p>
        </div>
        <div className="deliver">
          <div className="dg">
            <div className="dk">Numbers</div>
            <ul>
              <li>Dashboard by the 10th: revenue, margins, EBITDA, cash and limits</li>
              <li>Margin by channel, product and plant</li>
              <li>Working capital and inventory days</li>
              <li>Payouts from marketplaces and distributors matched</li>
            </ul>
          </div>
          <div className="dg">
            <div className="dk">Compliance</div>
            <ul>
              <li>Every GSTIN, TDS and payroll filing, with proof</li>
              <li>AI checks on every vendor payment, with every fix reviewed by a qualified professional</li>
              <li>Licences for every plant and contract manufacturer</li>
              <li>Notices flagged and answered on time</li>
            </ul>
          </div>
          <div className="dg">
            <div className="dk">Growth</div>
            <ul>
              <li>New states and countries mapped before you move</li>
              <li>Registrations, licences and costs, each with an owner</li>
              <li>Lender reporting: stock statements, covenants, renewals</li>
              <li>Budgets and plans for new units</li>
            </ul>
          </div>
          <div className="dg">
            <div className="dk">Leadership</div>
            <ul>
              <li>A monthly leadership review, decisions tracked</li>
              <li>Board pack every quarter</li>
              <li>Exit-readiness score, tracked every month</li>
              <li>Legal documents coordinated with legal professionals</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="block" data-section="roadmap-3yr">
        <div className="block-h">
          <div>
            <div className="eyebrow">The road to exit</div>
            <h3>Three years from clean books to a company a buyer can trust.</h3>
          </div>
          <p>An IPO or a strategic buyer looks back three years. The work starts long before the deal.</p>
        </div>
        <div className="road">
          <div className="rd">
            <span className="ry">Year 1</span>
            <h4>Organise and close the gaps</h4>
            <ul>
              <li>Close in the first week</li>
              <li>Compliance gaps fixed</li>
              <li>Margin by plant, product and channel</li>
              <li>Money at risk identified and fixed</li>
            </ul>
          </div>
          <div className="rd">
            <span className="ry">Year 2</span>
            <h4>Scale with control</h4>
            <ul>
              <li>New markets entered with a plan</li>
              <li>Working capital released</li>
              <li>Better terms from lenders</li>
              <li>Related-party deals documented</li>
            </ul>
          </div>
          <div className="rd">
            <span className="ry">Year 3</span>
            <h4>Deal-ready</h4>
            <ul>
              <li>Three years of clean audited history</li>
              <li>Brand and IP owned by the company</li>
              <li>Independent directors and board committees</li>
              <li>A data room, and your choice of exit</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="block" data-section="deals-business">
        <div className="block-h">
          <div>
            <div className="eyebrow">Transactions</div>
            <h3>Every kind of deal an established business does, on your terms.</h3>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="kicker">Debt</div>
            <h4>Bank and NBFC finance</h4>
            <p>
              Working capital and capex limits, renewals and enhancements, with the lender reporting that wins better
              terms.
            </p>
          </div>
          <div className="card">
            <div className="kicker">Equity and secondary</div>
            <h4>Placements and share transfers</h4>
            <p>
              Minority stakes for investors from your own circle, and share transfers within the family, with control
              kept where you want it.
            </p>
          </div>
          <div className="card">
            <div className="kicker">Exit</div>
            <h4>IPO or strategic sale</h4>
            <p>
              Exit readiness built over time, then the right path: an SME or main-board IPO with merchant bankers, or a
              sale to a strategic buyer.
            </p>
          </div>
        </div>
      </section>
      <section className="block" data-section="outcomes-business">
        <div className="block-h">
          <div>
            <div className="eyebrow">The difference</div>
            <h3>What changes for you.</h3>
          </div>
        </div>
        <div className="compare" role="table">
          <div className="h b">Without us</div>
          <div className="h a">With Prime Bottomline</div>
          <div className="x b">
            You know total profit. You don't know which channel, plant or product drags it down.
          </div>
          <div className="x a">Margin by channel, product and plant, every month, with the fixes priced.</div>
          <div className="x b">TDS sections and thresholds are left to whoever books the entry.</div>
          <div className="x a">
            AI checks every payment for the right section, rate and threshold. A qualified professional reviews every
            fix.
          </div>
          <div className="x b">GST credit goes missing when suppliers don't file.</div>
          <div className="x a">Credit matched monthly. You know which supplier owes you.</div>
          <div className="x b">A new plant or a new state means learning the licences as you go.</div>
          <div className="x a">Every registration and consent mapped, owned and tracked before you move.</div>
          <div className="x b">An IPO or a sale is a someday idea, with no plan behind it.</div>
          <div className="x a">An exit-readiness score, tracked monthly, so you're ready when the offer comes.</div>
        </div>
      </section>
      <section className="block" data-section="exit-path">
        <div className="eco">
          <div>
            <div className="eyebrow">Capital and exits, on your terms</div>
            <h3>From growth capital to the big exit. Your decision at every step.</h3>
            <p>
              We can introduce lenders, investors, buyers and bankers who work with businesses like yours. We bring the
              right one when you need it, and only then.
            </p>
          </div>
          <div className="chips">
            <div className="chip">
              <b>Banks</b>
              <span>Working capital and capex</span>
            </div>
            <div className="chip">
              <b>Venture debt and NBFCs</b>
              <span>Faster, flexible money</span>
            </div>
            <div className="chip">
              <b>Investors from your circle</b>
              <span>Small stakes, you keep control</span>
            </div>
            <div className="chip">
              <b>Strategic buyers</b>
              <span>A sale on your terms</span>
            </div>
            <div className="chip">
              <b>Private equity</b>
              <span>Growth partner, when ready</span>
            </div>
            <div className="chip">
              <b>Merchant bankers</b>
              <span>SME and main-board IPOs</span>
            </div>
          </div>
        </div>
      </section>
      <section className="block" data-section="faq-business" id="faq-business">
        <div className="block-h">
          <div>
            <div className="eyebrow">Questions</div>
            <h3>What people usually ask us first.</h3>
          </div>
        </div>
        <div className="faq">
          <details>
            <summary>Do we need to change our CA or auditor?</summary>
            <p>
              No. Your CA and auditor keep filing and auditing. We run the monthly numbers and reviews alongside them,
              and check the filings.
            </p>
          </details>
          <details>
            <summary>Will you replace our finance team?</summary>
            <p>
              No. Your team keeps the day-to-day. They get clearer processes, the portal and a monthly review, and they
              spend less time firefighting.
            </p>
          </details>
          <details>
            <summary>What does the gap assessment cost?</summary>
            <p>
              A fixed fee, agreed upfront after the first call. It depends on the number of entities, plants and GST
              registrations.
            </p>
          </details>
          <details>
            <summary>How is this different from my CA's work?</summary>
            <p>
              Your CA's filing and audit work stays as it is. We work on the numbers with you every month, and on the
              decisions behind them: margins, markets, lenders and the exit.
            </p>
          </details>
          <details>
            <summary>We're not planning an exit soon. Is this still useful?</summary>
            <p>
              Yes. Better margins, cleaner compliance and better terms from lenders pay for themselves. Exit readiness
              builds in the background.
            </p>
          </details>
          <details>
            <summary>Who sees our numbers?</summary>
            <p>
              Your team and the people working on your business at Prime Bottomline. Nothing goes to a lender, investor
              or buyer unless you share it.
            </p>
          </details>
        </div>
      </section>
      <section className="block" data-section="book-business" id="book-business">
        <div className="cta">
          <div>
            <div className="eyebrow">Start here</div>
            <h3>A 30-minute call, then a gap assessment.</h3>
            <p>
              Tell us about the business and where you want to take it. If it fits, we'll scope a gap assessment of
              where your books stand today.
            </p>
            <p style={{ marginTop: "22px" }}>
              <a className="btn" href={CALENDLY.business} target="_blank" rel="noopener">
                Schedule a call
              </a>
            </p>
          </div>
          <ul>
            <li>What the gap assessment covers</li>
            <li>Your units, compliance and reporting today</li>
            <li>Where you want to take the business</li>
            <li>Who you'll work with at Prime Bottomline</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
