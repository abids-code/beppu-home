# Beppu Home website

The replacement website for 株式会社別府ホーム (Beppu Home). Japanese is the primary language; English is a complete parallel tree under `/en/`.

Built with Astro 7 (static output), TypeScript, Tailwind CSS v4 and self-hosted webfonts (Fontsource). Scroll reveals use plain CSS and an IntersectionObserver; there is no animation library. There is no CMS: content lives in Markdown and TypeScript files in this repository.

**The existing live website (beppuhome.jp) is not touched by this project.** Do not point this project's Vercel project at that domain.

## Requirements

- Node.js 22.23.4 or later (Astro 7's requirement; developed on Node 24)
- npm

## Run it locally

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # type check + production build into dist/
npm run build:only   # production build without the type check
npm run preview      # serve dist/ on http://localhost:4321
npm run check        # Astro type and content check
```

## Where things are

| What | Where |
|---|---|
| Design tokens (colours, fonts) | `src/styles/global.css` (`@theme`) |
| Font stylesheet (loaded without blocking) | `src/styles/fonts.css` |
| Business facts (phone, address, hours) | `src/lib/site.ts` |
| Navigation and footer links | `src/lib/nav.ts` |
| Page titles and descriptions (JA and EN) | `src/lib/meta.ts` |
| Service page copy (sell, inheritance, loan, investment, home staging) | `src/content/services.ts` |
| Sell-process steps and FAQ | `src/content/flow.ts` |
| News posts, Japanese (source of truth) | `src/content/news/ja/post-N.md` |
| News posts, English translations | `src/content/news/en/post-N.md` |
| Privacy policy and terms (Japanese text) | `src/content/legal/privacy.md`, `terms.md` |
| Page layouts and templates | `src/views/` |
| Route files (JA at root, EN mirrored under `src/pages/en/`) | `src/pages/` |
| Photographs (originals, optimised at build time) | `src/assets/photos/` |
| Old-URL redirects and security headers | `vercel.json` |
| Contact form (demo mode) | `src/components/ContactForm.astro` |
| LINE, telephone and Zoom (the three contact routes) | `src/components/ContactOptions.astro` (cards), `ContactBar.astro` (mobile bar), `Header.astro`, `Footer.astro`, `CtaBand.astro` |
| LINE URL, LINE ID, phone numbers, Zoom path | `src/lib/site.ts` (`lineUrl`, `lineId`, `tel`, `telIntl`, `telHref`, `zoomRequestPath`) |
| Logos | `src/components/Logo.astro` (header and footer), `Lockup.astro` (company page). Files in `src/assets/brand/`. |
| Galleries and lightbox | `src/components/Gallery.astro` (mosaic and strip layouts) |
| Photographs | `src/assets/photos/` (used). `assets-excluded/` (kept, not bundled). |

Photograph files are named after their original location on the old site (for example `13_1_1.jpg`). `docs/asset-inventory.csv` lists the original asset URLs and their rights status.

## Maintaining content

### Add a news post

1. Create `src/content/news/ja/post-N.md` with this frontmatter:

   ```yaml
   ---
   title: "タイトル"
   date: 2026-10-28
   category: case        # or: article
   originalUrl: https://www.beppuhome.jp/column/post-N/   # or leave as the source URL for an old post
   legacyNumber: N
   ---
   ```

2. Write the body in Japanese below the frontmatter. Separate paragraphs with blank lines.
3. Create `src/content/news/en/post-N.md` with the same frontmatter and an English translation. If you leave it out, the English site shows the Japanese post with a "Japanese only" label. That is intentional.
4. Set `dateUnverified: true` only when the date is known to be wrong.
5. Run `npm run build`. The post appears in the list, its pagination, and the sitemap.

Note: `legacyNumber` and the `post-N` file name set the public URL (`/column/post-N/`). Keep them unique.

### Edit a service page

Edit the Japanese and English text together in `src/content/services.ts`. Each section has `paragraphs`, optional `bullets`, `table`, `timeline`, `note`, and `figure`. Keep the Japanese and English structures identical.

### Change a fact (phone, address, hours)

Change it in `src/lib/site.ts`. The header, footer, contact page, property pages and structured data all read from there.

### Things to confirm before publishing

`docs/open-questions.md` and `docs/owner-verification.md` list the claims, conflicts, and missing details that the owner needs to confirm. Items in `open-questions.md` are shown on the site as published, with the conflicts visible in the source. Do not remove or change them without the owner's decision.

## Domain and the sitemap

The canonical URLs, `hreflang` links, sitemap, and `robots.txt` use the site URL. Set it at build time:

```bash
SITE_URL=https://your-production-domain.example npm run build
```

When `SITE_URL` is not set, the build uses `https://$VERCEL_URL` on Vercel, and `http://localhost:4321` otherwise. Set `SITE_URL` before launch.

## Deploy a Vercel preview

The site is static, so Vercel needs only the build output in `dist/`. `vercel.json` already sets the build command, the output directory, trailing slashes, and the redirects.

Prerequisites: a Vercel account that the owner controls. Run these commands in the project folder, and log in with your own account. Do not share credentials with this project.

```bash
npx vercel login            # opens a browser; log in with your account
npx vercel link             # create or select a project named for this site
npx vercel                  # deploys a PREVIEW (not production)
```

Then open the preview URL. Before sharing it:

1. Confirm the redirects work on the preview: `/buy/flow.html` → `/buy/flow/`, `/column/?p=2` → `/column/page/2/`, and `/property/cate_1/` → `/property/`.
2. Confirm an unknown URL returns a 404.
3. Check the canonical URLs in the page source show the preview domain (or your production domain, if you set `SITE_URL`).

Do not run `npx vercel --prod` until the owner has approved the launch, and do not attach the beppuhome.jp domain to this project while the old site is live.

## Contact form

The form validates input and shows a clear demo notice. **It does not send messages.** To turn it on, choose a delivery method (see `docs/open-questions.md`, item 1), then replace the demo branch in `src/components/ContactForm.astro`. Do not show a success message unless the message has actually been delivered.

## Quality checks

- `npm run check` — types and content schema (currently 0 errors).
- `npm run build` — production build (currently 105 pages).
- Link check: the build output can be checked for internal links with any link checker. The last run found 0 missing targets across 4,388 references.
- `docs/qa-report.md` has the Lighthouse results, the responsive and reduced-motion checks, and what was not tested.

## Project documents

| File | Purpose |
|---|---|
| `docs/discovery-summary.md` | Findings from the content audit of the existing site |
| `docs/content-inventory.md` | Japanese source content, page by page |
| `docs/page-inventory.csv` | Every page crawled, with status |
| `docs/asset-inventory.csv` | Every image, with rights status |
| `docs/url-redirect-map.csv` | Old URL → new URL (proposed) |
| `docs/owner-verification.md` | Facts the owner must confirm |
| `docs/open-questions.md` | Decisions and conflicts found while building |
| `docs/design-research.md` | References inspected and the creative direction |
| `docs/qa-report.md` | Test results, and what was not tested |

## Contact routes

The site offers three ways to get in touch, shown as distinct options everywhere a consultation is offered:

- **LINE**: `https://page.line.me/oic9467l?openQrModal=true`, LINE ID `@oic9467l`. The official account link opens the app on phones and falls back to the LINE page. The QR code on the homepage and the contact page is generated from this URL at build time (dependency `qrcode`, dev-only). To change the account, change `lineUrl` and `lineId` in `src/lib/site.ts`; the QR code updates on the next build.
- **Telephone**: `0977-75-8528` is displayed as published. The link uses `tel:+81977758528`, and the international format `+81-977-75-8528` is shown for visitors from abroad.
- **Zoom**: there is no booking link, meeting ID or booking tool on the current site, so none is built in. The Zoom buttons open the enquiry form with "ZOOM" preselected. Do not describe the button as booking a meeting; the procedure is open (see `docs/open-questions.md`, item 25).

The mobile bar (`ContactBar.astro`) hides while the footer or the enquiry form is in view, so it does not cover form controls.

## Brand

- Use the company's own logo files only. Do not recreate the logo with a font, and do not invent a company name.
- Japanese: 別府ホーム (brand) and 株式会社別府ホーム (legal name, used in the footer). The lockup shows 株式会社 別府ホーム.
- English: Beppu Home. The legal English name "Beppu Home Co., Ltd." is a translation that the owner has not yet confirmed (see `docs/owner-verification.md`).
- Keep the aspect ratio. The logo is sized by height with `width: auto`; do not set both dimensions.

## Photographs and galleries

- `docs/asset-usage-audit.md` lists every photograph, where it is used, what was excluded and why, and the rights status of third-party marks.
- To add a photograph to a page: place the file in `src/assets/photos/`, import it in the view or content file, and add it to a `GalleryItem` list (`src/components/Gallery.astro`). Every informative photograph needs alt text; use empty alt only for decorative images.
- Captions say "イメージ" (illustrative) wherever the subject is not verified. Keep that wording unless the owner confirms the subject.
- Do not place a photograph of a property that has been sold, or that is not verified as Beppu, without the owner's confirmation.

## Motion

- Scroll reveals (`[data-reveal]`) and the hero crop run in CSS, with a small IntersectionObserver script (`src/scripts/motion.ts`). Under `prefers-reduced-motion`, content is shown at its final state.
- The reveal markers are not placed on above-the-fold content, so the first screen renders without waiting for JavaScript.
- GSAP was removed (see `docs/open-questions.md`, item 37). Add it back only if a sequence needs a timeline that CSS cannot express.
