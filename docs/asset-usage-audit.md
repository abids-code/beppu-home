# Asset usage audit

Scope: every image in the project's asset folders, the old site's image inventory (`docs/asset-inventory.csv`), and the placements in the rebuilt site. Dimensions and sizes were measured from the files themselves, not from the filenames.

## 1. Totals

| Item | Count |
|---|---|
| Image assets referenced by the old site (`asset-inventory.csv`, unique URLs) | 180 |
| Files on disk before cleanup (`src/assets/photos` + `src/assets/brand`) | 157 |
| Photographs kept in `src/assets/photos` | 100 |
| Photographs used by the site | 99 |
| Photographs not used (kept in reserve, with reason below) | 1 |
| Logo and brand files in `src/assets/brand` | 4 |
| Files excluded and moved out of `src` (`assets-excluded/`, not bundled) | 34 |
| Byte-identical duplicates deleted | 18 |
| Files renamed (double extension) | 2 |
| Broken source files (zero bytes on the live server) | 1 (`column/_data/…/5_1_2.jpg`, removed) |

The old site's 180 URLs are not all downloaded. The 180 include theme and UI graphics, navigation icons and third-party marks. Those were excluded on purpose (see section 8).

## 2. Real directory structure

```
src/assets/photos/      100 photographs (optimised by Astro at build time)
src/assets/brand/       4 files: logo01_b.png, logo01_w.png, loading-logo.png, favicon.png
assets-excluded/        34 files moved out of src; kept for the owner, never bundled
public/favicon.png      copy of the official favicon, served at the site root
```

Earlier drafts listed photographs in `src/assets/photos` that were byte-identical copies of other files (for example `13_1_45.jpg` was the same file as `13_1_11.jpg`). Those copies were deleted. The log of every action is in section 4.

## 3. Assets already used, and where

