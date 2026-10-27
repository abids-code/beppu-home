import type { ImageMetadata } from 'astro';
import type { GalleryItem } from '../components/Gallery.astro';
import { pick, type Locale } from '../lib/i18n';
import img13_3 from '../assets/photos/13_1_3.jpg';
import img13_6 from '../assets/photos/13_1_6.jpg';
import img13_7 from '../assets/photos/13_1_7.jpg';
import img13_8 from '../assets/photos/13_1_8.jpg';
import consultPhoto from '../assets/photos/index_img_01.jpg';
import imgInheritanceHero from '../assets/photos/company_slide2_8.jpg';
import imgStagingHero from '../assets/photos/company_slide2_1.jpg';
import imgScales from '../assets/photos/buy_illust_1.png';
import imgChart from '../assets/photos/company_img_10.jpg';
import imgPanorama from '../assets/photos/top-banner-bg-1.jpg';
import imgGarden1 from '../assets/photos/company_slide2_7.jpg';
import imgGarden2 from '../assets/photos/company_slide2_9.jpg';
import imgLandDemo from '../assets/photos/performance_slide5_img1.jpg';
import imgLandVacant from '../assets/photos/performance_slide5_img5.jpg';
import imgSpring from '../assets/photos/spring.jpg';
import imgSummer from '../assets/photos/summer.jpg';
import imgAutumn from '../assets/photos/autumn.jpg';
import stg2_2 from '../assets/photos/company_slide2_2.jpg';
import stg2_3 from '../assets/photos/company_slide2_3.jpg';
import stg2_4 from '../assets/photos/company_slide2_4.jpg';
import stg2_5 from '../assets/photos/company_slide2_5.jpg';
import stg2_6 from '../assets/photos/company_slide2_6.jpg';
import stg3_3 from '../assets/photos/company_slide3_3.jpg';
import stg3_6 from '../assets/photos/company_slide3_6.jpg';
import stg3_7 from '../assets/photos/company_slide3_7.jpg';
import stg3_8 from '../assets/photos/company_slide3_8.jpg';
import stg3_9 from '../assets/photos/company_slide3_9.jpg';
import stg5_1 from '../assets/photos/company_slide5_1.jpg';
import stg5_2 from '../assets/photos/company_slide5_2.jpg';
import stg5_5 from '../assets/photos/company_slide5_5.jpg';
import stg5_6 from '../assets/photos/company_slide5_6.jpg';
import stg5_7 from '../assets/photos/company_slide5_7.jpg';
import stg5_8 from '../assets/photos/company_slide5_8.jpg';
import stg5_9 from '../assets/photos/company_slide5_9.jpg';
import stg5_11 from '../assets/photos/company_slide5_11.jpg';
import x3_1 from '../assets/photos/company_slide3_1.jpg';
import x3_2 from '../assets/photos/company_slide3_2.jpg';
import x3_4 from '../assets/photos/company_slide3_4.jpg';
import x3_5 from '../assets/photos/company_slide3_5.jpg';
import x5_3 from '../assets/photos/company_slide5_3.jpg';
import x5_4 from '../assets/photos/company_slide5_4.jpg';
import x5_10 from '../assets/photos/company_slide5_10.jpg';
import x5_12 from '../assets/photos/company_slide5_12.jpg';
import xs4 from '../assets/photos/company_slide_4.jpg';
import stagingPhoto from '../assets/photos/company_slide_1.jpg';

// Service page copy. Japanese follows the published site; English is a translation.
// Claims that the owner has not yet confirmed are listed in docs/owner-verification.md.

