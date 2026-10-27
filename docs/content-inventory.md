# Beppu Home — Content Inventory

- Source: https://www.beppuhome.jp/ (snapshot 2026-10-28)
- Language: Japanese only. No English source content exists. Any English on the new site needs owner approval of the translation. Nothing here has been translated.
- Source references: `page-inventory.csv` (URL, status, metadata), `asset-inventory.csv` (images), `owner-verification.md` (items needing confirmation).
- Notation: **[verify]** = claim or fact the owner must confirm before reuse. **[observed]** = directly visible in the HTML. Headings are shown as they appear on the site, in Japanese.

---

## 1. Business identity (observed on `/company/` and the homepage)

| Field | Value (as published) | Source | Status |
|---|---|---|---|
| Company name | 株式会社別府ホーム | `/company/` | [observed] |
| Trade name | 別府ホーム (Beppu Home) | all pages | [observed] |
| Representative | ニコラス ライアン アンドリュー (name is on the page as published) | `/company/` | [observed] [verify] consent to republish |
| Head office | 〒874-0021 大分県別府市亀川中央町5番45号 | `/company/`, footer | [observed] |
| Telephone | 0977-75-8528 | header, footer, body CTAs | [observed] |
| Fax | 0977-75-8543 | `/company/` | [observed] |
| Email | info@beppuhome.jp | `/company/` | [observed] [verify] monitored address |
| Hours | 9:00～17:00 (定休: 土曜日・日曜日・祝日) | `/company/`, homepage LocalBusiness | [observed] [verify] (the same page also says 土日・祝日, same meaning) |
| Established | 2014-04-28 as 個人事業 (sole proprietor) 別府ホーム; 2016-07-01 incorporated as 株式会社別府ホーム | `/company/` | [observed] [verify] |
| Capital | 500万円 | `/company/` | [observed] [verify] |
| Staff | 2人 | `/company/` | [observed] [verify] |
| Business description | 大分市・別府市の不動産買取・任意売却, plus 投資・別荘, ホームステージング, and overseas-investor property support | all pages | [observed] |
| Associations | 全日本不動産協会大分県本部 (banner image); 「かりんの会」 (described as about 30 real-estate companies in Oita Prefecture) | homepage and footer banners | [observed] [verify] membership and logo use |
| External partner link | athome listing page (`www.athome.co.jp/ahks/beppuhome.html`) | homepage | [observed] |
| Google Business profile | `g.page/beppuhome` | homepage, `/property/` | [observed] |
| Map | Google Maps embed on `/company/` and on the property page | [observed] |
| Social/chat | LINE official account (`line.me/R/ti/p/@oic9467l`, QR popup), Zoom online consultation | header, body CTAs | [observed] |

### Stated facts that need evidence [verify]
- Response timing: 最短2営業日 for a price proposal (`/buy/`, `/buy/flow.html`); 最短1週間前後 for a price (homepage); 最短1ヶ月 for completion (homepage).
- Fee table (`/buy/`): 仲介売却 fee 3% + 60,000円 (税別); 不動産買取 fee not charged; 不動産買取 "最短2営業日" price proposal.
- Partner network 「かりんの会」: 大分県内約30社.
- Overseas-investor claim: 国土交通省「平成30年度 海外投資家アンケート調査」— 76.3% rate Japanese real estate as excellent (`/investment/`).
- Home staging: ホームステージング白書2017 (sales period shortened, page views up); 「成約までの期間が約3分の1に縮小」 (image caption `hometag_img_5`); 3,000万円以上の物件 are hard to sell in Beppu (`/homestaging/`).
- Auction discount: 競売 sells "市場価格よりも3～5割ほど安い" (`/any/`).
- Timeline table (`/any/`): 3 months behind = creditor reminders; 4 months = auction notice; 5+ months = court inspection; "競売スタート" = end of voluntary sale option.
- Vacant-property tax: 特定空き家 designation raises property tax; a vacant lot pays "6倍の固定資産税" compared to a built lot (`/buy/inheritance.html`). This is a legal/tax statement and needs professional review.
- Support by sales point: 「24時間365日受付中」 for email (`/contact/`) — conflicts with the 9–17 business hours and the response-delay notice on the homepage.

---

## 2. Global elements (repeated on pages)

