# Beppu Home — Design Research and Creative Direction

Status: research notes plus a proposal, written before implementation. Screenshots of the references are in `docs/ref-*.jpg`.

## 1. References actually inspected

Inspected in a real browser (Playwright, 1034 × 646 viewport, first screen only):

| Reference | URL | Screenshot | Notes |
|---|---|---|---|
| Siteinspire | https://www.siteinspire.com/ | `docs/ref-siteinspire.jpg` | Homepage only. A curated grid of full-width site previews. Chrome is quiet: white ground, one accent colour, a short line of text as a headline. |
| Kengo Kuma & Associates (KKAA) | https://kkaa.co.jp/en/ | `docs/ref-kkaa.jpg` | Full-bleed architectural photograph under a light veil. Very small uppercase navigation at top right. A quiet news notice in a translucent card. |
| Aman | https://www.aman.com/ | `docs/ref-aman.jpg` | Warm off-white ground, a dark solid "Reserve" button, underlined language link. The hero is a video with native player controls, which dominates the first screen before any content. |
| Dezeen | https://www.dezeen.com/ | `docs/ref-dezeen.jpg` | Editorial grid with category tags. A newsletter bar covers part of the content, and a horizontal scrollbar appears on the first screen. |

Attempted but **not inspected**:

- Sotheby's International Realty (`sothebysrealty.com`): the page rendered blank, so nothing was judged from it.
- Mitsui Fudosan (`mitsui-fudosan.co.jp`): DNS resolution failed from this environment.
- Awwwards, Godly, and GSAP showcase sites were not inspected in this session. They are not cited anywhere in this document.

Limit: all inspection was of the first screen only. Motion, scroll behaviour, and interaction states were not observed.

## 2. What makes these references work

- **The photograph carries the page (KKAA, Aman).** Imagery is large and unhurried. Text sits beside it, not over it.
- **Restraint in chrome (Siteinspire, KKAA).** Navigation is small, uppercase or lowercase, and never louder than the content.
- **One warm or neutral ground (Aman).** A tinted off-white reads as expensive and avoids the clinical white of most property sites.
- **Editorial rhythm (Dezeen).** Clear category labels, a serif deck under sans headlines, and a visible grid make long content scannable.
- **A single dark action (Aman).** One solid button in a dark tone is clearer than several coloured buttons.

## 3. What not to copy

- Autoplaying video with native controls in the hero (Aman). It delays the first meaningful paint and gives no information.
- Overlaying newsletter or promotional bars on content (Dezeen).
- Horizontal overflow at desktop width (Dezeen). Any horizontal scroll is a bug.
- Translucent glass cards over photography (KKAA). It reduces contrast on the Japanese text that Beppu Home needs to be readable.

## 4. Principles suitable for Beppu Home

1. **Real property photography first.** The business sells buildings and land. Photography, cropped with care, is the main brand asset. Stock or decorative images are not used.
2. **Calm, editorial text.** Long Japanese explanations must read well. Japanese body type gets generous line height and measure.
3. **Trust through clarity.** Prices, timelines, and fees are stated plainly, with sources flagged in the copy where they are unverified.
4. **Two clear paths.** Sell or consult (買取・相談) and browse property (物件). Each path has one prominent action.
5. **Bilingual by design.** Japanese is the primary experience. English is a complete parallel tree, not a translated overlay.

## 5. Proposed creative direction

**Name:** "Quiet Estate" (静かな不動産). The direction is an editorial property magazine crossed with an architecture studio's restraint.

- **Ground:** warm washi-paper off-white `#F4F1EB`. Not pure white.
- **Ink:** near-black warm `#1F1D1A` for text and the primary action.
- **Stone:** `#6F6A62` for secondary text (contrast checked below).
- **Hairline:** `#D9D3C7` for rules and borders.
- **Accent:** clay `#8A4B33`, used only for links, focus rings, and one highlighted figure per page. It is not a decorative colour.
- **Night section:** `#1B1A18` for one full-bleed property feature per page, used sparingly.

Colour contrast (WCAG 2.2, computed against the ground):

- Ink `#1F1D1A` on `#F4F1EB` is 14.9:1 (passes AAA).
- Stone `#6F6A62` on `#F4F1EB` is 4.76:1 (passes AA for body text, but only just, so it must not be used on the night section or on tinted panels).
- Clay `#8A4B33` on `#F4F1EB` is 5.9:1 (passes AA for text and focus).
- Hairline `#D9D3C7` on `#F4F1EB` is 1.32:1. It is decorative only; it never carries meaning.
- On the night section (`#1B1A18`), text uses `#F4F1EB` (15.4:1). Clay is **not** used there: clay on night is 2.6:1 and fails.

These values are computed from the hex codes, not from a rendered page. They are re-checked once the page is built.

**Typography**

- Japanese display and English headings: **Shippori Mincho B1** (self-hosted, 400 and 600). Calm, legible at large sizes, with Japanese glyphs designed to sit alongside Latin.
- Japanese and English body: **Zen Kaku Gothic New** (self-hosted, 400 and 500). A neutral gothic with generous Japanese forms.
- Base size 17px on desktop, 16px on mobile. Body line height 1.85 for Japanese, 1.7 for English. Headings use fluid `clamp()` sizes.
- Both families are subset-loaded through Fontsource, so only the glyphs used on the page are downloaded.

**Layout principles**

- 12-column grid, 1280px maximum content width, with a 24px gutter on mobile and 48px on desktop.
- Asymmetric pairings: a wide photograph beside a narrow text column, offset by one or two columns.
- Vertical space is generous (96–160px between major sections) but sections never leave the viewport empty.
- No card grids of identical rounded boxes. Property and news lists use a ruled list with a thumbnail, not a repeated card.