export interface Figure {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Section {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
  timeline?: { period: string; status: string }[];
  note?: string;
  figure?: Figure;
}

export interface Service {
  eyebrow: string;
  h1: string;
  lede: string;
  hero: ImageMetadata;
  heroAlt: string;
  sections: Section[];
  gallery?: { label: string; items: GalleryItem[] };
}

type Bilingual<T> = { ja: T; en: T };

const sell: Bilingual<Service> = {
  ja: {
    eyebrow: '不動産を売りたい方へ',
    h1: '不動産を売りたい方へ。買取で、すぐに現金化。',
    lede: '「不動産をすぐに現金化したい！」という方は、ぜひ当社までお気軽にご相談ください。',
    hero: img13_3,
    heroAlt: '別府市内の住戸の室内。リビングと窓',
    sections: [
      {
        heading: '不動産買取＝すぐに現金化',
        figure: { src: imgScales, alt: '買取と仲介売却の違いを、時間と心労で比べた図', caption: '時間も精神的な心労もかからずに売却できる、という当社の説明を図にしたもの' },
        paragraphs: [
          '「不動産買取」は不動産会社が売主様から物件を直接買い取る方法ですので、一般の方の中から買い手が見つかるまで待つといった必要はありません。',
          '例えば、急に転勤が決まったのですぐに家を売りたい方、新居が決まったので早く家を売りたい方、離婚するため家の売却を検討している方、隣近所に知られることなく家を売却したい方など、スピーディーに不動産を売却したい方に選ばれています。',
        ],
      },
      {
        heading: '買取と仲介売却の違い',
        paragraphs: [
          '「不動産買取」と「仲介売却」で算出された査定額には差が生じます。事前リフォームの費用や仲介手数料、実際の売却価格と入金のタイミングを合わせて比較することが大切です。',
        ],
        table: {
          head: ['項目', '不動産買取', '仲介売却'],
          rows: [
            ['仕組み', '不動産会社が売主様から物件を直接買い取る', '売主様から依頼を受けた不動産会社が買主様を探し、交渉・売買契約を行う'],
            ['仲介手数料', '不要', '価格の3％＋6万円（税別）'],
            ['価格', '買取後のイメージを持って買い取り、海外投資家向けにも展開するため高値傾向', '査定価格と売却価格が異なる場合がある'],
            ['期間', '最短2営業日で買取価格の提案・査定が可能', '不明（一般的に半年〜1年程度）'],
            ['瑕疵担保責任', 'なし', 'あり（引き渡し後、白紙解約あり）'],
            ['事前のリフォーム', '不要', '状況に応じて必要'],
            ['営業電話', 'なし', '複数から殺到し、対応が必要'],
            ['内覧対応', '不動産会社1回のみ', '買主様が決まるまで都度対応'],
            ['プライバシー', '誰にも知られず売却可能', '広告により隣近所の方に知られることが多い'],
          ],
        },
        note: '※ 表は横にスクロールしてご覧いただけます。価格の比較は物件ごとに異なります。',
      },
      {
        heading: '当社にご依頼いただく「大きな」メリット',
        paragraphs: [
          '別府ホームでは、不動産売却後のイメージを持った状態でお客様の不動産の査定を行うため、決断が早いのが強みです。',
          '当社はオーストラリア人と日本人とで経営しているため、海外投資家向けの物件など、他社にはない欧米諸国の不動産業界視点での買取が可能です。日本人の女性スタッフならではの、きめ細かい視点でのサービスも自慢です。',
          '離婚やリストラなどプライバシーに関する情報もしっかりとお守りしながらお取引を進めてまいりますので、ご事情をお持ちであっても安心してご依頼ください。',
        ],
        figure: {
          src: consultPhoto,
          alt: '当社スタッフがお客様とテーブルで打ち合わせをしている様子',
          caption: '打ち合わせの様子（内装材のサンプルを前に）',
        },
      },
      {
        heading: '相続・空き家もスピード対応',
        paragraphs: [
          '「親が介護施設に入っていて、実家が空き家になっている」「相続したものの、自身が住む予定はない」などといった事情で、空き家や空き地をそのままにしていませんか？ この状態では無駄に税金を支払い続けたり、建物の劣化が進み価値が下がってしまうことがあります。',
          '当社ではこうしたリスクをできるだけ早急に解決するため、空き家・空き地といった案件にはスピード対応させていただいております。県外に住んでいて活用予定がない空き家や空き地を即現金化したいお客様は、お気軽にご相談ください。',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Selling your property',
    h1: 'Selling your property: quick cash through a purchase',
    lede: 'If you want to turn your property into cash quickly, please get in touch with us.',
    hero: img13_3,
    heroAlt: 'Interior of a home in Beppu, with a living room and window',
    sections: [
      {
        heading: 'A purchase means cash quickly',
        figure: { src: imgScales, alt: 'An illustration comparing the time and stress of a sale', caption: 'An illustration of our explanation that a sale can be made without spending much time or worry' },
        paragraphs: [
          'With a property purchase, the property company buys the home directly from you, so you do not have to wait until a buyer is found from the general public.',
          'Clients choose this route when they need to sell quickly: for example, a sudden job transfer, a new home that has already been chosen, a divorce that requires a sale, or a wish to sell without neighbours finding out.',
        ],
      },
      {
        heading: 'Purchase compared with a brokered sale',
        paragraphs: [
          'The valuations for a purchase and for a brokered sale can differ. It helps to compare the cost of any pre-sale renovation, the agent fee, the actual sale price and when the money arrives.',
        ],
        table: {
          head: ['Item', 'Property purchase', 'Brokered sale'],
          rows: [
            ['How it works', 'The property company buys the property directly from you', 'An agent you instruct looks for a buyer and handles negotiation and the sales contract'],
            ['Agent fee', 'None', '3% of the price plus ¥60,000 (excluding tax)'],
            ['Price', 'Bought with a view to the finished property; also marketed to overseas investors, so prices tend to be higher', 'The sale price can differ from the valuation'],
            ['Timing', 'A purchase price proposal or valuation within 2 business days at the earliest', 'Not fixed (generally about six months to a year)'],
            ['Defect liability', 'None', 'Yes (with cancellation possible after handover)'],
            ['Pre-sale renovation', 'Not required', 'May be required depending on the property'],
            ['Sales calls', 'None', 'Many calls from several companies may need handling'],
            ['Viewings', 'Only one visit by the property company', 'Repeated viewings as needed until a buyer is found'],
            ['Privacy', 'Can be sold without anyone knowing', 'Advertising often makes neighbours aware'],
          ],
        },
        note: 'The table scrolls sideways on small screens. Price comparisons vary from property to property.',
      },
      {
        heading: 'Why clients choose us',
        paragraphs: [
          'Because we value the property with the sale in mind, we can decide quickly. That speed is one of our strengths.',
          'Our company is run by an Australian and a Japanese partner. That means we can buy with the view of the Western property market in mind, including properties of interest to overseas investors. Our Japanese female staff member also gives attentive service from a perspective that many clients value.',
          'We protect personal circumstances, such as divorce or redundancy, with care throughout the transaction, so please feel free to contact us whatever your situation.',
        ],
        figure: {
          src: consultPhoto,
          alt: 'A member of our staff in a discussion with a client across a table',
          caption: 'A consultation, with interior material samples on the table',
        },
      },
      {
        heading: 'Inherited property and vacant homes, handled quickly',
        paragraphs: [
          'Is a family home left empty because a parent has moved into care, or because an inherited home is not needed? Empty homes and land can keep costing tax while the building deteriorates and its value falls.',
          'We move quickly on vacant houses and land so these risks are resolved as early as possible. If you live outside the prefecture and have no plans for the property, and want it converted to cash quickly, please get in touch.',
        ],
      },
    ],
  },
};

const inheritance: Bilingual<Service> = {
  ja: {
    eyebrow: '相続物件・空家でお悩みの方へ',
    h1: '相続した空き家を保有～そのままでは損！～',
    lede: '相続などで引き取った空き物件を持て余し、そのまま放置してしまっていませんか？ 空き家を放置することで起こるデメリットと、当社がお手伝いできる内容をご案内します。',
    hero: imgInheritanceHero,
    heroAlt: '庭に松のある和風の住宅の玄関まわり',
    gallery: {
      label: '庭のある住宅と、解体から更地へ（事例）',
      items: [
        { src: imgGarden1, alt: '庭に松のある和風の住宅', ratio: '4/3' },
        { src: imgGarden2, alt: '砂利敷きの庭と石', ratio: '4/3' },
        { src: imgLandDemo, alt: '解体前の中古戸建て（事例）', caption: '事例の解体前', ratio: '4/3' },
        { src: imgLandVacant, alt: '解体後の更地（事例）', caption: '事例の更地', ratio: '4/3' },
      ],
    },
    sections: [
      {
        heading: '空き家・相続に関する様々なお悩み',
        bullets: [
          '「実家を相続したけど住む予定がない」',
          '「空き家の手入れがなかなかできず、どうしたら良いのかわからない」',
          '「空き家に放火されないか心配」',
          '「思い入れも強いので、住んで居ないけど売りたくない」',
          '「仕事が忙しくて、物件の売却になかなか踏み切れない」',
          '「県外にある実家が空き家になったが、なかなか様子を見に行くことができない」',
        ],
        paragraphs: [
          '人の住まない建物は、劣化も早いものです。そのままにしていると、倒壊・破損する危険性があります。また、空き家へ放火される件数も多く、思わぬところで事件に発展することも考えられます。',
          '不法侵入されて犯罪の温床になったり、不法投棄されたりなど、知らないうちに犯罪に巻き込まれてしまうおそれもあります。何か起きてからでは遅いため、ご相談には早急に対応させていただきます。',
        ],
      },
      {
        heading: 'そのままでは「損」をし続けるだけです',
        figure: { src: imgChart, alt: '空き家の資産価値が年々下がり、資産の価値が下がっていく様子を示すグラフ', caption: '空き家の資産価値（イメージ図）' },
        paragraphs: [
          '管理が行き届かない空き家は廃墟と化し、倒壊や崩壊の危険性が高まります。適切な管理のされていない空き家は「特定空き家」と認定され、より高い固定資産税を課される場合があります。',
          'そのまま放置し続けると行政から撤去を命じられ、取り壊し費用が請求されることがあります。さらに更地にした後には、住居が建っていた頃と比べて固定資産税が高くなる場合があるとされています。',
        ],
        note: '※ 税制・法令に関する上記の記述は、専門家による確認を予定しています。確認が済むまで、内容は暫定です。',
      },
      {
        heading: '当社なら、「損をしないための」解決が可能',
        paragraphs: [
          '買取を断られる理由として多いのが、「空き家の中にゴミが残っている」など、片付けが難しい状況で、多額の処分費用が必要になるケースです。当社は、こうした問題を自社で完結して処理するため、諦めかけていた空き家・相続物件の買取にも積極的に取り組んでいます。',
          '長年放置した空き家や空き地は、維持費や売却にかかる費用が年々上がります。不動産の清掃・動産の片付け・処分・手続・書類の対応などをまとめて当社にお任せいただけます。',
        ],
        figure: {
          src: img13_6,
          alt: '別府市の住戸の室内。ダイニングとキッチンが見える',
        },
      },
      {
        heading: '移動などのお客様負担は限りなくゼロに',
        paragraphs: [
          '現在県外にお住まいの方で、仕事や家庭の事情で現地まで足を運ぶことが難しいという方もいらっしゃると思います。当社では、売主様は「何もしなくても」売却が可能です。不動産の査定から片付けまで、当社が対応いたします。',
          '現地へ来ることが難しい場合、また当社へのご来社が難しい場合でも、ご足労いただく必要はございません。別府での不動産売却のすべては、当社へお任せください。',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Inherited property and vacant homes',
    h1: 'An inherited vacant home: leaving it as it is costs you',
    lede: 'Is an inherited property sitting unused because it is too much to manage? Here is what can go wrong if an empty home is left as it is, and how we can help.',
    hero: imgInheritanceHero,
    heroAlt: 'Entrance of a Japanese-style house with a pine tree in the garden',
    gallery: {
      label: 'A garden house, and from demolition to bare land (case examples)',
      items: [
        { src: imgGarden1, alt: 'Japanese-style house with a pine tree in the garden', ratio: '4/3' },
        { src: imgGarden2, alt: 'Gravel garden with stones', ratio: '4/3' },
        { src: imgLandDemo, alt: 'A used house before demolition (case example)', caption: 'Case: before demolition', ratio: '4/3' },
        { src: imgLandVacant, alt: 'Bare land after demolition (case example)', caption: 'Case: bare land', ratio: '4/3' },
      ],
    },
    sections: [
      {
        heading: 'Common worries about inheritance and empty homes',
        bullets: [
          '"I inherited my parents\' home but have no plans to live in it."',
          '"I cannot keep up with upkeep and I do not know what to do."',
          '"I am worried the empty house will be set on fire."',
          '"I am attached to it, so I do not want to sell, even though nobody lives there."',
          '"I am too busy to make a decision about selling."',
          '"My family home is outside the prefecture and I cannot easily check on it."',
        ],
        paragraphs: [
          'A house that nobody lives in deteriorates quickly. If it is left, there is a risk that it will collapse or be damaged. Empty houses are also often targeted for arson, which can turn into an incident you did not expect.',
          'An empty property can become a haven for crime, or be used for illegal dumping, drawing its owner into trouble without them knowing. Things can get out of hand before you notice, so we respond to enquiries quickly.',
        ],
      },
      {
        heading: 'If nothing is done, the cost keeps rising',
        figure: { src: imgChart, alt: 'A chart showing the value of a vacant house falling over the years', caption: 'Value of a vacant home (illustration)' },
        paragraphs: [
          'An unmanaged empty house becomes derelict, and the risk of collapse rises. Under the law, a vacant house that is not properly maintained can be designated a "specified vacant house", which may attract a higher property tax.',
          'If it is left for too long, the authorities can order its removal, and the demolition cost can be charged to the owner. Once it is demolished, the land can also attract a higher fixed-asset tax than when a house stood on it.',
        ],
        note: 'The tax and legal statements above are provisional and will be checked by a professional.',
      },
      {
        heading: 'A solution that avoids this cost',
        paragraphs: [
          'A common reason for a purchase being refused is a home with rubbish left inside, where clearing is hard and disposal costs are high. We handle these problems in-house, so we actively take on inherited homes and vacant properties that other companies have turned down.',
          'Vacant homes and land that have been neglected for years cost more to maintain and to sell each year. You can leave the whole job to us: cleaning, clearing belongings, disposal, and the paperwork.',
        ],
        figure: {
          src: img13_6,
          alt: 'Interior of a home in Beppu with dining and kitchen visible',
        },
      },
      {
        heading: 'Keeping the cost of travel close to zero',
        paragraphs: [
          'If you live outside the prefecture and cannot easily come to the property because of work or family, you do not need to do anything. We take care of the valuation, the clearing and the sale.',
          'If you cannot visit the property or our office, you do not need to come in. Everything involved in selling property in Beppu can be left to us.',
        ],
      },
    ],
  },
};

const loan: Bilingual<Service> = {
  ja: {
    eyebrow: 'ローンの返済ができない方へ',
    h1: 'ローンの返済ができずに困っている方へ～任意売却～',
    lede: '住宅ローンの返済が難しくなったときは、競売になる前に「任意売却」を検討できます。早期に適切な情報を得ることが一番大切です。',
    hero: img13_7,
    heroAlt: '別府市の住戸の室内。窓から光が入るリビング',
    sections: [
      {
        heading: '住宅ローンに関してお困りの方へ',
        bullets: [
          'リストラやボーナスカットで返済が厳しくなってきた',
          '離婚をして収入が減り、ローンの返済が難しくなってきた',
          'ローンを滞納してしまい、催促状が届いた',
          '裁判所から競売開始の通知が届いた',
          '不動産が差し押さえされてしまった',
          '事故物件を購入したが、返済ができなくなった',
          '競売だけは避けて売却したい',
        ],
        paragraphs: [
          '不測の事態で住宅ローンの支払いが難しくなり、実際に不動産を手放さなければならないケースに発展することは珍しくありません。こうなる前に、「任意売却」という売却方法をご検討いただくことをご提案しています。',
        ],
      },
      {
        heading: '任意売却で「今後の費用」を確保',
        paragraphs: [
          '住宅ローンは、購入した不動産を担保にして金融機関からお金を借りる仕組みです。返済が滞れば、金融機関は抵当権に基づいて不動産を競売にかけることができます。',
          '競売にかけられると、市場価格よりも3～5割ほど安い価格で取引され、最終的には立ち退きが求められることがあります。一方、任意売却であれば、不動産売却と変わらない相場に近い価格での売却を目指せます。',
          '任意売却を行うことによって、債権者との交渉次第では、引越し費用や生活費など、不動産の売却後に必要となる費用の見通しを立てることも可能です。',
        ],
        note: '※ 任意売却の法的な手続きや、債権者との交渉の内容については、専門家にご相談ください。',
      },
      {
        heading: '「任意売却」は売却可能な期間がある',
        paragraphs: [
          '競売が始まると任意売却ができなくなり、最終的に家を手放して立ち退きが必要になります。この事態を避けるため、任意売却には期間があることを知っておいてください。',
        ],
        timeline: [
          { period: '住宅ローンの返済で家計が苦しい', status: '月々の返済はなんとか続けている状態' },
          { period: '3ヶ月まで', status: '金融機関から催促が届く' },
          { period: '4ヶ月まで', status: '競売の開催通知が届く（催促や催告を無視し続けると、金融機関は支払いの意思がないとみなし、競売の手続きを開始します）' },
          { period: '5ヶ月以上', status: '裁判所の執行官による調査（土地と建物の競売に掛ける直前）' },
          { period: '競売のスタート', status: '任意売却が不可能になるライン' },
        ],
        note: '※ 期間の目安は、個別の状況や金融機関により異なります。',
      },
      {
        heading: '主なご相談事例',
        paragraphs: [
          '【事例1】ボーナスカットにより収入が減り、子育ての費用が増していく中で返済に困っていたご家族。ご家族を大切に考えられ、「返済」という重荷から解放されたいという思いが強かったため、当社での現金買取をご提案しました。抵当権者の金融機関とのお話もスムーズに進み、ご家族で新しい人生をスタートされました。',
          '【事例2】自営業で飲食店を営むご夫婦。収入が減る中で、店舗の賃料と住宅ローンの返済が重なっていました。店舗付き住宅への買い換えをご提案し、市内にあった2階建て住居は当社で買取をさせていただきました。',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Loan repayment difficulties',
    h1: 'If you are struggling with loan repayments: voluntary sale',
    lede: 'If mortgage repayments have become difficult, a voluntary sale can be considered before an auction is started. Getting accurate information early matters most.',
    hero: img13_7,
    heroAlt: 'Interior of a home in Beppu, with a living room in daylight from the window',
    sections: [
      {
        heading: 'If you are struggling with a housing loan',
        bullets: [
          'Redundancy or a cut in bonuses has made repayments hard.',
          'Divorce has reduced your income and repayments are hard to keep up with.',
          'You have fallen behind and a reminder letter has arrived.',
          'A court notice of the start of an auction has arrived.',
          'The property has been seized.',
          'You bought a property with a problem and cannot keep up repayments.',
          'You want to sell and avoid an auction.',
        ],
        paragraphs: [
          'It is not unusual for an unexpected event to make mortgage payments hard, and to lead to having to give up the property. Before it reaches that point, we suggest considering a "voluntary sale".',
        ],
      },
      {
        heading: 'A voluntary sale can secure money for the next steps',
        paragraphs: [
          'A housing loan is a loan from a lender, secured on the property you buy. If repayments fall behind, the lender can use its mortgage rights to put the property up for auction.',
          'At auction, a property is sold for about 30 to 50 percent below market value, and occupants may be required to leave. A voluntary sale, by contrast, aims for a price close to the market rate, as with any ordinary sale.',
          'Depending on negotiations with the lender, a voluntary sale can also help you plan for costs after the sale, such as moving and living expenses.',
        ],
        note: 'The legal procedure for a voluntary sale and the terms negotiated with the lender should be discussed with a specialist.',
      },
      {
        heading: 'A voluntary sale is possible only for a limited time',
        paragraphs: [
          'Once an auction starts, a voluntary sale is no longer possible, and the home must eventually be given up and vacated. To avoid that, it helps to know that a voluntary sale has a time window.',
        ],
        timeline: [
          { period: 'Household budget under strain', status: 'Repayments are still being made, just about' },
          { period: 'Up to 3 months behind', status: 'Reminder letters arrive from the lender' },
          { period: 'Up to 4 months behind', status: 'Notice of an auction arrives. If reminders are ignored, the lender treats this as unwillingness to pay and begins auction proceedings' },
          { period: '5 months or more', status: 'Court bailiff survey, just before the land and building are put up for auction' },
          { period: 'Auction begins', status: 'The point at which a voluntary sale is no longer possible' },
        ],
        note: 'These timings are a guide only and depend on the individual case and lender.',
      },
      {
        heading: 'Examples of past enquiries',
        paragraphs: [
          'Case 1: Bonuses were cut and household costs for children rose. The family wanted to be free of the burden of repayments, so we proposed a cash purchase. Talks with the lender went smoothly, and the family started a new life.',
          'Case 2: A couple running a food business had rent for the shop and the mortgage payments due at once as their income fell. We proposed moving to a home with a shop, and bought the two-storey home in the city.',
        ],
      },
    ],
  },
};

const investment: Bilingual<Service> = {
  ja: {
    eyebrow: '投資・別荘をご検討の方へ',
    h1: '別府で投資向け物件や別荘を～温泉のある憧れの暮らし～',
    lede: '日本は今、都心部から地方都市への投資が人気を集めています。特に別府のように外国人観光客にも人気の観光地は、これから更に魅力的なエリアになっていくでしょう。別府のリアルな今をご紹介します。',
    hero: img13_8,
    heroAlt: '別府市内の住戸の室内。明るいリビング',
    gallery: {
      label: '四季のイメージ',
      items: [
        { src: imgSpring, alt: '桜の花が咲く枝と青い空', caption: '春のイメージ', ratio: '4/3' },
        { src: imgSummer, alt: '緑の山の麓にある温泉の池', caption: '夏のイメージ', ratio: '4/3' },
        { src: imgAutumn, alt: '紅葉と白い花が咲く木', caption: '秋のイメージ', ratio: '4/3' },
      ],
    },
    sections: [
      {
        heading: '日本の不動産市場は、投資に向いている',
        figure: { src: imgPanorama, alt: '別府湾と市街を望む眺め', caption: '別府湾と市街を望む眺め（イメージ）' },
        paragraphs: [
          '国土交通省が実施した「平成30年度 海外投資家アンケート調査」では、海外投資家の76.3％が「日本の不動産規模は優れている」と評価しています。',
          'ここ1、2年を見れば円高方向に動いているものの、まだまだ円安な状況が続いていることも、海外投資家の皆様が日本・別府に魅力を感じているポイントです。',
        ],
        note: '※ 上記の調査結果は、出典を確認中です。',
      },
      {
        heading: '「別府市」という観光地としての市場価値',
        paragraphs: [
          '別府は温泉で知られる観光地で、外国人観光客にも人気があります。',
        ],
      },
      {
        heading: 'オーストラリア出身の代表だから、英語での対応も可能',
        paragraphs: [
          '当社の代表はオーストラリア出身です。海外の視点と日本の不動産の知識を合わせて、ご相談に対応しています。英語での打ち合わせをご希望の方は、お問い合わせの際にお知らせください。',
          '代表自らお客様と向き合い、信頼関係を築けるよう対応させていただいております。',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Investment and holiday homes',
    h1: 'Investment property and holiday homes in Beppu: a warm, hot-spring way of life',
    lede: 'Investment in regional cities, outside the big metropolitan centres, is attracting attention in Japan. Beppu is a town popular with foreign visitors, and here is what it is like now.',
    hero: img13_8,
    heroAlt: 'Interior of a home in Beppu with a bright living room',
    gallery: {
      label: 'Seasons (illustrative)',
      items: [
        { src: imgSpring, alt: 'A branch of cherry blossom under a blue sky', caption: 'Spring (illustrative)', ratio: '4/3' },
        { src: imgSummer, alt: 'A hot-spring pool at the foot of green hills', caption: 'Summer (illustrative)', ratio: '4/3' },
        { src: imgAutumn, alt: 'A tree with red autumn leaves and white flowers', caption: 'Autumn (illustrative)', ratio: '4/3' },
      ],
    },
    sections: [
      {
        heading: 'Japan\'s property market suits investment',
        figure: { src: imgPanorama, alt: 'View over the bay and the city', caption: 'View over the bay and the city (illustration)' },
        paragraphs: [
          'A survey of overseas investors, conducted by the Ministry of Land, Infrastructure, Transport and Tourism in fiscal 2018, found that 76.3% of overseas investors rated the scale of the Japanese property market as excellent.',
          'The yen has moved stronger over the past year or two, but it remains weak overall, which is one reason overseas investors find Japan and Beppu attractive.',
        ],
        note: 'The source of the survey figures is being confirmed.',
      },
      {
        heading: 'Beppu\'s value as a tourist town',
        paragraphs: [
          'Beppu is known for its hot springs and is popular with foreign visitors.',
        ],
      },
      {
        heading: 'Our representative is from Australia, so English is possible',
        paragraphs: [
          'Our representative is from Australia. We combine an overseas perspective with knowledge of Japanese property. If you would like to meet in English, please say so when you get in touch.',
          'Our representative meets clients personally, so that trust can be built over time.',
        ],
      },
    ],
  },
};

const staging: Bilingual<Service> = {
  ja: {
    eyebrow: 'もっと早く高く売りたい方へ',
    h1: 'より「高く」・より「早く」売りたい方へ～ホームステージング～',
    lede: '日本では聞き慣れない「ホームステージング」。海外では不動産を販売する際に当たり前のように行われ、早期かつ高価格での売却につながっています。',
    hero: imgStagingHero,
    heroAlt: '白いカウンターキッチンとダイニングの室内',
    gallery: {
      label: '施工例（大観山・三輪・三川）',
      items: [
        { src: stg2_2, alt: '木の床の廊下（大観山の施工例）', caption: '大観山', ratio: '4/3' },
        { src: stg2_3, alt: '格子戸のある室内（大観山の施工例）', caption: '大観山', ratio: '4/3' },
        { src: stg2_4, alt: '和柄の壁紙のある居間（大観山の施工例）', caption: '大観山', ratio: '4/3' },
        { src: stg2_5, alt: '畳と座布団の和室（大観山の施工例）', caption: '大観山', ratio: '4/3' },
        { src: stg2_6, alt: '床の間のある和室（大観山の施工例）', caption: '大観山', ratio: '4/3' },
        { src: stg3_3, alt: '浴室（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: stg3_6, alt: '二段ベッドのある部屋（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: stg3_7, alt: '薪ストーブのある室内（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: stg3_8, alt: 'ソファのあるリビング（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: stg3_9, alt: '梁と薪ストーブのある室内（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: stg5_1, alt: '玄関わきの収納と段差（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_2, alt: '屋外のデッキのある住戸（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_5, alt: 'オレンジ色のシンクのあるキッチン（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_6, alt: '浴室（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_7, alt: 'ダイニングテーブルのある室内（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_8, alt: 'キッチンとダイニング（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_9, alt: '窓とカーテンのある部屋（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: stg5_11, alt: '白い家具のある居室（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: x3_1, alt: '木の柱とカウンターのキッチン（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: x3_2, alt: '畳の上のダイニングテーブル（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: x3_4, alt: 'ベッドのある寝室（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: x3_5, alt: '畳敷きのスペースのあるリビング（三輪の施工例）', caption: '三輪', ratio: '4/3' },
        { src: x5_3, alt: '玄関まわり（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: x5_4, alt: 'カウンターのあるキッチン（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: x5_10, alt: '廊下と収納（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: x5_12, alt: 'シンクと窓のあるキッチン（三川の施工例）', caption: '三川', ratio: '4/3' },
        { src: xs4, alt: '廊下と洗面台（施工例）', caption: '施工例', ratio: '4/3' },
      ],
    },
    sections: [
      {
        heading: 'ホームステージングで、「早く・高く売れる」可能性を高める',
        paragraphs: [
          'ホームステージングとは、住まいの魅力が買い手に伝わるように、家具や装飾を整えて見せる方法です。日本ではまだ広く知られていませんが、アメリカなどでは一般的に行われています。',
          '「こう見せられたらどう感じるか」という視点で物件を整えることで、物件をより魅力的に見せることができます。',
        ],
      },
      {
        heading: '当社は、別府市では数少ないホームステージング対応の不動産',
        paragraphs: [
          '別府市では、3,000万円以上の査定額が付くような高額な住宅は、売却が難しくなっています。売れたとしても、時間がかかったというケースも少なくありません。',
          '当社の代表は、物件をより魅力的に見せるための感覚と技を持っています。リノベーションとホームステージングを組み合わせて、売却の可能性を高める提案をしています。',
        ],
      },
      {
        heading: 'ホームステージング事例',
        paragraphs: [
          '別府市亀川の事例。リノベーションとホームステージングを組み合わせた、キッチンとダイニングの様子です。',
        ],
        figure: {
          src: stagingPhoto,
          alt: '白いカウンターキッチンとダイニング。木の梁が見える室内',
          caption: '別府市亀川　リノベーション＋ホームステージング',
        },
      },
      {
        heading: 'ホームステージングをする際は、必ず費用を確認しよう',
        paragraphs: [
          'ホームステージングは、より高い価格で早期の売却を目指せる方法ではあるものの、もちろんそれには必要な費用がかかります。思わぬ金額がかさまないように、費用は必ず事前に確認しましょう。',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Selling faster and for more',
    h1: 'For those who want to sell for more and sell faster: home staging',
    lede: 'Home staging is not yet common in Japan. Overseas it is a routine part of selling property, and it can lead to a faster sale at a higher price.',
    hero: imgStagingHero,
    heroAlt: 'Interior with a white counter kitchen and dining area',
    gallery: {
      label: 'Completed work (Taikanzan, Miwa and Mikawa)',
      items: [
        { src: stg2_2, alt: 'Timber-floored hallway (Taikanzan case)', caption: 'Taikanzan', ratio: '4/3' },
        { src: stg2_3, alt: 'Room with a lattice door (Taikanzan case)', caption: 'Taikanzan', ratio: '4/3' },
        { src: stg2_4, alt: 'Living room with a patterned wall (Taikanzan case)', caption: 'Taikanzan', ratio: '4/3' },
        { src: stg2_5, alt: 'Tatami room with floor cushions (Taikanzan case)', caption: 'Taikanzan', ratio: '4/3' },
        { src: stg2_6, alt: 'Tatami room with an alcove (Taikanzan case)', caption: 'Taikanzan', ratio: '4/3' },
        { src: stg3_3, alt: 'Bathroom (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: stg3_6, alt: 'Room with bunk beds (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: stg3_7, alt: 'Interior with a wood-burning stove (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: stg3_8, alt: 'Living room with a sofa (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: stg3_9, alt: 'Interior with exposed beams and a stove (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: stg5_1, alt: 'Storage and a step by the entrance (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_2, alt: 'Home with an outdoor deck (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_5, alt: 'Kitchen with an orange sink (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_6, alt: 'Bathroom (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_7, alt: 'Interior with a dining table (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_8, alt: 'Kitchen and dining area (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_9, alt: 'Room with a window and curtains (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: stg5_11, alt: 'Room with white furniture (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: x3_1, alt: 'Kitchen with timber posts and a counter (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: x3_2, alt: 'Dining table on tatami (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: x3_4, alt: 'Bedroom with a bed (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: x3_5, alt: 'Living room with a tatami area (Miwa case)', caption: 'Miwa', ratio: '4/3' },
        { src: x5_3, alt: 'Entrance area (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: x5_4, alt: 'Kitchen with a counter (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: x5_10, alt: 'Corridor and storage (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: x5_12, alt: 'Kitchen with a sink and window (Mikawa case)', caption: 'Mikawa', ratio: '4/3' },
        { src: xs4, alt: 'Corridor and vanity (completed work)', caption: 'Completed work', ratio: '4/3' },
      ],
    },
    sections: [
      {
        heading: 'Home staging can improve the chances of a faster, better sale',
        paragraphs: [
          'Home staging arranges furniture and decoration so that a home\'s appeal comes across to a buyer. It is not yet widely known in Japan, but it is common in places such as the United States.',
          'By asking "how would it feel if the home were shown like this?", a property can be presented more attractively.',
        ],
      },
      {
        heading: 'Few properties in Beppu offer home staging, and we do',
        paragraphs: [
          'In Beppu, higher-value homes valued at ¥30 million or more can be hard to sell, and sales sometimes take a long time.',
          'Our representative has the sensibility and skill to present a property at its best, and we propose combining renovation with home staging to improve the chances of a sale.',
        ],
      },
      {
        heading: 'Home staging examples',
        paragraphs: [
          'An example from Kikugawa, Beppu: the kitchen and dining area, combining renovation with home staging.',
        ],
        figure: {
          src: stagingPhoto,
          alt: 'White counter kitchen and dining area with exposed timber beams',
          caption: 'Kikugawa, Beppu: renovation and home staging',
        },
      },
      {
        heading: 'Check the cost before you start home staging',
        paragraphs: [
          'Home staging can help aim for a faster sale at a higher price, but it does involve costs. To avoid unexpected expenses, please check the costs in advance.',
        ],
      },
    ],
  },
};

export const services = { sell, inheritance, loan, investment, staging };

export type ServiceKey = keyof typeof services;

export function serviceFor(key: ServiceKey, locale: Locale): Service {
  return pick<Service>(locale, services[key].ja, services[key].en);
}