### Header / main navigation (labels as published)
- HOME → `/`
- 不動産を売りたい方へ → `/buy/` (Sale)
- 損をしている方へ → `/buy/inheritance.html` (inheritance / vacant property)
- 買取までの流れ／Q&A → `/buy/flow.html`
- ローン返済ができない方へ → `/any/` (short sale / 任意売却)
- 投資・別荘をご検討の方へ → `/investment/`
- もっと早く高く売りたい方へ → `/homestaging/` (Home staging)
- 実績・事例 → `/performance/`
- 選ばれる理由／会社概要 → `/company/`
- お知らせ・最新情報 → `/column/` (News)
- 物件情報一覧 → `/property/` (Properties)
- 無料査定依頼・お問い合わせ → `/contact/` (Contact)

### Footer
- Company name, address, copyright (duplicated on each page; ©-symbol missing)
- Links (from extracted text; verify against the rendered footer): Home, 不動産を売りたい方へ, 相続物件・空家でお悩みの方へ, 買取までの流れ, ローン返済ができない方へ, 投資・別荘, 実績紹介, 当社が選ばれる理由, 会社概要, 物件情報一覧, お知らせ・最新情報, 無料査定・問い合わせ

### Persistent calls to action
- "CONTACT US" block at the bottom of each service page with: 無料査定依頼はこちら; お問い合わせ・相談はこちら
- Floating/fixed buttons: TEL (0977-75-8528), LINE, Zoom, Mail
- Pop-up: LINE popup (`line-popup-1.png`) on pages with LINE CTA

### Repeated copy
- Address, phone, Zoom and LINE blocks
- Breadcrumb JSON-LD on every page except the homepage (see §8)

---

## 3. Homepage (`/`)

- Title: 大分市・別府市の不動産買取・任意売却なら「株式会社別府ホーム」
- H1: 大分市・別府市の不動産買取・任意売却のご相談は「別府ホーム」へ
- Meta description: 大分市・別府市の不動産買取・任意売却なら「別府ホーム」へお任せください。大分市・別府市のみならず、海外の投資家に対しても日本の不動産に関することなら何でも相談に乗っています。オーストラリア出身の代表ならではの日本人にはできない提案が強みです。
- Keywords meta: 大分市,別府市,不動産,買取,売却,家,売りたい,ホームステージング,別府ホーム

### Sections (in order)
1. **Notice** — `【お詫び】買取相談に対するご回答遅延に関するお知らせ`: the company is receiving many purchase enquiries and responses may take several days to 2 weeks. [verify] is this notice still current? It is time-sensitive.
2. **Property information** — `PROPERTY INFORMATION 物件情報一覧` with "VIEW MORE" (latest 3 items are loaded from a site endpoint; see discovery summary §2).
3. **News** — `NEWS お知らせ・最新のお問い合わせ` with "VIEW MORE" (latest 3 items; same loading).
4. **Actual introduction** — `ACTUAL INTRODUCTION 実績紹介`, with four tiles: 買取実績 (Purchase record), 買取事例 (Purchase case), 投資物件事例 (Investment property example), ホームステージング事例 (Home staging case).
5. **Problem-based entry** — `不動産のどんなお悩みでも解決いたします！`: スムーズに現金化したい → 不動産買取; 相続・空き家 → 相続物件; ローンが返済できない → 任意売却; 投資・別荘・移住 → 投資; もっと早く高く売りたい → ホームステージング.
6. **Reasons to choose** — `REASON FOR CHOOSING 別府ホームが選ばれる理由`:
   - POINT1: スピーディーに現金化できる ("その秘密とは？")
   - POINT2: 「片付け」「手続き」全部お任せ！ ("その理由とは？")
   - POINT3: 「売れない」を「売れる」に変える！ ("その方法とは？")
   - POINT4: 専門家との連携！ ("その連携とは？")
7. **Online consultation** — ZOOM相談・査定 for remote clients, with "ご希望の方はこちら→" link.
8. **Trust statement** — 安心に、安全に、大切に。不動産を確実に現金化いたします。
9. **Service blocks** — SELL YOUR PROPERTY (不動産を売りたい方へ); SHORT SALE (ローン返済でお困りの方へ); INVESTMENT・HOLIDAY HOME (投資・別荘・移住); HOME STAGING (もっと早く・高く売りたい方へ). Each has a "CLICK HERE" / "詳細はコチラ" link.
10. **Contact** — CONTACT US block.