**Image treatment**

- Photographs are cropped to two or three fixed aspect ratios (16:10, 4:5, 1:1) so layouts stay stable.
- No filters, no gradient overlays on text. Text on images sits on a solid ground strip, not on a gradient.
- Every image is served through Astro's image pipeline (AVIF/WebP, responsive widths, explicit dimensions) to prevent layout shift.

## 6. Motion philosophy and concepts

Motion is used to reveal structure, not to decorate. The default is still.

- **Hero:** the photograph fades in from a slight crop reveal (clip-path inset, 900ms, ease-out). Text follows line by line. Plays once.
- **Section reveals:** a single short rise (16px, 500ms) per block as it enters the viewport, triggered with ScrollTrigger. No stagger longer than four items.
- **Property feature:** one horizontal scrub on the photo sequence for the single property, if the sequence exists. Otherwise, a static gallery with keyboard arrows.
- **Navigation:** a thin underline draws under the active item. Language switch swaps text without a page flash.
- **Hover:** links darken to ink; images scale 1.02 over 400ms. Nothing moves on hover that is not clickable.
- **Reduced motion:** all of the above are disabled under `prefers-reduced-motion: reduce`. Content renders at its final state.

Libraries:

- **GSAP + ScrollTrigger:** used for the hero reveal and scroll reveals only. Loaded as a small module on pages that declare motion. Not on every page.
- **CSS transitions and keyframes:** hover states, underline drawing, focus.
- **React / Motion for React:** not used. The site has no interactive island that requires a component framework; the contact form is a few lines of vanilla TypeScript.
- **Three.js:** not used. No 3D asset would improve the experience; the property has a third-party 3D tour that is linked, not embedded.

## 7. Ideas deliberately rejected

| Idea | Why rejected |
|---|---|
| Glassmorphism (suggested by the design-system generator) | Reduces contrast on Japanese text; visually dated for a property brand. |
| Teal and blue "trust" SaaS palette (generator output) | Reads as software, not property or architecture. |
| Cinzel display serif (generator output) | A Western luxury-caps face; mismatched with Japanese headings and with the Beppu setting. |
| Oversized hero with a single slogan over a video | Aman's pattern; delays content and adds bandwidth cost on mobile. |
| Three identical icon cards for services | The most common real-estate template. Services are shown as an editorial list with a photograph. |
| Japanese motifs such as seigaiha or sakura patterns | Not needed. Imagery and typography carry the Japanese character without decoration. |
| Parallax backgrounds | Adds motion without meaning; hurts reading on mobile. |
| Scroll-jacking or pinned sections | Interferes with keyboard and screen-reader navigation. |
| Newsletter or promotional overlays | Dezeen's pattern; covers content. No marketing overlays. |
| Hero video with autoplay | Heavy on mobile; no content gained. |
| Generic "Our Story" hero with stock office photography | No stock imagery. Only the owner's authorized photographs are used. |

## 8. Design proposal summary

- **Art direction:** Quiet Estate. Editorial restraint, photograph-led, one clay accent.
- **Type:** Shippori Mincho B1 (display) and Zen Kaku Gothic New (body), self-hosted.
- **Palette:** washi ground, warm ink, stone secondary, hairline rules, clay accent, night section.
- **Layout:** 12-column asymmetric grid with ruled lists, not card grids.
- **Images:** three fixed crops, no overlays on text, Astro image pipeline.
- **Motion:** one hero reveal, short section rises, underline navigation. Off under reduced motion.
- **Homepage concept:** a full-width photograph of a property with a single line of Japanese headline set in the lower third, followed by a two-column statement, the two entry paths (sell / browse), then a ruled list of recent news, and a closing contact band.

## 9. Open items

- Only four references were visually inspected; none of them is a Japanese property site. The design direction is therefore grounded in general editorial and architecture practice, and should be reviewed by the owner against any Japanese examples they prefer.
- Final palette contrast values must be re-measured on the rendered page.

## Revision 2 addendum: contact hierarchy, imagery and motion

**Contact hierarchy.** Three routes are presented as three distinct treatments in one system, so that none is buried in the footer:

- LINE is a filled clay card, the strongest colour on the page, with the QR code from the official account URL.
- Telephone is an outlined ink card that shows the number in full, with the international format for visitors from abroad.
- Zoom is a hairline card that opens the enquiry form with "ZOOM" preselected. It does not claim to book a meeting.

On phones, a fixed bottom bar offers the same three routes in equal columns (LINE in clay, the others in ink or hairline). It hides while the footer or the enquiry form is visible.

**Imagery.** The homepage is organised as chapters, each with its own layout: a layered opening (the main photograph with a panorama overlapping it), an image-led service row, an asymmetric property mosaic with the floor plan, company portraits, a renovation carousel, news, and the consultation band. Only photographs that show Beppu property, interiors, works or the team are used. Stock-looking and misleading images are excluded (see the audit).

**Motion.** Scroll reveals and the hero crop use CSS keyframes and an IntersectionObserver. GSAP was removed: the site has no choreographed timelines, and the library's boot cost slowed first render on phones. Motion for React and Three.js were not added. The interactions that remain are the lightbox, the carousel, image zoom on hover (pointer devices only), and the animated underline on links. Each has a keyboard path or is decorative.

**Rejected in this revision.** A slider comparing before and after photographs: the source provides composite images with the labels already inside, so a slider would need two separate photographs that the source does not contain. Parallax on the hero: it moves content under the reader without adding meaning. A full-screen video hero: the source inventory contains no video files.
