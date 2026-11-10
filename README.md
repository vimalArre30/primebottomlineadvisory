# Prime Bottomline Advisory website

Live at **www.primebottomlineadvisory.in** (primebottomlineadvisory.in and both primebottomlineadvisory.com addresses redirect there in Vercel).

A short version of the page also lives on the fund site at primebottomline.vc/advisory (Bottomline.vc repo, components/advisory/AdvisoryShort.tsx). If you change the hero or the two audience intros here, copy the change there too.

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
