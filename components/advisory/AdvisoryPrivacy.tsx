import AdvisoryHeader from "./AdvisoryHeader";
import AdvisoryFooter from "./AdvisoryFooter";

// Data privacy and cookies page: www.primebottomlineadvisory.com/privacy
// Text from the Data Privacy notice prepared by Swetha (Nov 2026).
// The cookie section is written for what this website actually loads; update it if a new tool is added.
const DPO = {
  name: "Swetha Ranganathan",
  email: "swetha@primebottomline.vc",
  phone: "+91 95854 42481"
};

export default function AdvisoryPrivacy({ standalone = true }: { standalone?: boolean }) {
  return (
    <>
      <div className={standalone ? "pba standalone" : "pba"}>
        <AdvisoryHeader base={standalone ? "/" : "/advisory"} standalone={standalone} />
        <main className="pba-main legal">
          <div className="wrap">
            <div className="eyebrow">Prime Bottomline Advisory</div>
            <h1>Data privacy and your personal information</h1>
            <p className="meta">
              Prime Bottomline Advisory, a division of Prime Bottomline Ventures LLP · Last updated: November 2026
            </p>

            <section>
              <h2>Who we are</h2>
              <p>
                Prime Bottomline Advisory provides financial, strategy and risk advisory services to startups,
                corporates and investors. We take your privacy seriously.
              </p>
            </section>

            <section>
              <h2>What personal data we collect</h2>
              <p>When you contact us or engage with our services, we may collect:</p>
              <ul>
                <li>Your name, email, phone number and job title</li>
                <li>Company name and business contact details</li>
                <li>Communication records</li>
                <li>Website usage data (IP address, pages visited)</li>
              </ul>
              <p>We only collect information necessary to provide our services and communicate with you.</p>
            </section>

            <section>
              <h2>How we use your data</h2>
              <p>We process your personal data to:</p>
              <ul>
                <li>Respond to your inquiries</li>
                <li>Deliver financial and risk advisory services</li>
                <li>Send updates or content you&apos;ve opted into</li>
                <li>Comply with legal or regulatory requirements</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2>Your privacy rights</h2>
              <p>You have the right to:</p>
              <ol>
                <li>Know what personal data we hold about you</li>
                <li>Request corrections if your data is inaccurate</li>
                <li>Request deletion of your data (where legally permitted)</li>
                <li>Object to how we process your data</li>
                <li>Withdraw consent for communications at any time</li>
                <li>File a complaint with us within 30 days</li>
              </ol>
            </section>

            <section>
              <h2>Who we share your data with</h2>
              <p>We do not sell or share your personal data for commercial purposes. We may share your data with:</p>
              <ul>
                <li>Technology service providers (email, website hosting)</li>
                <li>Legal or regulatory authorities when required by law</li>
                <li>Professional advisors under confidentiality agreements</li>
              </ul>
            </section>

            <section>
              <h2>How long we keep your data</h2>
              <p>We retain your personal data only as long as necessary:</p>
              <ul>
                <li>While you&apos;re engaging with us, or for 1 year after</li>
                <li>Longer if required by law or to resolve disputes</li>
                <li>Securely deleted or anonymised once no longer needed</li>
              </ul>
            </section>

            <section>
              <h2>Data security</h2>
              <p>We protect your personal data with:</p>
              <ul>
                <li>Access controls and confidentiality agreements</li>
                <li>Regular security reviews</li>
              </ul>
            </section>

            <section>
              <h2>Exercising your rights</h2>
              <p>
                To exercise your privacy rights or ask questions, email{" "}
                <a href={`mailto:${DPO.email}?subject=Data%20Privacy%20Request`}>{DPO.email}</a> with the subject
                &ldquo;Data Privacy Request&rdquo;. Please include:
              </p>
              <ul>
                <li>Your name</li>
                <li>What you&apos;re requesting (access, correction, deletion)</li>
                <li>Enough detail for us to verify your identity</li>
              </ul>
              <p>We will respond within 30 business days.</p>
            </section>

            <section>
              <h2>Compliance</h2>
              <p>Prime Bottomline Advisory complies with the Digital Personal Data Protection (DPDP) Act, 2023.</p>
            </section>

            <section>
              <h2>Changes to this notice</h2>
              <p>
                We may update this notice to reflect changes in our practices or the law. Material changes will be
                published here and notified by email.
              </p>
            </section>

            <section id="cookies">
              <h2>Cookies</h2>
              <p>
                A cookie is a small text file that a website asks your browser to store, so it can remember something
                about your visit. Cookies can&apos;t read other files on your device or cookies set by other sites.
              </p>
              <p>
                This notice covers primebottomlineadvisory.com. We keep cookies to a minimum and do not sell any
                information they collect.
              </p>

              <h3>Cookies we need to run the site</h3>
              <p>
                None. The site works without setting any cookies of its own. The walkthrough video and the headline font
                are served from our own site.
              </p>

              <h3>Analytics and advertising cookies</h3>
              <p>
                We may use these tools to count visits, see which pages are useful and measure our own campaigns. They
                set cookies on our sites on behalf of the provider.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Provider</th>
                      <th>Cookies</th>
                      <th>What for</th>
                      <th>Kept for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google Analytics</td>
                      <td>_ga, _ga_&lt;ID&gt;</td>
                      <td>Counting visits and pages viewed, without identifying you</td>
                      <td>Up to 2 years</td>
                    </tr>
                    <tr>
                      <td>Meta (Facebook) Pixel</td>
                      <td>_fbp</td>
                      <td>Measuring visits that come from our ads on Facebook and Instagram</td>
                      <td>Up to 3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Other services</h3>
              <p>We link to one outside service, which sets its own cookies:</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Where</th>
                      <th>Cookies set by</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Calendly</td>
                      <td>
                        When you click &ldquo;Schedule a call&rdquo;, the booking page opens on Calendly&apos;s site
                      </td>
                      <td>calendly.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Calendly uses cookies under its own privacy policy.</p>

              <h3>Controlling cookies</h3>
              <p>
                You can block or delete cookies in your browser settings; the site still works without them. To stop
                Google Analytics from measuring your visits on any site, you can use Google&apos;s opt-out browser
                add-on.
              </p>
            </section>

            <section>
              <h2>Contact and complaints</h2>
              <p>
                For any questions or complaints about how we handle your personal information, contact our Data
                Protection Officer:
              </p>
              <p className="contact">
                {DPO.name}
                <br />
                Email: <a href={`mailto:${DPO.email}`}>{DPO.email}</a>
                <br />
                Telephone: <a href={`tel:${DPO.phone.replace(/\s/g, "")}`}>{DPO.phone}</a>
              </p>
            </section>
          </div>
        </main>
        <AdvisoryFooter standalone={standalone} />
      </div>
    </>
  );
}
