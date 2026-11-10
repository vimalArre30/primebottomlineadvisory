export default function AdvisoryHero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <div className="eyebrow">Prime Bottomline Advisory · Coimbatore · Bengaluru</div>
          <h1>We start with your finance. We stay for what it's worth.</h1>
          <p className="lead">
            Two kinds of companies work with us. Founders building toward their next round, who want to go in prepared
            and keep as much equity as they can. Established businesses building toward a big exit, through an IPO or a
            strategic sale. We start by running the finance, and stay with you all the way there.
          </p>
          <div className="rule-line" aria-hidden="true">
            <div className="z"></div>
            <div className="g"></div>
            <div className="s">
              <svg width="11" viewBox="0 0 12 10">
                <path
                  d="M1 5l3 3 7-7"
                  fill="none"
                  stroke="#243D26"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="doors">
          <a className="door f" href="#founders">
            <div className="who">Startup founders · ₹1–10 Cr revenue</div>
            <h3>Go into every round prepared, and keep more of your company.</h3>
            <p>
              From clean finance, to the right business direction, to a data room that strengthens your position in
              every round.
            </p>
            <div className="go">For founders →</div>
          </a>
          <a className="door p" href="#business">
            <div className="who">Established businesses · ₹20–100 Cr revenue</div>
            <h3>Build the business toward a big exit: an IPO or a strategic sale.</h3>
            <p>
              Monthly numbers by channel and plant, compliance built in, and a company that's ready when the right offer
              comes.
            </p>
            <div className="go">For established businesses →</div>
          </a>
        </div>
      </div>
    </section>
  );
}