### Notes
- Visual slogan on the top banner: 「お客様の想いをカタチに。」それが私たちの仕事です。 (alt text has a stray quote mark).
- Fixed LINE popup image.

---

## 4. Service pages

### 4.1 `/buy/` — 不動産を売りたい方へ (Sale: purchase by the company)
- H1: 大分市・別府市で不動産買取・任意売却を取り扱っている「別府ホーム」の「不動産を売りたい方へ」のページです。
- Sections: 不動産買取＝すぐに現金化！; 当社にご依頼いただく「大きな」メリット; 相続・空き家ももちろんスピード対応 (3-column text).
- Comparison table: 不動産買取 vs 仲介売却 across 特徴, 売主, 売買契約, 売買代金, 手数料, 価格, 期間, 瑕疵担保責任, 事前のリフォーム, 営業電話, 内覧対応, プライバシー. Table is horizontally scrollable on mobile (note on page).
- Key claims: 最短2営業日 price proposal; 瑕疵担保責任 none (purchase) vs 有 (brokerage); 営業電話 none; 誰にも知られず売却可能 [verify all rows].
- Owner differentiators: Australian-Japanese management, women staff member, privacy-focused.
- CTA: 無料査定依頼はこちら; お問い合わせ・相談はこちら.

### 4.2 `/buy/flow.html` — 不動産売却の流れ・Q&A (Process and FAQ)
- URL note: `.html` extension (old-style URL; see redirect map).
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「不動産売却の流れ・Q&A」のページです。
- Process (5 steps, HowTo JSON-LD):
  1. Contact — phone 0977-75-8528 or 査定依頼/お問い合わせフォーム
  2. Assessment and price — on-site check, price within 最短2営業日; remote clients need not travel
  3. Meeting — price proposal and schedule (phone/email/post for remote clients)
  4. Contract — written terms (scheduling, furniture disposal)
  5. Final settlement (残金決済)
- FAQ (8 questions, FAQPage JSON-LD):
  1. 仲介売却と買取の違いは何ですか？
  2. 任意売却と買取は、どう違うのですか？
  3. 他の不動産会社で売却中ですが、査定をお願いできますか？ (exclusive or general listing contracts only)
  4. 建物が傷んでいると買い取ってもらえませんか？ (buildings may be unbuyable; land valuation if beyond repair)
  5. どんな不動産でも買取は可能ですか？ (not 市街化調整区域, paddy, field, mountain — "難しい場合もあります")
  6. 離婚し、早急に物件を売りたいです。可能ですか？
  7. 親から相続した不動産を、どうしたらいいかわからず困っています。相談できますか？
  8. 空き家を持っており、そのままにしています。売却できますか？
  9. 県外の実家を相続しました。売却できますか？
  (Count: the page has 9 FAQ items in text; the JSON-LD FAQPage lists 5. Owner should decide which FAQ set is authoritative.)
- Note: the FAQ contains the phrase 「全て自己完結で処理」 — see §9 for wording issues.

### 4.3 `/buy/inheritance.html` — 相続物件・空家でお悩みの方へ (Inherited property / vacant houses)
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「相続物件・空家でお悩みの方へ」のページです。
- Sections:
  - 空き家・相続に関する様々なお悩み (three personas: 空き家を持っている方へ, 物件を相続した方へ, 県外に実家がある方へ)
  - そのままでは「損」をし続けるだけです (vacant-property tax and demolition costs) [verify]
  - 当社なら、「損をしないための」解決が可能 (company can clear debris and dispose of goods)
  - 移動などのお客様負担は限りなくゼロに。「何もせず」売却可能 (no travel, no clearing)
- Inline stories: 放火 risk, 不法投棄, 犯罪の温床 (safety messages) [verify wording]
- Images: `inherit_img_1,3,5,6`.

