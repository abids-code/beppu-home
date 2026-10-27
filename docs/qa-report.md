# QA report: Beppu Home rebuild

Build tested: `npm run build:only` (Astro 7.4.2, static output), served locally with `astro preview` on port 4321. Browser: Chrome via Playwright and Lighthouse. Date: 2026-10-28.

Screenshots from these runs are in `docs/qa/`.

## Build and static checks

| Check | Result |
|---|---|
| Production build | Passes. 105 HTML pages, about 39 MB including optimised images. |
| `astro check` (types, content schema) | 0 errors, 0 warnings, 0 hints. |
| Internal links and image references in built HTML | 4,388 references checked, 0 missing. (One broken reference was found and fixed: the 404 page advertised a `/en/404/` alternate.) |
| `vercel.json` | Valid JSON, 8 redirects, security headers. |
| Route status (24 sampled routes, JA and EN, including pagination and news posts) | All 200. An unknown path returns 404 with the custom 404 page. |
| `robots.txt` | Allows all, links to `sitemap-index.xml`. |

## Redirects (not verified by running)

The eight redirects in `vercel.json` cover the old `.html` URLs, the `cate_1` property paths, and the `?p=` pagination. The local preview server does not read `vercel.json`, so these were **not** exercised. The old `/buy/flow.html` returns 404 locally, as expected for that server. Verify every redirect in the Vercel preview before trusting it.

## Responsive layout

- **Desktop, 1440 px:** homepage checked, full page, after scroll, with reveals and images loaded. No horizontal overflow.
- **Mobile, 390 px:** the sell page (`/buy/`) overflowed horizontally (document width 584 px). The cause was the section grid's implicit column growing to the comparison table's width. Fixed by pinning mobile grids to one `minmax(0, 1fr)` column and allowing children to shrink. After the fix the document width is 375 px, and the table scrolls inside its own container.
- Mobile hero crop was changed from 21:9 to 4:3 below the tablet breakpoint.
- **Not checked:** horizontal overflow on every other page at 390 px. Only the sell page was measured. Run the overflow check across all routes before launch.
- **Not checked:** tablet (768 px) and large screens (1920 px).

## Contact form

- Empty submission: all five errors shown in an error summary, focus moved to the summary, each field marked `aria-invalid`, and each message linked to its field.
- Complete submission: the demo notice appeared ("デモモードのため送信されていません。内容は保存されていません。"). **Zero network requests** were made (checked by wrapping `fetch`).
- A `<noscript>` notice was added for visitors without JavaScript. Not separately tested in a browser without JavaScript.

## Motion and reduced motion

- Normal motion: reveal elements animate in when scrolled to. The hero photograph uses a single crop reveal.
- Reduced motion (`prefers-reduced-motion: reduce`, emulated): all 24 reveal elements were in their final state immediately, and the hero had no clip-path animation. GSAP is loaded only on pages that opt in.

## English localisation

- Every Japanese route has an English counterpart under `/en/` (17 routes). The `lang` attribute is `en` on English pages.
- Scanned for untranslated Japanese text on the English pages. The only Japanese that remains is intentional: the privacy and terms text (shown in Japanese with a notice), the prefecture list on the contact form, the representative's katakana name, and the staff and company names.
- News: all 35 posts have an English file. The English translations are close paraphrases and have **not** been reviewed by a native speaker.

## Performance (Lighthouse, mobile emulation, local preview)

| Page | Performance | Accessibility | Best practices | SEO | FCP | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | 92 | 100 | 100 | 100 | 2.4 s | 2.9 s | 0.003 | 0 ms |
| `/buy/` | 92 | 100 | 100 | 100 | 2.3 s | 2.9 s | 0.002 | 20 ms |

Changes made during measurement:

1. The first run scored 66 with an FCP of 5.3 s. The main stylesheet was 246 KB, largely `@font-face` rules, and it was render-blocking.
2. Narrowing the font imports to `japanese-400` / `japanese-600` made things worse. Those bundles are about 1.8 MB each, because they hold the whole Japanese character set in one file. The per-glyph split files are the better choice, so the narrower imports were reverted.
3. The webfont stylesheet now loads without blocking first paint (`media="print"` swap pattern). The system font shows first, then the webfont. The 81 font faces load as needed.

Caveats: these numbers come from the local preview server, which does not compress responses or sit behind a CDN. Vercel's numbers may differ. Re-measure on the Vercel preview URL.

## Accessibility

- Lighthouse accessibility: 100 on both pages.
- Focus: a visible `:focus-visible` outline is defined. **Not** walked through with a keyboard, and not tested with a screen reader.
- Header menu: Escape closes the mobile menu and returns focus to the toggle (code path, not tested interactively).
- Colour contrast: the palette was computed from the hex values in `docs/design-research.md` (ink 14.9:1, stone 4.76:1, clay 5.9:1). Clay is not used on the night section, where it would be 2.6:1.

## SEO and metadata

- Title and description on every page; canonical and `hreflang` (`ja-JP`, `en-US`, `x-default`) on every indexable page; `og:` tags present.
- The 404 page has `noindex` and no alternates.
- Canonical and sitemap URLs use `http://localhost:4321` until `SITE_URL` is set. **This must be fixed before launch.**
- Structured data: one `RealEstateAgent` JSON-LD block on the homepage, using only the business facts published on the current site. The opening hours are the weekday hours from the site. The English name, address line, and `url` (from `SITE_URL`) are included and should be checked when the owner confirms them.