| File | Size | Used on |
|---|---|---|
| `13_1_1.jpg` | 1200×800, 455 KB | Favicon / social image; Homepage; Property listing and detail |
| `13_1_10.jpg` | 1200×800, 473 KB | News list thumbnail; Homepage |
| `13_1_11.jpg` | 1200×800, 805 KB | Homepage; Property listing and detail |
| `13_1_12.jpg` | 800×1200, 368 KB | Property listing and detail |
| `13_1_2.jpg` | 800×1200, 407 KB | Property listing and detail |
| `13_1_3.jpg` | 1200×800, 444 KB | Service pages (hero, figures and galleries); Homepage |
| `13_1_4.jpg` | 1200×800, 543 KB | Property listing and detail |
| `13_1_5.jpg` | 800×1200, 373 KB | Property listing and detail |
| `13_1_54.jpeg` | 725×379, 88 KB | Homepage; Property listing and detail |
| `13_1_6.jpg` | 800×1200, 505 KB | Service pages (hero, figures and galleries); Homepage; Property listing and detail |
| `13_1_7.jpg` | 1200×800, 368 KB | Service pages (hero, figures and galleries); Homepage; Property listing and detail |
| `13_1_8.jpg` | 1200×800, 404 KB | Service pages (hero, figures and galleries); Property listing and detail |
| `13_1_9.jpg` | 1200×800, 450 KB | Sell-process page hero; Homepage; Property listing and detail |
| `autumn.jpg` | 500×375, 175 KB | Service pages (hero, figures and galleries) |
| `buy_illust_1.png` | 512×469, 10 KB | Service pages (hero, figures and galleries) |
| `company_img_10.jpg` | 1200×800, 34 KB | Service pages (hero, figures and galleries) |
| `company_img_5.jpg` | 1160×1238, 626 KB | Company page; Homepage |
| `company_img_6.jpg` | 1160×1386, 754 KB | Company page; Homepage |
| `company_slide2_1.jpg` | 667×500, 42 KB | Service pages (hero, figures and galleries); Homepage |
| `company_slide2_2.jpg` | 375×500, 48 KB | Service pages (hero, figures and galleries) |
| `company_slide2_3.jpg` | 375×500, 47 KB | Service pages (hero, figures and galleries) |
| `company_slide2_4.jpg` | 667×500, 74 KB | Service pages (hero, figures and galleries) |
| `company_slide2_5.jpg` | 667×500, 57 KB | Service pages (hero, figures and galleries) |
| `company_slide2_6.jpg` | 375×500, 47 KB | Service pages (hero, figures and galleries) |
| `company_slide2_7.jpg` | 667×500, 94 KB | Service pages (hero, figures and galleries); Homepage |
| `company_slide2_8.jpg` | 667×500, 108 KB | Service pages (hero, figures and galleries) |
| `company_slide2_9.jpg` | 375×500, 72 KB | Service pages (hero, figures and galleries) |
| `company_slide3_1.jpg` | 640×480, 32 KB | Service pages (hero, figures and galleries) |
| `company_slide3_2.jpg` | 640×480, 33 KB | Service pages (hero, figures and galleries) |
| `company_slide3_3.jpg` | 375×500, 28 KB | Service pages (hero, figures and galleries) |
| `company_slide3_4.jpg` | 375×500, 28 KB | Service pages (hero, figures and galleries) |
| `company_slide3_5.jpg` | 640×480, 28 KB | Service pages (hero, figures and galleries) |
| `company_slide3_6.jpg` | 375×500, 26 KB | Service pages (hero, figures and galleries) |
| `company_slide3_7.jpg` | 375×500, 35 KB | Service pages (hero, figures and galleries) |
| `company_slide3_8.jpg` | 640×480, 23 KB | Service pages (hero, figures and galleries) |
| `company_slide3_9.jpg` | 375×500, 36 KB | Service pages (hero, figures and galleries) |
| `company_slide5_1.jpg` | 375×500, 32 KB | Service pages (hero, figures and galleries) |
| `company_slide5_10.jpg` | 375×500, 20 KB | Service pages (hero, figures and galleries) |
| `company_slide5_11.jpg` | 375×500, 25 KB | Service pages (hero, figures and galleries) |
| `company_slide5_12.jpg` | 667×500, 45 KB | Service pages (hero, figures and galleries) |
| `company_slide5_2.jpg` | 375×500, 64 KB | Service pages (hero, figures and galleries) |
| `company_slide5_3.jpg` | 375×500, 27 KB | Service pages (hero, figures and galleries) |
| `company_slide5_4.jpg` | 667×500, 23 KB | Service pages (hero, figures and galleries) |
| `company_slide5_5.jpg` | 375×500, 39 KB | Service pages (hero, figures and galleries) |
| `company_slide5_6.jpg` | 375×500, 33 KB | Service pages (hero, figures and galleries) |
| `company_slide5_7.jpg` | 375×500, 33 KB | Service pages (hero, figures and galleries) |
| `company_slide5_8.jpg` | 375×500, 27 KB | Service pages (hero, figures and galleries) |
| `company_slide5_9.jpg` | 375×500, 23 KB | Service pages (hero, figures and galleries) |
| `company_slide_1.jpg` | 750×500, 51 KB | Service pages (hero, figures and galleries); Homepage |
| `company_slide_10.jpg` | 750×500, 56 KB | Homepage |
| `company_slide_2.jpg` | 750×500, 39 KB | Homepage |
| `company_slide_3.jpg` | 750×500, 46 KB | Homepage |
| `company_slide_4.jpg` | 333×500, 27 KB | Service pages (hero, figures and galleries) |
| `company_slide_5.jpg` | 750×500, 64 KB | Homepage |
| `company_slide_6.jpg` | 750×500, 88 KB | Homepage |
| `company_slide_7.jpg` | 750×500, 52 KB | Homepage |
| `company_slide_8.jpg` | 750×500, 55 KB | Homepage |
| `company_slide_9.jpg` | 750×500, 41 KB | Homepage |
| `index_img_01.jpg` | 1000×667, 102 KB | Service pages (hero, figures and galleries) |
| `invest_img_4.jpg` | 1200×800, 258 KB | Homepage |
| `performance_slide1_img4.jpg` | 2000×1333, 180 KB | Homepage; Track record page |
| `performance_slide1_img7.jpg` | 2000×1333, 319 KB | Track record page |
| `performance_slide2_img4.jpg` | 1532×1149, 214 KB | Track record page |
| `performance_slide2_img7.jpg` | 320×240, 16 KB | Track record page |
| `performance_slide3_img1.jpg` | 2000×1500, 470 KB | Track record page |
| `performance_slide4_img11.jpg` | 999×1332, 134 KB | Track record page |
| `performance_slide4_img11_2.jpg` | 886×565, 99 KB | Track record page |
| `performance_slide4_img11_3.jpg` | 1145×443, 123 KB | Track record page |
| `performance_slide4_img6.jpg` | 999×1332, 115 KB | Track record page |
| `performance_slide5_img1.jpg` | 2000×1500, 323 KB | Service pages (hero, figures and galleries) |
| `performance_slide5_img5.jpg` | 2000×1500, 520 KB | Service pages (hero, figures and galleries) |
| `performance_slide6_img1.jpg` | 2000×1123, 92 KB | Track record page |
| `performance_slide6_img10.jpg` | 1500×2000, 230 KB | Track record page |
| `performance_slide6_img11.jpg` | 1500×2000, 114 KB | Track record page |
| `performance_slide6_img12.jpg` | 1500×2000, 138 KB | Track record page |
| `performance_slide6_img2.jpg` | 2000×1500, 393 KB | Track record page |
| `performance_slide6_img3.jpg` | 2000×1500, 269 KB | Track record page |
| `performance_slide6_img4.jpg` | 2000×1500, 281 KB | Track record page |
| `performance_slide6_img5.jpg` | 2000×1500, 344 KB | Track record page |
| `performance_slide6_img6.jpg` | 2000×1500, 255 KB | Track record page |
| `performance_slide6_img7.jpg` | 1500×2000, 225 KB | Track record page |
| `performance_slide6_img8.jpg` | 2000×1500, 178 KB | Track record page |
| `performance_slide6_img9.jpg` | 2000×1500, 163 KB | Track record page |
| `performance_slide7_img1.jpg` | 2000×1500, 516 KB | Track record page |
| `performance_slide7_img10.jpg` | 2000×1500, 109 KB | Track record page |
| `performance_slide7_img11.jpg` | 1500×2000, 180 KB | Track record page |
| `performance_slide7_img12.jpg` | 1500×2000, 170 KB | Track record page |
| `performance_slide7_img2.jpg` | 2000×1500, 267 KB | Track record page |
| `performance_slide7_img3.jpg` | 2000×1500, 433 KB | Track record page |
| `performance_slide7_img4.jpg` | 2000×1500, 271 KB | Track record page |
| `performance_slide7_img5.jpg` | 2000×1500, 318 KB | Track record page |
| `performance_slide7_img6.jpg` | 1500×2000, 89 KB | Track record page |
| `performance_slide7_img7.jpg` | 1500×2000, 110 KB | Track record page |
| `performance_slide7_img8.jpg` | 2000×1500, 191 KB | Track record page |
| `performance_slide7_img9.jpg` | 2000×1500, 128 KB | Track record page |
| `spring.jpg` | 500×375, 213 KB | Service pages (hero, figures and galleries) |
| `summer.jpg` | 500×375, 124 KB | Service pages (hero, figures and galleries) |
| `top-banner-bg-1.jpg` | 2000×1333, 41 KB | Service pages (hero, figures and galleries); Contact page; Homepage |
| `top-banner-img-1.jpg` | 2000×1333, 199 KB | Homepage |

