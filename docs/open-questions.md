# Open questions and decisions for the owner

These items were found while building the new site. None of them has been resolved by guessing. Where the site currently shows something, the note says what is shown and why. Items already listed in `owner-verification.md` are referenced by number and not repeated here.

## A. Blocking before launch

1. **Contact form delivery.** The form validates and then shows a demo notice. It does not send anything, and it does not store anything. Choose a delivery method (for example a form service, an email address, or a small server endpoint) and confirm who receives enquiries. Until then the form must stay in demo mode.
2. **Production domain.** The canonical URLs, sitemap and `robots.txt` use `SITE_URL` (or the Vercel URL during a preview build). Confirm the domain the site will launch on.
3. **Analytics.** The old site loads Universal Analytics (`UA-145228358-9`) and Google Tag Manager (`GTM-N8JRLZX`). The new build loads neither. Decide whether to add GA4 (or another tool), and who owns the account.
4. **Legal pages.** The privacy policy and terms of use are published as Japanese text on the English pages, with a notice. They need review by a professional before launch. Confirm they are the current versions.

## B. Content conflicts found in the published text

5. **Sell page price claim.** The comparison table says a property purchase tends to achieve a "高値傾向" (higher price), but the paragraph above it says a purchase price is "generally lower" than a brokered sale. The site shows both as published. Which statement is correct?
6. **Loan timeline.** The homepage and `/buy/` say a purchase can be proposed "最短2営業日", and the homepage says the cash can come "最短1ヶ月". The terms of use text says "通常ご相談から現金化まで「2週間程度」". Which is current?
7. **Email hours.** The contact page says "24時間365日受付中" for email. The office hours are 9:00–17:00 on weekdays. The new contact page does not repeat the 24-hour claim. Confirm.
8. **Property listing.** The single property is titled "各戸温泉付きリノベーションマンション". Its description also says 4LDK (戸建) in one place and 1LDK マンション in another. The new page shows "リノベーション売り物件（マンション）" and location 別府市荘園 only. Confirm the unit type and the full address you want shown.
9. **Property price.** No price appears on the site. The new page says "お問い合わせください". Confirm.
10. **Dated transaction list.** `/performance/` lists 22 dated entries (2012–2019). Those dates were not transcribed, because I could not confirm what each entry records. The new performance page shows case photographs and the published captions only. Confirm whether the list should be published, and in what form.
11. **Staff biographies.** The two biographies on `/company/` are reproduced in full, in Japanese and in English translation. Confirm the English wording and that both people consent to the publication.
12. **English company name and address.** The English pages show "Beppu Home Co., Ltd." and an English address line. Neither romanisation has been confirmed. The representative's name is shown in katakana only.
13. **Staging cost section.** The text is published as written. No cost figures are given on the site. Confirm whether figures should be added.

## C. Images and people

14. **People photographs.** The consultation photograph on the sell page (`index_img_01.jpg`) shows a staff member with a client. Confirm consent for the staff member to appear.
15. **Images not used.** These were excluded on purpose: `invest_img_1.jpg` (a Tokyo skyline on an investment page about Beppu), `company_img_7.jpg` (a group photograph with a third-party business sign visible), and `reason-img-1.jpg` (a generic stock photo). Confirm whether any of them should be restored.
16. **Rendering.** `performance_slide6_img1.jpg` is a computer-generated image of a building and is captioned as a rendering. Confirm the caption is accurate.
17. **Third-party assets.** No third-party logos (athome, Oita Prefecture, the tourism banner, the association and "かりんの会" banners, LINE and Zoom icons) are used. Text labels replace them. Confirm you are happy with that, or provide permission for any you want back.
18. **Old logo.** The old logo is not reused. The new site uses a text wordmark (別府ホーム / Beppu Home). Confirm.

## D. Dates and case posts

19. **Two posts with 2011 dates.** Posts 32 and 33 are dated 2011 in the source, between entries from 2021. They display a "日付確認中" note. Confirm the correct dates.
20. **Customer privacy in case posts.** Several transaction posts name localities and building names (for example post 18 and post 25). They are published as they were. Decide whether to anonymise them before launch.
21. **Loan case examples.** The three loan examples on `/any/` are short descriptions. Confirm they are anonymous enough, and whether Case 3 (the divorce) should be included, since its support text was not in the source I extracted.

