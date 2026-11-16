import Script from "next/script";

/**
 * Site-wide GA4 + Meta Pixel.
 *
 * GA4: the Measurement ID is hardcoded below (property "Prime Bottomline Advisory").
 * The gtag.js file is only downloaded on the real domains, so localhost and Vercel
 * preview deployments never send data to the property. gtag() itself is always defined,
 * so events can still be inspected in window.dataLayer while developing.
 *
 * Meta Pixel: set NEXT_PUBLIC_META_PIXEL_ID in Vercel and redeploy. While unset, it renders nothing.
 */
export const GA4_ID = "G-ZMYFXK8PT6";
const PROD_HOSTS = ["www.primebottomlineadvisory.in", "primebottomlineadvisory.in"];
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  return (
    <>
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA4_ID}');
(window.__gaq || []).forEach(function (a) { gtag('event', a[0], a[1]); });
window.__gaq = [];
if (${JSON.stringify(PROD_HOSTS)}.indexOf(location.hostname) !== -1) {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA4_ID}';
  document.head.appendChild(s);
}`}
      </Script>
      {META_PIXEL_ID ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      ) : null}
    </>
  );
}
