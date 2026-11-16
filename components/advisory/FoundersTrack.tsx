import { CALENDLY } from "@/lib/advisory-config";
import SelfCheck from "./SelfCheck";
import WalkthroughVideo from "./WalkthroughVideo";
export default function FoundersTrack() {
  return (
    <div className="wrap">
      <div className="intro-band">
        <div className="eyebrow">For startup founders</div>
        <h2>We're with you from the first month of books to your next round.</h2>
        <p className="lead">
          It starts with finance: clean books, clean masters, a data room that's always current. Then it moves into the
          business: which lines to grow, which clients to fix, where to go next. And it ends where it matters most:
          going into each round prepared, so you can negotiate from strength and keep more of the company.
        </p>
        <div className="pillars">
          <div className="pillar">
            <div className="num">01 · Finance</div>
            <h3>Clean numbers, every month</h3>
            <p>
              Books, masters, cap table and data room kept investor-grade. Compliance handled quietly in the background.
            </p>
          </div>
          <div className="pillar">
            <div className="num">02 · Direction</div>
            <h3>Know where to take the business</h3>
            <p>
              Margin by business line and by client. Grow what earns, fix or drop what bleeds, test new lines with real
              numbers.
            </p>
          </div>
          <div className="pillar">
            <div className="num">03 · Value</div>
            <h3>Raise well, protect your equity</h3>
            <p>
              Better numbers and a ready data room strengthen your case with investors. Debt where it fits, to limit
              dilution.
            </p>
          </div>
        </div>
      </div>
      <section className="block" data-section="fit-founders" id="fit-founders">
        <div className="block-h">
          <div>
            <div className="eyebrow">Is this for you?</div>
            <h3>Check if this is the right fit for your company.</h3>
          </div>
          <p>Tick what applies to you. Four or more and we should talk.</p>
        </div>
        <SelfCheck
          items={[
            "Revenue between ₹1 Cr and ₹10 Cr a year",
            "You've raised from angels or a seed fund, or plan to raise in the next 12–18 months",
            "Your accounts are filed on time, but nobody reads the numbers with you",
            "Last month's numbers arrive weeks late, if at all",
            "You rebuild the data room every time an investor asks",
            "You can't say which product line or client actually makes money",
            "Your cap table and ESOP pool live in a spreadsheet"
          ]}
          ctaHref="#book-founders"
        >
          <div className="fit-not">
            <div className="fit-k">Not for you if</div>
            <ul>
              <li>You're pre-revenue, or still testing the idea</li>
              <li>You only want bookkeeping or GST filing</li>
              <li>You want someone to promise a round or a valuation</li>
            </ul>
            <p className="fit-alt">
              Above ₹20 Cr? <a href="#business">See the track for established businesses →</a>
            </p>
          </div>
        </SelfCheck>
      </section>
      <section className="block" data-section="founder-month">
        <div className="block-h">
          <div>
            <div className="eyebrow">Sound familiar?</div>
            <h3>The founder month, without a finance partner.</h3>
          </div>
        </div>
        <div className="pains">
          <div className="pain">
            <span className="pn">01</span>
            <p>An investor asks for 12 months of MIS. It takes three weeks and two versions that don't match.</p>
          </div>
          <div className="pain">
            <span className="pn">02</span>
            <p>Revenue tripled last year. You still can't say which clients make you money.</p>
          </div>
          <div className="pain">
            <span className="pn">03</span>
            <p>Your runway number changes depending on who works it out.</p>
          </div>
          <div className="pain">
            <span className="pn">04</span>
            <p>You hear about a GST notice when it's already overdue.</p>
          </div>
          <div className="pain">
            <span className="pn">05</span>
            <p>The term sheet feels priced on your mess, not on your business.</p>
          </div>
          <div className="pain">
            <span className="pn">06</span>
            <p>Your cap table is a spreadsheet only one person understands.</p>
          </div>
        </div>
      </section>
      <section className="block" data-section="portal-video">
        <div className="block-h">
          <div>
            <div className="eyebrow">See it work</div>
            <h3>Your company on the Prime Bottomline portal.</h3>
          </div>
          <p>
            Set up once, upload each month, and see your numbers, filings, data room and compliance documents in one
            place.
          </p>
        </div>
        <WalkthroughVideo />
      </section>
      <section className="block" data-section="how-we-work">
        <div className="block-h">
          <div>
            <div className="eyebrow">How we work together</div>
            <h3>Get on the platform first. Everything follows from your numbers.</h3>
          </div>
          <p>
            No long assessment up front. Bringing your data onto the portal is what organises it and lets us track you
            month on month.
          </p>
        </div>
        <ol className="model">
          <li>
            <span className="mn">Step 1</span>
            <h4>Onboard your data</h4>
            <p>
              Answer the company set-up once. We bring in your past months, organise the books and masters, and list
              what your data room is missing.
            </p>
            <span className="mt">First 4–6 weeks · one-time fee</span>
          </li>
          <li>
            <span className="mn">Step 2</span>
            <h4>Monthly retainer</h4>
            <p>
              Books closed by the 7th, numbers published by the 10th. Unit economics, filings, data room and a
              virtual/fractional CFO who reads them with you.
            </p>
            <span className="mt">Every month</span>
          </li>
          <li>
            <span className="mn">Step 3</span>
            <h4>Transaction advisory</h4>
            <p>
              When you raise, sell shares or borrow, we run it: model, valuation, terms, diligence and closing. The work
              of steps 1 and 2 is already done.
            </p>
            <span className="mt">When you need it</span>
          </li>
        </ol>
      </section>
      <section className="block" data-section="plan-90">
        <div className="block-h">
          <div>
            <div className="eyebrow">Your first 90 days</div>
            <h3>From onboarding to investor-ready in one quarter.</h3>
          </div>
          <p>Onboarding is a one-time fee, agreed upfront after the first call.</p>
        </div>
        <ol className="tl">
          <li>
            <span className="tw">Week 1</span>
            <h4>Set up</h4>
            <p>
              A kick-off call. Your company set up on the portal: entities, bank accounts, GSTINs, payroll and revenue
              lines. Access to your books.
            </p>
          </li>
          <li>
            <span className="tw">Weeks 2–4</span>
            <h4>Organise the data</h4>
            <p>
              Your past 12 months brought in. Books and masters streamlined, cap table rebuilt, and a list of what your
              data room is missing.
            </p>
          </li>
          <li>
            <span className="tw">Weeks 5–6</span>
            <h4>First month published</h4>
            <p>
              Your first checked month on the dashboard. The compliance calendar goes live, with every filing and its
              proof.
            </p>
          </li>
          <li>
            <span className="tw">Months 2–3</span>
            <h4>Running monthly</h4>
            <p>
              Books close by the 7th, numbers by the 10th, and your first monthly review. Margin by business line and by
              client.
            </p>
          </li>
          <li>
            <span className="tw">Day 90</span>
            <h4>Investor-ready</h4>
            <p>A data room that stays current. If a round is coming, a plan for it: how much, when and from whom.</p>
          </li>
        </ol>
      </section>
      <section className="block" data-section="services">
        <div className="block-h">
          <div>
            <div className="eyebrow">What you get each month</div>
            <h3>Everything a finance team would do, without hiring one.</h3>
          </div>
          <p>
            Your part: upload bank statements, invoices and payroll on the portal early in the month. We do the rest.
          </p>
        </div>
        <div className="deliver">
          <div className="dg">
            <div className="dk">Numbers</div>
            <ul>
              <li>Books closed by the 7th</li>
              <li>Dashboard published by the 10th: revenue, burn, runway and cash</li>
              <li>Margin by business line and by client</li>
              <li>Money owed to you, and who is late</li>
            </ul>
          </div>
          <div className="dg">
            <div className="dk">Compliance</div>
            <ul>
              <li>GST, TDS, payroll and ROC filings tracked</li>
              <li>Proof of every filing on the portal</li>
              <li>Works with your existing CA and CS partners</li>
              <li>Notices flagged the day they arrive</li>
            </ul>
          </div>
          <div className="dg">
            <div className="dk">Investor-ready</div>
            <ul>
              <li>Data room refreshed every month</li>
              <li>Cap table and ESOP register kept current</li>
              <li>Investor update drafted each month</li>
              <li>Board pack every quarter</li>
            </ul>
          </div>
          <div className="dg">
            <div className="dk">Decisions</div>
            <ul>
              <li>A monthly review call on your numbers</li>
              <li>What to grow, fix or drop, with numbers</li>
              <li>Legal documents coordinated with legal professionals</li>
              <li>A round plan when you're ready to raise</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="block" data-section="deals">
        <div className="block-h">
          <div>
            <div className="eyebrow">Transactions</div>
            <h3>Three kinds of deals, one advisor who already knows your numbers.</h3>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="kicker">Equity</div>
            <h4>Funding rounds</h4>
            <p>
              Seed, pre-Series A, bridges and convertibles. Model, valuation, term sheet, SHA, diligence, FEMA and
              post-close filings.
            </p>
          </div>
          <div className="card">
            <div className="kicker">Secondary</div>
            <h4>Share transfers</h4>
            <p>
              Co-founder exits, ESOP liquidity and early-investor sales. ROFR process, valuation, documents, filings and
              stamp duty.
            </p>
          </div>
          <div className="card">
            <div className="kicker">Debt</div>
            <h4>Debt alongside equity</h4>
            <p>
              Venture debt, revenue-based finance and bill discounting, when borrowing protects your equity better than
              a round.
            </p>
          </div>
        </div>
      </section>
      <section className="block" data-section="outcomes">
        <div className="block-h">
          <div>
            <div className="eyebrow">The difference</div>
            <h3>What changes for you as a founder.</h3>
          </div>
        </div>
        <div className="compare" role="table">
          <div className="h b">Without us</div>
          <div className="h a">With Prime Bottomline</div>
          <div className="x b">The data room is assembled the week an investor asks.</div>
          <div className="x a">
            The data room is current every month. Diligence starts on day one of the term sheet.
          </div>
          <div className="x b">You know total revenue. You don't know which line or client loses money.</div>
          <div className="x a">Margin by business line and by client, with the loss-makers flagged.</div>
          <div className="x b">Numbers arrive weeks after month-end.</div>
          <div className="x a">Books close in the first week. Numbers published by the 10th.</div>
          <div className="x b">"Did we file GST?" takes a few calls to answer.</div>
          <div className="x a">Filed, with the acknowledgement one click away.</div>
          <div className="x b">
            Each round is discussed on a messy story, and you may give up more than you need to.
          </div>
          <div className="x a">Each round is discussed on clean, proven numbers, which gives you a stronger hand.</div>
        </div>
      </section>
      <section className="block" data-section="investor-intros">
        <div className="eco">
          <div>
            <div className="eyebrow">The network</div>
            <h3>When you're ready, the right investors already know you.</h3>
            <p>We are building a network of investors and founder communities across South India.</p>
          </div>
          <div className="chips">
            <div className="chip">
              <b>Prime Bottomline Ventures</b>
              <span>Our own fund</span>
            </div>
            <div className="chip">
              <b>Partner micro VCs</b>
              <span>Early cheques</span>
            </div>
            <div className="chip">
              <b>Larger VCs</b>
              <span>Your next round</span>
            </div>
            <div className="chip">
              <b>Founder communities</b>
              <span>Events and peers</span>
            </div>
            <div className="chip">
              <b>Debt partners</b>
              <span>Revenue-based finance</span>
            </div>
            <div className="chip">
              <b>Legal professionals</b>
              <span>Documents and agreements</span>
            </div>
          </div>
        </div>
      </section>
      <section className="block" data-section="faq-founders" id="faq-founders">
        <div className="block-h">
          <div>
            <div className="eyebrow">Questions</div>
            <h3>What people usually ask us first.</h3>
          </div>
        </div>
        <div className="faq">
          <details>
            <summary>Do I need to change my CA?</summary>
            <p>
              No. Your CA keeps filing and auditing. We run the monthly close, the numbers and the review, and we check
              the filings.
            </p>
          </details>
          <details>
            <summary>What does onboarding cost?</summary>
            <p>
              A one-time fee, agreed upfront after the first call. It depends on how many months, entities and bank
              accounts we bring in.
            </p>
          </details>
          <details>
            <summary>I'm not raising right now. Is this still useful?</summary>
            <p>
              Yes. Knowing which lines and clients make money helps you decide where to grow. And when you do raise, the
              work is already done.
            </p>
          </details>
          <details>
            <summary>What happens when I raise?</summary>
            <p>
              Transaction advisory is scoped separately when you need it: model, valuation, terms, diligence and
              closing. Your numbers and data room are already ready.
            </p>
          </details>
          <details>
            <summary>Who sees my numbers?</summary>
            <p>
              Your team and the people working on your company at Prime Bottomline. Nothing goes to an investor unless
              you share it from your data room.
            </p>
          </details>
          <details>
            <summary>Can you guarantee a round or a valuation?</summary>
            <p>
              No. We make your company easier to invest in and help you negotiate. The decision is always the
              investor's.
            </p>
          </details>
        </div>
      </section>
      <section className="block" data-section="book-founders" id="book-founders">
        <div className="cta">
          <div>
            <div className="eyebrow">Start here</div>
            <h3>A 30-minute call to see if we fit.</h3>
            <p>
              Tell us where you are and what's next. If it fits, we'll set up your company on the portal and start with
              your past months.
            </p>
            <p style={{ marginTop: "22px" }}>
              <a className="btn" href={CALENDLY.founders} target="_blank" rel="noopener">
                Schedule a founder call
              </a>
            </p>
          </div>
          <ul>
            <li>Where your books and data room stand</li>
            <li>What onboarding involves for you</li>
            <li>Your next round, and what it needs</li>
            <li>Who you'll work with at Prime Bottomline</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