## E. Not yet built

22. **English news bodies.** Every post has an English translation. The translations are close paraphrases of the Japanese, and they have not been reviewed by a native speaker or by you.
23. **Prefecture names.** The contact form's prefecture list is shown in Japanese on the English page. Decide whether to romanise it.
24. **Reviews and testimonials.** None are published. The loan case examples are not presented as testimonials.

## F. Added in the brand, contact and imagery revision

25. **Zoom consultation procedure.** The current site says Zoom consultations are arranged through the enquiry form, with "ZOOM" available as the preferred contact method. It does not describe how a meeting is scheduled, who creates the meeting link, or how long a reply takes. The site therefore has no booking link, and none is invented. The Zoom buttons open the form with "ZOOM" preselected, and the text says the date is arranged afterwards. Confirm the real procedure, and whether a meeting link or booking tool should be added.
26. **LINE QR code.** The QR code is generated at build time from `https://page.line.me/oic9467l?openQrModal=true` with the `qrcode` library. It has not been scanned with a phone in this environment. Scan it once from the preview to confirm it opens the official account.
27. **Business hours and the 24-hour email claim.** The official LINE profile lists Monday–Friday, 9:00–17:00, closed on weekends and public holidays. The current site says the same, so the new site uses that statement everywhere. The contact page of the old site also said email is "24時間365日受付中". That claim is not on the new site, but it conflicts with the hours. Confirm which is correct, so the owner can decide whether email is answered outside hours.
28. **LINE reply time.** No reply time is promised anywhere on the site. If you want to state one, confirm it first.
29. **Third-party marks.** These were not downloaded or used: athome, Oita Prefecture, the tourism-site banner, the 全日本不動産協会大分県本部 and かりんの会 banners, and the LINE and Zoom brand icons. Each needs written permission before reuse. Full list in `docs/asset-usage-audit.md`, section 8.
30. **Staff photograph consent.** The consultation band, the company page and the homepage use the portraits of the representative and staff member, and the consultation photograph on the sell page shows a staff member with a client. Confirm consent for each.
31. **Property listed as sold.** `13_1_39.jpg` shows a red 成約済み (sold) stamp on a photograph of the Shoen-machi property, which is listed as for sale. That image is excluded from the site. Confirm whether the property is still for sale.
32. **Photographs held back.** `company_img_8.jpg` (a dining room) has no verified location or context, so it is not used. Confirm where it was taken if you want it on the site.
33. **Photographs excluded for content.** Excluded in the audit, with reasons: the Tokyo skyline (`invest_img_1`), a winter lake (`winter.jpg`, not Beppu), slogan text baked into images (`visual-img-1`, `visual-img-3` and their mobile versions), and the stock-looking staging, inheritance, investment and reason photographs. If you know they were taken in Beppu and you have the rights, tell us and they can come back.
34. **Locations of seasonal and landscape images.** `spring.jpg`, `summer.jpg`, `autumn.jpg`, `invest_img_4.jpg` and `top-banner-bg-1.jpg` are shown as illustrations ("イメージ" or "季節のイメージ"). Their exact locations are not stated in the source. Confirm they are Beppu before the captions are changed.
35. **Before-and-after composites.** `performance_slide4_img11_2.jpg` and `_3.jpg` are composite images that already contain "Before" and "After" labels. They are shown as supplied, not re-cut, so the labels remain in the picture. Confirm the captions match the projects.
36. **Performance figures.** On a simulated mobile connection, the homepage scores 82 for performance and the performance page 75, with largest contentful paint at 4.5 s and 6.6 s. The largest share of the load is the font stylesheet (uncompressed locally) and the photograph count. Re-measure on the Vercel preview, where responses are compressed, before deciding whether to reduce the number of photographs above the fold.
37. **Motion decisions.** GSAP was removed. Scroll reveals and the hero crop are now plain CSS and an IntersectionObserver, because the site had no choreographed sequences to justify the library, and its boot cost slowed first render on phones. Motion for React and Three.js were not added. Owner decision if you want a richer sequence later.