## Known issues and limitations

1. **Canonical host** is `localhost` until a domain is set (see above).
2. **Contact form** is in demo mode and sends nothing.
3. **Legal pages** have Japanese text only on the English side and need professional review.
4. **Not tested:** other browsers (Firefox, Safari), dark mode (not implemented; the site is light only), print styles, and visual review of every page at mobile width.
5. **Analytics** are not included, pending the owner's decision.
6. **Vercel preview deployment** has not been performed. The Vercel CLI is not installed and not logged in, and logging in needs the owner's account (see the README).

---

# Revision 2: brand, contact, imagery and interaction

This section records the second revision. The earlier results above still describe the first build; where they conflict with this section, this section is current.

## What changed

- **Logo.** The text wordmark is gone. The company's own files are used: `logo01_b.png` (dark, header), `logo01_w.png` (white, footer), `loading-logo.png` (company page, with 株式会社 別府ホーム), and the official `favicon.png` (browser tab and touch icon). Aspect ratio is kept (400×180 is 2.22:1).
- **Contact.** LINE (official account URL, with the LINE ID and a QR code generated from that URL), telephone (0977-75-8528, with `tel:+81977758528` and the international format shown), and Zoom (through the enquiry form, with "ZOOM" preselected). Shown as three distinct cards on the homepage, the contact page and the consultation band; in the desktop header; and as a fixed bottom bar on phones.
- **Imagery.** 99 of the 100 photographs in `src/assets/photos` are used. The one unused photograph is held back for a stated reason. See `docs/asset-usage-audit.md`.
- **Interaction.** Mosaic galleries with a keyboard-operable lightbox; a horizontal carousel with buttons and arrow keys; image zoom on hover (pointer devices only); a layered homepage opening; service rows with photographs; before-and-after composites presented as supplied.
- **Motion.** GSAP removed. Reveals and the hero crop are CSS plus an IntersectionObserver. Reduced motion shows content in its final state.

## Results

| Check | Result |
|---|---|
| `astro check` | 0 errors, 0 warnings, 0 hints (last run after the gallery changes) |
| Build | 105 pages |
| Internal links and references | 5,741 references checked, 0 missing (last full check) |
| Horizontal overflow at 390 px | Found on the homepage (logo at natural size, and grids without a mobile column). Fixed. Re-checked at 390 px on the homepage, property detail, performance, contact, company and inheritance pages: document width 375 px in each. |
| Logo sizing | The header logo rendered at its natural 400×180 on phones because two height classes conflicted. Fixed. It now measures 98×44 px. |
| Gallery lightbox | Opens with a loaded photograph, moves to the next image, shows "2 / 6", and closes. |
| Carousel | Next button moves the track; the track is labelled and keyboard-scrollable. |
| Zoom link | `/contact/?method=zoom` preselects the Zoom contact method. |
| Contact form | Unchanged from the first revision: validation summary and focus pass; a complete form shows the demo notice and makes zero network requests. |
| Contact bar | On phones it sits at the bottom of the screen and hides when the footer is in view. |
| Reduced motion | The earlier test showed all reveal elements in their final state. The rule now also sets the reveal state to visible (not re-tested after the GSAP removal). |
| Lighthouse, homepage (mobile emulation, local preview) | Performance 82, accessibility 100, best practices 100, SEO 100. FCP 2.1 s, LCP 4.5 s, CLS 0.001. |
| Lighthouse, performance page | Performance 75, accessibility 100, best practices 100, SEO 100. FCP 2.3 s, LCP 6.6 s, CLS 0. |

## Accessibility issues found and fixed

- Low contrast: the LINE card used 80%-opacity paper text on clay; the consultation band sat on a tinted background under small stone text; gallery captions sat on a grey image cell (3.6:1). Each was fixed. Final accessibility score on both pages: 100.
- The lightbox image element was created at build time with an empty `src`. It is now created when a photograph opens.

## Performance: what is known, and what is not

- Largest contentful paint is 4.5 s on the homepage and 6.6 s on the performance page, measured under simulated mobile throttling against a local preview server. Those numbers are pessimistic for text stylesheets, because the local server does not compress them; Vercel does.
- Lighthouse's JSON output in this environment does not name the LCP element, so the cause on the performance page is not confirmed. The main-thread breakdown shows style and layout work and script evaluation. Removing the reveal wrappers from the galleries was tried; LCP moved from 12.5 s (with the wrappers) to 6.6 s.
- Next step: re-measure on the Vercel preview, and record a trace if LCP is still above 2.5 s.

## Not tested

- Keyboard-only walkthrough of the whole site, and screen-reader behaviour. The lightbox and carousel have keyboard handlers in the code; they were not exercised with a keyboard.
- Browsers other than Chrome.
- The LINE QR code has not been scanned with a phone. It is generated from the official URL with the `qrcode` library; the result has not been decoded in this environment.
- Dark mode (not implemented; the site is light on the content areas and dark only in the footer).
- Print styles.
- The mobile contact bar on every page; it was checked on the homepage and the contact page.
- Tablet (768 px) and large screens (1920 px).