## 4. Cleanup log

### Deleted (byte-identical duplicates, or copies of brand files)

- `index_img_01.jpg.jpeg`: byte-identical copy of index_img_01.jpg
- `index_img_03.jpg.jpeg`: byte-identical copy of index_img_03.jpg
- `index_img_04.jpg.jpeg`: byte-identical copy of index_img_04.jpg
- `reason-img-1.jpg.jpeg`: byte-identical copy of reason-img-1.jpg
- `reason-img-2.jpg.jpeg`: byte-identical copy of reason-img-2.jpg
- `reason-img-3.jpg.jpeg`: byte-identical copy of reason-img-3.jpg
- `reason-img-4.jpg.jpeg`: byte-identical copy of reason-img-4.jpg
- `top-banner-img-1.jpg.jpeg`: byte-identical copy of top-banner-img-1.jpg
- `visual-img-1.jpg.jpeg`: byte-identical copy of visual-img-1.jpg
- `visual-img-3-sp.jpg.jpeg`: byte-identical copy of visual-img-3-sp.jpg
- `visual-img-3.jpg.jpeg`: byte-identical copy of visual-img-3.jpg
- `13_1_45.jpg`: byte-identical to 13_1_11.jpg
- `13_1_47.jpg`: byte-identical to 13_1_6.jpg
- `13_1_49.jpg`: byte-identical to 13_1_9.jpg
- `favicon.png`: duplicate of src/assets/brand/favicon.png
- `loading-logo.png`: duplicate of src/assets/brand/loading-logo.png
- `logo01_b.png`: duplicate of src/assets/brand/logo01_b.png
- `logo01_w.png`: duplicate of src/assets/brand/logo01_w.png

