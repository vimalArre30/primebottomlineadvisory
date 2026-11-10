import AdvisoryLogo from "./AdvisoryLogo";
import { CALENDLY, FUND_SITE, LINKEDIN } from "@/lib/advisory-config";

const PIN =
  "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z";
const LINKEDIN_ICON =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export default function AdvisoryFooter(_props: { standalone?: boolean }) {
  return (
    <footer className="pba-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="logo">
              <AdvisoryLogo onDark />
            </div>
            <p className="foot-about">
              Fractional CFO, capital strategy and transaction advisory. A consulting division of Prime Bottomline
              Ventures LLP.
            </p>
          </div>

          <div className="foot-col">
            <div className="foot-h">Offices</div>
            <div className="foot-office">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#A8915F" d={PIN} />
              </svg>
              <div>
                <b>Coimbatore</b> <span className="foot-tag">Registered office</span>
                <br />
                SF No. 360/4A &amp; 360/5A, A V Infotech Park,
                <br />
                Saravanampatti, Coimbatore 641035, Tamil Nadu
              </div>
            </div>
            <div className="foot-office">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#A8915F" d={PIN} />
              </svg>
              <div>
                <b>Bengaluru</b>
              </div>
            </div>
          </div>

          <div className="foot-col">
            <div className="foot-h">Connect</div>
            <ul className="foot-links">
              <li>
                <a href={CALENDLY.business} target="_blank" rel="noopener">
                  Schedule a call
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener" className="foot-li">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#A8915F" d={LINKEDIN_ICON} />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={FUND_SITE} target="_blank" rel="noopener">
                  Prime Bottomline Ventures ↗
                </a>
              </li>
              <li>
                <a href="/privacy">Privacy and cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          © 2026 Prime Bottomline Ventures LLP · LLPIN ACY-6629 · Coimbatore, Tamil Nadu
        </div>
      </div>
    </footer>
  );
}