### 4.4 `/any/` — ローンの返済ができない方へ (Short sale / 任意売却)
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「ローンの返済ができない方へ」のページです。
- Sections:
  - ローンの返済ができずに困っている方へ～任意売却～
  - 住宅ローンに関してお困りの方へー「こんなお悩みはありませんか？」 (7 scenarios: retrenchment/bonus cut; divorce; missed payments; court auction notice; attached property; purchase of a problem property; wish to avoid auction)
  - 任意売却で「今後の費用」を確保 (how a voluntary sale affects creditor relations, moving costs) [verify legal content]
  - 「任意売却」は売却可能な期間がある (timeline table: 3 months, 4 months, 5+ months, auction start)
  - 主なご相談事例 — CASE1 (income drop, cash purchase option), CASE2 (business difficulties) and further cases (not all fully read; see extract)
- CTA: 詳細はコチラ and CONTACT US block.
- Note: this page is the only place mentioning 競売 and 差し押さえ in detail; sensitive content, legal review recommended [verify].

### 4.5 `/investment/` — 投資・別荘をご検討の方 (Investment / holiday homes)
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「投資・別荘をご検討の方」のページです。
- Sections:
  - 日本の不動産マーケット市場は投資に向いている (MLIT survey claim; weak yen) [verify]
  - 「別府市」という観光地としての市場価値 (tourism; foreign tourist popularity)
  - オーストラリア出身の代表だから、グローバルな視点・知識＋英語での対応も可能 (native English contact claim) [verify]
  - Seasonal images (spring/summer/autumn/winter) and "別府のリアルな今" content.
- CTA: CLICK HERE and CONTACT US.

### 4.6 `/homestaging/` — もっと早く高く売りたい方へ (Home staging)
- H1: 大分市・別府市で不動産買取・任意売却・ホームステージングを行っている「別府ホーム」の「もっと早く高く売りたい方へ」のページです。
- Sections:
  - より「高く」・より「早く」売りたい方へ～ホームステージング～
  - ホームステージングという方法で「早く・高く売れる」可能性を高める (what staging is)
  - 当社は「別府市では数少ない」ホームステージング対応の不動産 (claim of rarity) [verify]
  - ホームステージング事例 — case galleries in 4 groups: 大観山 (renovation + staging + planting), 三輪 (renovation + staging), 三川 (small renovation + staging), 亀川 (renovation + staging)
  - ホームステージングをする際は、必ず費用を確認しよう！ (cost-check advice)
- Claims: 3,000万円以上の物件 sale is difficult in Beppu; staging data points [verify].

### 4.7 `/performance/` — 買取実績・事例紹介 (Track record and cases)
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「実績・事例紹介」のページです。
- Sections: 買取実績 (dated list), 買取事例 (cases with photos), 投資物件事例, banner note: 別府ホームは中古住宅のリノベーションも手掛けております.
- Dated transaction list: 22 dated entries from 平成24年12月1日 to 令和1年9月1日 (2012-2019). [verify] this list is purchases vs. cases, and whether the entries can be published (buyer/seller privacy).
- Case titles seen in alt text: 別府市・中古戸建; 宇佐市・旧商用店舗兼倉庫; 別府市・休眠地; 別府市・純和風戸建; 別府市・中古戸建―解体―更地; ①新築賃貸マンション; ②リノベーション賃貸アパート.
- Repeated text: 「別府ホームでは片付けもお手続きも、買取に関する諸業務は全て代行いたしますので、現状のまま買取が可能です！」 (appears 5 times).

### 4.8 `/company/` — 会社概要 (Company)
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「会社概要」のページです。
- Sections:
  - 別府ホーム代表挨拶と会社概要のご案内 — representative greeting (founded 7 years ago; Australian-born founder; overseas and Japanese perspectives).
  - Our story / 別府ホーム ストーリー
  - スタッフ紹介 — staff/representative photos (`company_img_5`, `company_img_6`) [verify consent]
  - 会社概要 — company table (see §1)
  - 別府ホームが「選ばれている理由」 — three points (POINT2/3 images)
  - Map embed (Google Maps)
  - プライバシーポリシー (privacy policy; 9 numbered clauses: scope of data, purposes, third-party provision, management, disclosure/correction/deletion request, policy changes, disclaimer, contact) [verify legal]
  - 利用規約 (terms of use; 6+ clauses) [verify legal]
- Note: the terms and privacy policy contain legal wording that should be reviewed by a professional before reuse.