### Renamed

- `top-banner-bg-1.jpg.jpeg` → `top-banner-bg-1.jpg`
- `visual-img-1-sp.jpg.jpeg` → `visual-img-1-sp.jpg`

### Excluded (moved to `assets-excluded/`, not bundled)

| File | Reason |
|---|---|
| `13_1_39.jpg` | shows a red SOLD stamp (成約済み) on a property that is listed for sale |
| `any_img_1.jpg` | generic stock image of a distressed person; not a Beppu property |
| `any_img_2.jpg` | generic stock image (house in hands) |
| `buy_img_1.jpg` | generic stock image (calculator and model houses) |
| `reason-img-1.jpg` | generic stock image |
| `reason-img-2.jpg` | generic stock image (business meeting) |
| `reason-img-3.jpg` | generic stock image (model house in hand) |
| `reason-img-4.jpg` | generic stock image (team hands together) |
| `hometag_img_1.jpg` | appears to be generic stock staging photography; source not confirmed |
| `hometag_img_2.jpg` | appears to be generic stock staging photography; source not confirmed |
| `hometag_img_3.jpg` | appears to be generic stock staging photography; source not confirmed |
| `hometag_img_4.jpg` | appears to be generic stock staging photography; source not confirmed |
| `hometag_img_5.jpg` | appears to be generic stock staging photography; source not confirmed |
| `hometag_img_6.jpg` | appears to be generic stock staging photography; source not confirmed |
| `index_img_02.jpg` | generic stock image (man with documents) |
| `index_img_03.jpg` | generic stock image (house exterior, not identified) |
| `index_img_04.jpg` | generic stock image (interior render, not identified) |
| `inherit_img_1.jpg` | generic stock image (older man at window) |
| `inherit_img_3.jpg` | generic stock image (paper house on grass) |
| `inherit_img_5.jpg` | landscape of unverified location; not confirmed as Beppu |
| `inherit_img_6.jpg` | generic stock image (banknotes and model house) |
| `invest_img_1.jpg` | Tokyo skyline; misleading for a Beppu investment page |
| `invest_img_2.jpg` | generic stock image (people with laptop) |
| `invest_img_3.jpg` | generic stock image (banknote and model house) |
| `winter.jpg` | snowy lake; not representative of Beppu and location unverified |
| `company_img_7.jpg` | crowd photograph with a third-party business sign visible; no permission for either |
| `company_img_11.jpg` | infographic with an unverified superlative (日本一) |
| `visual-img-1.jpg` | slogan and house graphic baked into the image; not editable or accessible |
| `visual-img-1-sp.jpg` | slogan and house graphic baked into the image |
| `visual-img-3.jpg` | slogan baked into the image |
| `visual-img-3-sp.jpg` | slogan baked into the image |
| `company-txt-1.png` | white text on transparent background; invisible on light backgrounds |
| `company-txt-1-sp.png` | white text on transparent background; invisible on light backgrounds |
| `performance_banner_1.png` | button-style UI graphic, not a photograph |

