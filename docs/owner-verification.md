# Beppu Home — Owner Verification and Approval List

Purpose: items the owner must confirm, correct, or approve before the replacement site is built. Nothing on this list has been changed on the live site. Nothing has been invented to fill a gap. Each item lists where it was observed.

Please reply by item number (for example "1 yes, 2 correct to 9:00–18:00, 3 no").

---

## A. Approvals required before any reuse (blocking)

1. **Images and rights.** `asset-inventory.csv` lists 180 image URLs. Nothing should be reused without written permission. Specific questions:
   - 1a. The partner and association banners (`top-banner-1.jpg` 全日本不動産協会大分県本部, `top-banner-2.jpg` かりんの会): are you a member, and are you permitted to show these logos?
   - 1b. The athome logo (`icon_athome.png`) and the Beppu tourism banner (`bn_main.jpg`, 別府市公式観光情報Webサイト): permission from the owners of those marks?
   - 1c. The Oita Prefecture logo (`oita_logo.jpg`): permission to display?
   - 1d. The LINE and Zoom icons: confirm usage terms.
   - 1e. Photos of people (`company_img_5`, `company_img_6`, `company-txt-1*.png`): consent from the people shown.
   - 1f. Property and case photos (`/property/_data/`, `/column/_data/`, `performance_slide*`, `company_slide*`, `hometag_img_*`): do these show private properties, neighbours, or clients? Are you the photographer or do you have the right to republish?
   - 1g. Marketing photos and illustrations (`index_img_*`, `reason-img-*`, `invest_img_*`, season photos `spring/summer/autumn/winter.jpg`, `buy_illust_1.png`, and others): who took or licensed them?
   - 1h. The HEIC photo `column/_data/.../6_1_2.heic` will not display in most browsers. Provide a JPEG or PNG if you want it kept.

2. **Personal information in public content.** Please decide whether these stay public on the new site:
   - 2a. The representative's full name ニコラス ライアン アンドリュー (`/company/`) and the statement of Australian origin (`/investment/`, `/company/`).
   - 2b. Transaction case posts on `/column/` (35 posts) that name localities and some building names (for example post 18 "大分市賀来一棟マンション", post 25 "別府市田の湯町マンション"). Should these be anonymised (remove building names or precise locations) or kept?
   - 2c. The performance list on `/performance/` (22 dated entries, 2012–2019) and the case titles. Do the entries reveal buyer or seller identities?

3. **Contact form data.** The form at `/contact/` collects names, addresses, phone numbers and email. Confirm:
   - 3a. Who receives the submissions (the endpoint is `index.cgi?mode=confirm`). Is that backend yours and still in use?
   - 3b. Is a consent checkbox required with a link to the privacy policy? None was observed on the form.
   - 3c. Retention period and deletion process.

---

## B. Business facts to confirm (on the published pages)

4. **Company details** (`/company/` and footer):
   - Name 株式会社別府ホーム; representative ニコラス ライアン アンドリュー; address 〒874-0021 大分県別府市亀川中央町5番45号; telephone 0977-75-8528; fax 0977-75-8543; email info@beppuhome.jp.
   - Confirm the email address is monitored.
   - Capital 500万円, staff 2人, established 2014-04-28 (sole proprietorship) and 2016-07-01 (incorporated).

5. **Business hours and closed days.** Published as 9:00–17:00, closed on Saturdays, Sundays and public holidays (定休日: 土曜日・日曜日・祝日). The contact page also says "24時間365日受付中" for email. Which is correct for email and phone?

6. **Homepage notice** (`【お詫び】買取相談に対するご回答遅延`). Is it still current? If not, should it be removed?

7. **Response times.** The site states 最短2営業日 (price proposal), 最短1週間前後 (price, homepage) and 最短1ヶ月 (completion, homepage). Confirm these are accurate and whether they should be kept as promises.

8. **Fee table** on `/buy/`: 仲介売却 fee 3% + 60,000円 (税別); 不動産買取 no fee. Confirm the fee structure and that the comparison table is accurate.

9. **Associations and partners**:
   - 9a. 全日本不動産協会大分県本部 membership.
   - 9b. 「かりんの会」: confirm membership and that it is "about 30 companies in Oita Prefecture".

10. **Google Business / athome / LINE links**: confirm each link goes to the current, correct account (`g.page/beppuhome`, `line.me/R/ti/p/@oic9467l`, `www.athome.co.jp/ahks/beppuhome.html`).

---

## C. Claims that need evidence or legal review

11. **Overseas investor survey** (`/investment/`): "国土交通省「平成30年度 海外投資家アンケート調査」で海外投資家の76.3%が「日本の不動産規模は優れている」と評価". Confirm the source and figure, or remove.

12. **Home staging statistics** (`/homestaging/`, image captions):
    - 「ホームステージング白書2017」: 販売までの期間が短縮, and web page views rising. Confirm the source.
    - 「成約までの期間が約3分の1に縮小」 (image `hometag_img_5`). Confirm the source and whether it applies to your own listings.
    - 「別府市では3,000万円以上の高額物件は売却が難しい」. Confirm or provide data.
    - 「当社は『別府市では数少ない』ホームステージング対応」. Confirm.

