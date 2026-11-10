# Prime Bottomline Advisory website

Live at **www.primebottomlineadvisory.com** (primebottomlineadvisory.com and the .in domains redirect there in Vercel).

Next.js 16. Two pages:

| Address | File |
|---|---|
| `/` | `app/page.tsx` (sections in `components/advisory/`) |
| `/privacy` | `app/privacy/page.tsx` (`components/advisory/AdvisoryPrivacy.tsx`) |

## Common changes

- **Booking link (Calendly):** `lib/advisory-config.ts`
- **Page text:** `components/advisory/` (FoundersTrack, BusinessTrack, AdvisoryHero, AdvisoryShared, AdvisoryFooter)
- **Styles:** `app/advisory.css`
- **Share image (WhatsApp, LinkedIn):** `public/og-image.png` (1200x630)
- **Walkthrough video:** `public/media/`

## Run locally

```
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy

Every merge into `main` deploys automatically on Vercel.
The fund site (www.primebottomline.vc) is a separate repo (Bottomline.vc); its /advisory address redirects here.