### 4.9 `/contact/` — 無料査定依頼・お問い合わせ (Free assessment and contact)
- H1: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「無料査定依頼・お問い合わせ」のページです。
- Sections:
  - お電話での無料査定依頼・お問い合わせ (phone: 0977-75-8528)
  - LINEなら「すぐ」「簡単に」査定ができます！ (LINE QR/link)
  - ZOOMでオンライン相談・査定依頼 (Zoom: "パソコンでもスマホでも！ 遠方でも！")
  - 24時間365日受付中！ メールで無料査定依頼・お問い合わせ (email form)
- Form: see §7.

---

## 5. Property listings

### 5.1 `/property/` — 物件情報一覧 (Property list)
- H1 text: 大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の「物件情報」のページです。 (title: 物件情報一覧)
- Contains **one** listing: 各戸温泉付きリノベーションマンション (`post-13`).
- Listing shows: title, thumbnail, and a short description. No date and no price were visible in the extracted text [verify].
- Note: the listing contains one property only. [verify] whether the list is intentionally limited to one property.

### 5.2 `/property/cate_1/` — 物件情報 (Property category 1)
- Same single listing as `/property/`. Same H1 pattern. Not in the menu; a category-only URL.

### 5.3 `/property/post-13/` — 各戸温泉付きリノベーションマンション (Property detail)
- Headline: 各戸温泉付きリノベーションマンション
- Summary: 別府市荘園 4LDK, リノベーション売戸建 (renovated for sale). [verify] property type (text says both マンション and 戸建).
- Sub-headline: 別府駅徒歩350m！戸別温泉つき！1LDK売マンション (sales copy inconsistent with 4LDK — **[verify] which unit this is**).
- Links: 動画内覧 (video tour) link, Matterport 3D tour embed, Gallery, Floor plan (間取り), Case of renovation (リノベーション物件事例).
- POINT01 — 別府駅まで徒歩3分の好立地; amenities within 5 minutes walking.
- POINT02 — 源泉かけ流し温泉を自宅で満喫. Hot-spring well rights and monthly fee claims: 鉱泉地所有権・採取権・名義変更料 ¥0 (included in price); no monthly usage fee; comparables 鉱泉地・採取権80〜150万円, 月額使用料8000〜12000円 [verify].
- POINT03 — リノベーション完成済みだから今すぐ快適新生活スタート (renovation completed; new floors, cloth, doors, plumbing; south balcony; 4 windows).
- Viewing: 物件のお問合せ・現地見学ご予約先 0977-75-8528; individual reservation viewing due to COVID-19; ventilation and disinfection notices. [verify] current COVID-19 viewing policy is outdated.
- Price, address (precise), building name, and area: **not present in the page text**. Only "別府市荘園" is given. [verify] owner to supply property data.
- Images (property files under `/property/_data/`, 17 in total): 12 "Gallery" photos (`13_1_1` to `13_1_12`), 3 POINT01 images (`13_1_45`, `13_1_47`, `13_1_49`), 1 listing photo with the alt text 別府市荘園 売り戸建 4LDK (`13_1_54.jpeg`), and 1 listing thumbnail (`13_1_39.jpg`). Which file is the floor plan (間取り) was not identified.

---

## 6. News and transaction posts (`/column/`)

Listing: 35 posts, 2 pages (`/column/` lists 21 posts, `/column/?p=2` lists 14). `?p=3` is empty. Dates shown are the listing dates; the posts themselves carry no separate date in the body.