## 5. Unused photographs, and why

| File | Size | Reason it is not used |
|---|---|---|
| `company_img_8.jpg` | 1200×800, 458 KB | Context (location and subject) not verified against the old site, so it is held back rather than captioned. Usable once the owner confirms it. |

## 6. Low-resolution and unsuitable-size images

Images narrower than 800 px are shown at half-width or smaller, never as a full-bleed hero. Their use is listed below.

| File | Size | Used on | Note |
|---|---|---|---|
| `13_1_54.jpeg` | 725×379 | Homepage; Property listing and detail | Half-width or smaller only |
| `autumn.jpg` | 500×375 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `buy_illust_1.png` | 512×469 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_1.jpg` | 667×500 | Service pages (hero, figures and galleries); Homepage | Half-width or smaller only |
| `company_slide2_2.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_3.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_4.jpg` | 667×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_5.jpg` | 667×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_6.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_7.jpg` | 667×500 | Service pages (hero, figures and galleries); Homepage | Half-width or smaller only |
| `company_slide2_8.jpg` | 667×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide2_9.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_1.jpg` | 640×480 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_2.jpg` | 640×480 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_3.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_4.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_5.jpg` | 640×480 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_6.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_7.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_8.jpg` | 640×480 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide3_9.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_1.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_10.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_11.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_12.jpg` | 667×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_2.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_3.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_4.jpg` | 667×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_5.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_6.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_7.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_8.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide5_9.jpg` | 375×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide_1.jpg` | 750×500 | Service pages (hero, figures and galleries); Homepage | Half-width or smaller only |
| `company_slide_10.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_2.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_3.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_4.jpg` | 333×500 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company_slide_5.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_6.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_7.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_8.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `company_slide_9.jpg` | 750×500 | Homepage | Half-width or smaller only |
| `performance_slide2_img7.jpg` | 320×240 | Track record page | Half-width or smaller only |
| `spring.jpg` | 500×375 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `summer.jpg` | 500×375 | Service pages (hero, figures and galleries) | Half-width or smaller only |
| `company-txt-1-sp.png` (excluded) | 772×182 | — | Also too small for large display |
| `index_img_02.jpg` (excluded) | 540×667 | — | Also too small for large display |
| `performance_banner_1.png` (excluded) | 558×132 | — | Also too small for large display |
| `reason-img-1.jpg` (excluded) | 470×470 | — | Also too small for large display |
| `reason-img-2.jpg` (excluded) | 470×470 | — | Also too small for large display |
| `reason-img-3.jpg` (excluded) | 470×470 | — | Also too small for large display |
| `reason-img-4.jpg` (excluded) | 470×470 | — | Also too small for large display |
| `visual-img-1-sp.jpg` (excluded) | 464×584 | — | Also too small for large display |
| `visual-img-3-sp.jpg` (excluded) | 464×584 | — | Also too small for large display |
| `winter.jpg` (excluded) | 500×375 | — | Also too small for large display |

## 7. Logos and brand assets

| File | Size | Use | Rights status |
|---|---|---|---|
| `favicon.png` | 192×192, 19 KB | Browser tab and Apple touch icon (`public/favicon.png`) | Company's own file from its website. Use confirmed by the owner's brief; written confirmation to be kept on file. |
| `loading-logo.png` | 958×468, 35 KB | Company page identity lockup with 株式会社 別府ホーム (`Lockup.astro`) | Company's own file from its website. Use confirmed by the owner's brief; written confirmation to be kept on file. |
| `logo01_b.png` | 400×180, 11 KB | Header logo on light backgrounds (`Logo.astro`, tone=dark) | Company's own file from its website. Use confirmed by the owner's brief; written confirmation to be kept on file. |
| `logo01_w.png` | 400×180, 7 KB | Footer logo on the dark footer (`Logo.astro`, tone=light) | Company's own file from its website. Use confirmed by the owner's brief; written confirmation to be kept on file. |

Checks made on the logos:

- Aspect ratio is preserved everywhere: the logo is sized by height with `width: auto`, so 400×180 stays 2.22:1. A CSS conflict that stretched the header logo to its natural 400×180 on phones was found and fixed.
- Light background: header logo (dark version). Dark background: footer logo (white version). The white version is invisible on a light background, so it is never used there.
- The full lockup (`loading-logo.png`) carries a soft drop shadow in the original file. It is shown as supplied and not recoloured.
- Japanese name: 株式会社 別府ホーム is used in the lockup and in the legal footer line. 別府ホーム is the brand name in Japanese, and Beppu Home is used on English pages. Both are taken from the source.
- Favicon: the official 192×192 favicon. It is a full lockup scaled into a square, so it is legible only at larger sizes. A dedicated small-size mark would need an owner decision.
- Mobile navigation: the logo is in the header, which stays visible when the menu opens.

## 8. Third-party marks: rights verified separately

Reuse of the company's own logo does not grant rights to anything else on the old site. The following were **not** downloaded or used, and each needs its own permission before any reuse:

| Asset (old site) | What it is | Status on the new site |
|---|---|---|
| `icon_athome.png` | athome listing service logo | Not used. Third-party mark. |
| `oita_logo.jpg` | Oita Prefecture logo | Not used. Government mark; permission needed. |
| `bn_main.jpg` | 別府市公式観光情報Webサイト banner | Not used. City tourism site banner. |
| `top-banner-1.jpg` | 全日本不動産協会大分県本部 banner | Not used. Association mark; membership logo use to be confirmed. |
| `top-banner-2.jpg` | かりんの会 banner | Not used. Group mark; permission needed. |
| `button-line.svg`, `icon-line.svg`, `line-popup-1.png` | LINE brand icon and popup | Not used. Brand mark. LINE is shown as text and an original speech-bubble icon. |
| `button-zoom.svg`, `icon-zoom.svg` | Zoom brand icons | Not used. Brand mark. Zoom is shown as text and an original video icon. |
| `company_img_7.jpg` | festival group photo with a third-party business sign | Excluded (section 4). Both the people and the sign need consent. |

Site UI graphics that are not photographs (navigation icons `fnav-icon-*`, slide and top buttons, point-title images) were not downloaded. The new site uses its own icons and type. Logo and brand files are covered in section 7.

## 9. Recommended placements, and what changed

- Homepage: a layered opening (the living-room photograph with the Beppu Bay panorama overlapping it); an image-led service row; a property mosaic with the floor plan; company portraits; a renovation carousel; news; the three-route consultation band with the staff photograph.
- Service pages: a hero for each service, figures with captions where a photograph explains the point, and a gallery strip. The investment page uses the Beppu hot-spring photograph and labelled seasonal images.
- Track record: purchase-case mosaic, the two genuine before-and-after composites (kept as supplied, not re-cut), a construction and interior set for the new-build rental (with the rendering captioned as a rendering), and a renovated-rental set.
- Property detail: a lightbox gallery, the floor plan as its own figure, and the three highlight images.
- Company page: the representative and staff portraits beside their biographies.
- News: a thumbnail for the one post that matches a photographed property (post 5, the Shoen-machi home). No other post has a verified matching photograph, so none is given one.

## 10. Image handling rules applied

- Every `<img>` has a width, a height or a fixed aspect ratio, so the layout does not shift while images load.
- Crops use `object-fit: cover` with `object-position` set where the subject sits low or high (for example portraits use `object-top`).
- Responsive `widths` and `sizes` are set on every image, and Astro's image pipeline serves WebP.
- Below-the-fold images are `loading="lazy"`. The homepage hero is `loading="eager"` with `fetchpriority="high"`.
- Informative photographs have descriptive alt text. Purely decorative images have empty alt. Captions say "イメージ" or "（事例）" wherever the subject is not verified.
- Hover zoom only on pointer devices (`hover: hover` and `pointer: fine`), so touch screens are not affected.