13. **Auction and short sale** (`/any/`):
    - 競売 sells at 3～5割 below market price.
    - The timeline table (3 months: reminders; 4 months: auction notice; 5+ months: court inspection; auction start ends voluntary sale).
    - Recommend review by a licensed professional (lawyer or 司法書士) before publication, since this is legal guidance.

14. **Vacant house tax** (`/buy/inheritance.html`): 特定空き家 designation raises the property tax, and a demolished lot pays "6倍の固定資産税". Recommend a tax professional confirm the wording.

15. **Hot-spring rights** (property `post-13`): 鉱泉地所有権・採取権・名義変更料 ¥0 included in the price; comparables 80〜150万円 and monthly fees 8000〜12000円. Confirm the figures and that the building's arrangement is as stated.

16. **Native English and overseas service** (`/investment/`, `/company/`): "英語がネイティブな代表が直接お話を伺う". Confirm and specify what English service is offered (the site has no English content).

17. **Privacy policy and terms of use** (inside `/company/`): confirm this is the current, approved version. Recommend a legal review. Decide whether to publish them as separate pages.

18. **Fee comparison and "瑕疵担保責任" claims** (`/buy/`): confirm the rows (for example "瑕疵担保責任 なし" for 買取 and "あり（引き渡し後、白紙解約あり）" for 仲介).

---

## D. Content to correct or confirm (copy issues)

19. **Typos and wording** (not corrected in the inventory):
    - 19a. 「自社簡潔で処理」 (`/buy/inheritance.html`): probably 自社完結. (The FAQ on `/buy/flow.html` says 「全て自己完結で処理」.)
    - 19b. 「良いのもはいい、悪いものは悪い」 (homepage): probably 良いものは良い.
    - 19c. 「どうしていいか分からなかい」 (`/company/`): probably 分からなかった.
    - 19d. 「物件を生まれ変わらすことができます」 (`/company/`): probably 生まれ変わらせることができます.
    - 19e. Footer copyright symbol missing ("Copyright c").
    - 19f. Visual banner alt text has a stray quote character.

20. **Property content** (`/property/post-13/`):
    - 20a. Property type: the page says both マンション and 戸建 (リノベーション売戸建).
    - 20b. Heading "別府駅徒歩350m！戸別温泉つき！1LDK売マンション" versus "別府市荘園 4LDK" elsewhere on the page. Which unit is this?
    - 20c. Price, address (beyond 別府市荘園), area, and build year: not present in the page. Please supply these if the listing is to continue.
    - 20d. Sale status: is this property still for sale?
    - 20e. COVID-19 viewing rules on the page are likely outdated. Confirm current arrangements.

21. **News posts**:
    - 21a. Dates for posts 32 and 33 are shown as 2011 (`/column/`). Probable typo for 2021. Confirm.
    - 21b. Posts 1 (COVID-19 measures, 2020-08-06) and 2 (website renewal, 2020-08-18) may be outdated. Keep, update or archive?
    - 21c. Whether the 20 posts not in the sitemap (16–35) should be kept or consolidated.

22. **Stray duplicates**: the footer copyright line appears twice on most pages. Fix on rebuild.

23. **Property listing**: only one property is listed. Do you want to list more on the new site? If so, supply the data (address, price, specs, photos with rights).

---

## E. Technical and analytics decisions

24. **URL structure.** The current structure (`/buy/`, `/any/`, `/column/post-N/`, `/property/post-N/`) is kept as the default proposal in `url-redirect-map.csv`. Approve, or specify a new structure. Note that the old `.html` URLs, `?p=` pagination and the `/property/cate_1/post-13/` broken link need decisions.

25. **Broken and soft-error behaviour.** Unknown URLs currently redirect to the homepage (302), not 404. The new site should return a real 404. Approve.

26. **Language.** The site is Japanese only. Confirm whether English is in scope. If yes, specify which pages, and supply or approve the translations. Nothing has been translated.

27. **Analytics.** Universal Analytics (`UA-145228358-9`) and Google Tag Manager (`GTM-N8JRLZX`) are on every page. Universal Analytics stopped processing data in 2023. Decide whether to move to GA4 or another tool, and confirm the owner's account access.

28. **Sitemap and robots.** Current sitemap is stale and uses HTTP. Approve replacing it with an HTTPS sitemap that lists all live pages.

29. **Mobile viewport.** `initial-scale=-100` appears on all pages. The new site will use a valid viewport. Approve.

30. **Live site.** This audit did not change the live site. Confirm the live site stays as is until the replacement is approved for launch.

---

## F. Next step

Once the owner has replied to items 1–3 (rights, personal info, contact form) and 24–26 (structure and language), implementation can be planned. Per the brief, no dependencies will be installed and no production website will be created until this plan is approved.