| # | Date (listing) | Post title (as published) | Type | In sitemap | URL |
|---|---|---|---|---|---|
| 35 | 2022/01/26 | 別府市小倉土地建物　買取依頼をいただきました！ | Case | No | `/column/post-35/` |
| 34 | 2022/01/11 | 大分市滝尾　マンション１棟　買取依頼をいただきました！ | Case | No | `/column/post-34/` |
| 33 | 2011/12/14 [verify: likely 2021] | 宇佐市　土地建物　売却相談をいただきました！ | Case | No | `/column/post-33/` |
| 32 | 2011/11/05 [verify: likely 2021] | 大分県日田市　土地の買取相談をいただきました！ | Case | No | `/column/post-32/` |
| 31 | 2021/10/10 | 別府市天満町　土地建物　買取依頼をいただきました！ | Case | No | `/column/post-31/` |
| 30 | 2021/10/12 | 別府市大観山土地　買取させていただきました！ | Case | No | `/column/post-30/` |
| 29 | 2021/09/02 | 大分市アパート２棟　買取依頼をいただきました！ | Case | No | `/column/post-29/` |
| 28 | 2021/09/01 | 大分県久住　土地の買取依頼をいただきました！ | Case | No | `/column/post-28/` |
| 27 | 2021/08/23 | 別府市大観山土地　買取依頼をいただきました！ | Case | No | `/column/post-27/` |
| 26 | 2021/09/01 | 大分市八幡　土地の買取依頼をいただきました！ | Case | No | `/column/post-26/` |
| 25 | 2021/03/15 | 別府市田の湯町マンション　買取させていただきました！ | Case | No | `/column/post-25/` |
| 24 | 2021/02/18 | 別府市小倉土地　買取依頼をいただきました！ | Case | No | `/column/post-24/` |
| 23 | 2021/01/12 | 別府市田の湯町マンション買取相談をいただきました！ | Case | No | `/column/post-23/` |
| 22 | 2021/08/25 | 日の出る町　大分県速見郡日出町の不動産が魅力！ | Area guide | No | `/column/post-22/` |
| 21 | 2021/08/18 | 日出町・中古戸建　買取査定のご依頼をいただきました！ | Case | No | `/column/post-21/` |
| 20 | 2021/07/01 | 別府市アパート　買取させていただきました！ | Case | No | `/column/post-20/` |
| 19 | 2021/07/15 | 別府市石垣東　土地・建物　買取依頼をいただきました！ | Case | No | `/column/post-19/` |
| 18 | 2021/06/15 | 大分市賀来一棟マンション　買取相談をいただきました！ | Case | No | `/column/post-18/` |
| 17 | 2021/06/30 | 大分市相続物件の売却相談をいただきました | Case | No | `/column/post-17/` |
| 16 | 2021/05/10 | 別府市駅前　土地・建物　買取依頼をいただきました！ | Case | No | `/column/post-16/` |
| 15 | 2021/04/26 | 大分で頑張る女性達にエールを！ | Feature/news | Yes | `/column/post-15/` |
| 14 | 2020/12/21 | 日出町・中古戸建　買取査定のご依頼をいただきました！ | Case | Yes | `/column/post-14/` |
| 13 | 2020/12/15 | 別府市亀川・中古戸建　売却査定のご依頼をいただきました！ | Case | Yes | `/column/post-13/` |
| 12 | 2021/02/09 | 別府市南立石・マンション　買取依頼をいただきました！ | Case | Yes | `/column/post-12/` |
| 11 | 2021/02/17 | 別府の未来を創造する[B-biz LINK]の起業家特集で取材を受けました！ | Press | Yes | `/column/post-11/` |
| 10 | 2021/02/15 | 首都圏から別府・大分への移住相談が増えてきました！ | Column | Yes | `/column/post-10/` |
| 9 | 2021/01/18 | ２０２１年（令和３年）住宅ローン減税 | Column | Yes | `/column/post-9/` |
| 8 | 2020/11/28 | 佐伯市木立・住宅用地のお引渡しが完了いたしました！ | Case | Yes | `/column/post-8/` |
| 7 | 2020/11/30 | 別府市大観山・中古戸建　お引渡しが完了いたしました！ | Case | Yes | `/column/post-7/` |
| 6 | 2021/02/01 | １２４年ぶり！今年の節分は２月２日。家に福を招くsimple開運術！ | Column | Yes | `/column/post-6/` |
| 5 | 2021/01/14 | 別府市荘園町売戸建て　4LDK モダン✖️無垢材リノベーション　温泉付き♨️ | Property | Yes | `/column/post-5/` |
| 4 | 2021/01/07 | 2021年　本年もどうぞよろしくお願い申し上げます | News | Yes | `/column/post-4/` |
| 3 | 2020/08/26 | 物件売却のご依頼をいただきました！（別府市・戸建） | Case | Yes | `/column/post-3/` |
| 2 | 2020/08/18 | ホームページリニューアルしました！ | News | Yes | `/column/post-2/` |
| 1 | 2020/08/06 | 新型コロナウイルス感染予防への当社の取り組みについて | Notice (COVID-19) | Yes | `/column/post-1/` |

