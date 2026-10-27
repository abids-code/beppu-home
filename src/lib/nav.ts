import { localePath, type Locale } from './i18n';

export interface NavItem {
  key: string;
  path: string;
  labelJa: string;
  labelEn: string;
}

// Primary navigation. Pages not listed here stay reachable from the footer.
export const primaryNav: NavItem[] = [
  { key: 'sell', path: '/buy/', labelJa: '不動産を売る', labelEn: 'Sell' },
  { key: 'inheritance', path: '/buy/inheritance/', labelJa: '相続・空き家', labelEn: 'Inheritance & vacant homes' },
  { key: 'loan', path: '/any/', labelJa: 'ローンの返済', labelEn: 'Loan difficulties' },
  { key: 'investment', path: '/investment/', labelJa: '投資・別荘', labelEn: 'Investment' },
  { key: 'property', path: '/property/', labelJa: '物件情報', labelEn: 'Properties' },
  { key: 'news', path: '/column/', labelJa: 'お知らせ', labelEn: 'News' },
  { key: 'company', path: '/company/', labelJa: '会社概要', labelEn: 'Company' },
];

// Footer groups use the same destinations, arranged for scanning.
export const footerGroups: { titleJa: string; titleEn: string; items: NavItem[] }[] = [
  {
    titleJa: 'サービス',
    titleEn: 'Services',
    items: [
      { key: 'sell', path: '/buy/', labelJa: '不動産買取・売却', labelEn: 'Property purchase & sale' },
      { key: 'flow', path: '/buy/flow/', labelJa: '売却の流れ・Q&A', labelEn: 'Process & FAQ' },
      { key: 'inheritance', path: '/buy/inheritance/', labelJa: '相続物件・空き家', labelEn: 'Inherited & vacant homes' },
      { key: 'loan', path: '/any/', labelJa: '任意売却', labelEn: 'Voluntary sale (loan difficulties)' },
      { key: 'staging', path: '/homestaging/', labelJa: 'ホームステージング', labelEn: 'Home staging' },
      { key: 'investment', path: '/investment/', labelJa: '投資・別荘', labelEn: 'Investment & holiday homes' },
    ],
  },
  {
    titleJa: '情報',
    titleEn: 'Information',
    items: [
      { key: 'property', path: '/property/', labelJa: '物件情報', labelEn: 'Properties' },
      { key: 'performance', path: '/performance/', labelJa: '買取実績・事例', labelEn: 'Track record' },
      { key: 'news', path: '/column/', labelJa: 'お知らせ・最新情報', labelEn: 'News' },
      { key: 'company', path: '/company/', labelJa: '会社概要', labelEn: 'Company' },
      { key: 'privacy', path: '/privacy/', labelJa: 'プライバシーポリシー', labelEn: 'Privacy policy' },
      { key: 'terms', path: '/terms/', labelJa: '利用規約', labelEn: 'Terms of use' },
    ],
  },
];

export function navHref(locale: Locale, path: string): string {
  return localePath(locale, path);
}
