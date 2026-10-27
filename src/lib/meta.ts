import { pick, type Locale } from './i18n';

// Page titles and descriptions. Japanese wording follows the existing site
// where it exists; English is a translation of that wording.
const pages = {
  home: {
    ja: {
      title: '大分市・別府市の不動産買取・任意売却なら「株式会社別府ホーム」',
      description:
        '大分市・別府市の不動産買取・任意売却なら「別府ホーム」へ。売却・相続・空き家・ローンの返済・投資・別荘のご相談を承ります。',
    },
    en: {
      title: 'Property purchase and voluntary sale in Oita City and Beppu | Beppu Home',
      description:
        'Property purchase and voluntary sale in Oita City and Beppu. We advise on selling, inherited and vacant homes, loan difficulties, investment and holiday homes.',
    },
  },
  sell: {
    ja: {
      title: '不動産を売りたい方へ',
      description: '大分市・別府市で不動産買取・任意売却を行っている「別府ホーム」の、不動産を売りたい方へのページです。買取と仲介売却の違いを比較しました。',
    },
    en: {
      title: 'Selling your property',
      description: 'Beppu Home buys and sells property in Oita City and Beppu. We compare property purchase with a brokered sale.',
    },
  },
  flow: {
    ja: {
      title: '不動産売却の流れ・Q&A',
      description: '当社における不動産売却の流れと、よくあるご質問への回答をまとめました。',
    },
    en: {
      title: 'Selling process and FAQ',
      description: 'How a sale with Beppu Home works, step by step, with answers to common questions.',
    },
  },
  inheritance: {
    ja: {
      title: '相続物件・空家でお悩みの方へ',
      description: '相続した空き家や県外の実家の売却についてのご案内。片付けから手続きまで、お客様の移動なしで対応できます。',
    },
    en: {
      title: 'Inherited property and vacant homes',
      description: 'Advice on selling an inherited or vacant home, including homes outside the prefecture. Clearing and paperwork can be handled without travel.',
    },
  },
  loan: {
    ja: {
      title: 'ローンの返済ができない方へ（任意売却）',
      description: '住宅ローンの返済が難しくなったときの任意売却についてのご案内。競売になる前に検討できる選択肢です。',
    },
    en: {
      title: 'Loan repayment difficulties (voluntary sale)',
      description: 'If mortgage repayments have become difficult, a voluntary sale can be considered before an auction is started.',
    },
  },
  investment: {
    ja: {
      title: '投資・別荘をご検討の方へ',
      description: '温泉のある別府での投資用物件・別荘のご案内。海外のお客様にも英語で対応できます。',
    },
    en: {
      title: 'Investment and holiday homes',
      description: 'Investment property and holiday homes in Beppu, a hot-spring town. We can discuss in English with overseas clients.',
    },
  },
  staging: {
    ja: {
      title: 'もっと早く・高く売りたい方へ（ホームステージング）',
      description: 'ホームステージングで物件の魅力を引き出し、早く・高く売る可能性を高める方法のご紹介。',
    },
    en: {
      title: 'Selling faster and for more (home staging)',
      description: 'How home staging can help a property sell faster and for a better price.',
    },
  },
  performance: {
    ja: {
      title: '買取実績・事例紹介',
      description: '別府ホームの買取実績、投資物件の事例、ホームステージングの事例のご紹介。',
    },
    en: {
      title: 'Track record and case studies',
      description: 'Purchase record, investment property examples and home staging case studies from Beppu Home.',
    },
  },
  company: {
    ja: {
      title: '会社概要',
      description: '株式会社別府ホームの代表挨拶、会社概要、所在地とお問い合わせ先。',
    },
    en: {
      title: 'Company',
      description: 'A message from the representative, company details, address and contact information for Beppu Home.',
    },
  },
  privacy: {
    ja: {
      title: 'プライバシーポリシー',
      description: '株式会社別府ホームのプライバシーポリシー（個人情報の取り扱い）。',
    },
    en: {
      title: 'Privacy policy',
      description: 'How Beppu Home handles personal information.',
    },
  },
  terms: {
    ja: {
      title: '利用規約',
      description: '株式会社別府ホームのウェブサイトおよびサービスの利用規約。',
    },
    en: {
      title: 'Terms of use',
      description: 'Terms of use for the Beppu Home website and services.',
    },
  },
  contact: {
    ja: {
      title: '無料査定依頼・お問い合わせ',
      description: '無料査定のご依頼、お問い合わせは、電話・メール・LINE・ZOOMでお受けしています。',
    },
    en: {
      title: 'Free valuation and contact',
      description: 'Request a free valuation or make an enquiry by telephone, email, LINE or Zoom.',
    },
  },
  property: {
    ja: {
      title: '物件情報一覧',
      description: '別府ホームで取り扱う物件の一覧。',
    },
    en: {
      title: 'Properties',
      description: 'Properties currently handled by Beppu Home.',
    },
  },
  propertyPost: {
    ja: {
      title: '各戸温泉付きリノベーションマンション',
      description: '別府市のリノベーション済み物件。各戸に温泉が引かれた住戸の詳細と現地見学のご案内。',
    },
    en: {
      title: 'Renovated apartment with in-unit hot spring',
      description: 'A renovated property in Beppu with a hot spring in each unit. Details and viewing information.',
    },
  },
  news: {
    ja: {
      title: 'お知らせ・最新情報',
      description: '別府ホームの買取・売却の事例、お知らせ、コラムの一覧。',
    },
    en: {
      title: 'News',
      description: 'Transaction announcements, notices and articles from Beppu Home.',
    },
  },
  newsPost: {
    ja: { title: 'お知らせ・最新情報', description: '別府ホームのお知らせ・最新情報。' },
    en: { title: 'News', description: 'News and updates from Beppu Home.' },
  },
  notFound: {
    ja: {
      title: 'ページが見つかりません',
      description: 'お探しのページは見つかりませんでした。',
    },
    en: {
      title: 'Page not found',
      description: 'The page you are looking for could not be found.',
    },
  },
} as const;

export type PageKey = keyof typeof pages;

export interface Meta {
  title: string;
  description: string;
}

export function pageMeta(key: PageKey, locale: Locale): Meta {
  return pick<Meta>(locale, pages[key].ja, pages[key].en);
}