Note on "Case" posts: they name specific localities and building names and, in some cases, use a building name plus a unit count. Customer privacy review is needed before republishing [verify]. Dates are listing dates; the sitemap `lastmod` values (2021–2022) are not the publication dates.

Post body structure (common to all): title; date (listing); body text (short, 350–1,000 characters); 4–5 photos (theme images, `/images/` and `/column/_data/`); prev/next navigation (`<<前の記事` / `次の記事>>`).

---

## 7. Contact form (`/contact/`)

- Method: POST to `index.cgi?mode=confirm` (a two-step confirm flow). **Not submitted.**
- Form name/labels as observed (field names are obfuscated in the HTML, so only labels are recorded):

| Label (as published) | Input type | Required (marked ※) |
|---|---|---|
| 用件区分 | checkbox group | ※ (6 options: 売却に関して相談したい; 買取相談; 相続相談; 投資用不動産について相談したい; 空き家・土地相談; その他 (free text)) |
| お名前 | text | ※ |
| フリガナ | text | |
| 郵便番号 | text (half-width digits) | |
| 都道府県 | select (47 prefectures, default 【選択して下さい】) | |
| 市区町村以下 | text | (※) |
| マンション名など | text | |
| 電話番号 | text | |
| 連絡希望時間 | text or select (not verified) | optional |
| メールアドレス | text (half-width) | ※ |
| メールアドレス（確認） | text (re-enter) | ※ |
| ご希望の連絡方法 | radio: メール / お電話 / ZOOM | ※ |
| お問い合わせ内容 | textarea | |
| 送信 | submit | |

- Privacy notice: a link/section on `/company/`. [verify] consent wording on the form itself and whether a privacy checkbox exists (none observed on the form).
- Personal data is collected by this form. Any rebuilt form must be reviewed with the owner before launch.

---

## 8. Structured data and metadata (observed)

- Title pattern: `{page title}｜大分市・別府市の不動産買取・任意売却なら「株式会社別府ホーム」`.
- Meta description: present on all pages, in Japanese. No `og:` tags, no canonical tag, no `hreflang`.
- JSON-LD:
  - LocalBusiness (homepage) with PostalAddress and OpeningHoursSpecification [verify values].
  - BreadcrumbList (51 pages).
  - HowTo + HowToStep (5) and FAQPage + Question/Answer (5) on `/buy/flow.html`.
- Analytics: Google Tag Manager `GTM-N8JRLZX` (iframe and script) and Universal Analytics `UA-145228358-9` on every page.

---

## 9. Copy issues observed (for owner review; not corrected)

These are visible in the published Japanese text. They are noted, not changed.

- `自社簡潔で処理` on `/buy/inheritance.html` is probably 自社完結 (in-house completion). [verify]
- `良いのもはいい、悪いものは悪い` on the homepage — the first part reads oddly (likely 良いものは良い). [verify]
- `どうしていいか分からなかい` on `/company/` — likely 分からなかった. [verify]
- `物件を生まれ変わらすことができます` on `/company/` — likely 生まれ変わらせる. [verify]
- `Copyright c 株式会社別府ホーム` — © symbol missing in footer.
- Contact page says 24時間365日受付中 for email; homepage and `/buy/` say replies can take days (response delay notice). [verify]
- `お客様の想いをカタチに。」` (visual banner) — stray closing quote in the alt text.
- Property page has conflicting property descriptions (4LDK 戸建 vs 1LDK マンション). [verify]
- Date typos in the news list (2011 for posts 32 and 33). [verify]

---

## 10. Content gaps (not on the site)

- **English content**: none. The site is Japanese only.
- **Prices**: no price for the single property listed, and no price ranges for services.
- **Team**: 2 staff (per the company table). Two people photos are on `/company/`, with alt text naming the representative and one other person. No staff bios beyond the representative.
- **Testimonials/reviews**: none observed.
- **Office photos**: none observed (only the map).
- **Legal pages**: privacy policy and terms are present on `/company/` only. No 特定商取引法 page observed.
- **Accessibility statement**: none observed.
- **Sitemap entries missing** for posts 16–35, `/contact/`, and pagination.
- **Property inventory**: only one property is listed; the site's own news posts mention many other transactions, but none are listed as properties.
