import Script from "next/script";

/**
 * Site-wide Meta Pixel + GA4.
 *
 * IDs come from environment variables so no code change is needed when they
 * arrive — set these in Vercel (Project → Settings → Environment Variables)
 * and redeploy:
 *
 *   NEXT_PUBLIC_META_PIXEL_ID  e.g. 123456789012345
 *   NEXT_PUBLIC_GA4_ID         e.g. G-XXXXXXXXXX
 *
 * While unset, this component renders nothing.
 *
 * Note: the three /academy pages are static HTML and load their own SDKs —
 * fill the same two IDs in the constants at the top of each file in
 * public/academy/ (search TODO:PIXEL / TODO:GA4).
 */
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  return (
    <>
      {GA4_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
          </Script>
        </>
      ) : null}
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
