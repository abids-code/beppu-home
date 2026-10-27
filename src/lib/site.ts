// Business facts used across the site. Every value here is published on the
// current beppuhome.jp website (see docs/owner-verification.md). Values the owner
// has not yet confirmed are marked in the owner list, not changed here.

export const company = {
  nameJa: '株式会社別府ホーム',
  nameEn: 'Beppu Home Co., Ltd.',
  brandJa: '別府ホーム',
  brandEn: 'Beppu Home',
  representativeJa: 'ニコラス ライアン アンドリュー',
  // The English pages keep the published katakana name; no romanisation has been confirmed.
  representativeEn: 'ニコラス ライアン アンドリュー',
  postalCode: '874-0021',
  addressJa: '大分県別府市亀川中央町5番45号',
  addressEn: '5-45 Kameigawa Chuo-machi, Beppu-shi, Oita 874-0021, Japan',
  tel: '0977-75-8528',
  fax: '0977-75-8543',
  email: 'info@beppuhome.jp',
  // Official LINE account (verified on the current site and by the owner brief).
  lineUrl: 'https://page.line.me/oic9467l?openQrModal=true',
  lineId: '@oic9467l',
  // International format for visitors; the domestic format is company.tel.
  telIntl: '+81-977-75-8528',
  telHref: 'tel:+81977758528',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=%E5%88%A5%E5%BA%9C%E3%83%9B%E3%83%BC%E3%83%A0+%E4%BA%80%E5%B7%9D%E4%B8%AD%E5%A4%AE%E7%94%BA5-45',
  hoursJa: '9:00～17:00（定休：土曜・日曜・祝日）',
  hoursEn: '9:00–17:00 (closed Saturdays, Sundays and public holidays)',
  capitalJa: '500万円',
  staffCount: 2,
  foundedSoleProprietorship: '2014-04-28',
  incorporated: '2016-07-01',
} as const;

export const socialLinks = {
  line: company.lineUrl,
} as const;

// Zoom: the current site says consultations are arranged through the enquiry form,
// with "ZOOM" selectable as the preferred contact method. There is no booking link,
// meeting ID or booking system, so none is invented here.
export const zoomRequestPath = '/contact/?method=zoom';

// Shown only in the ZOOM consultation copy. Not a live integration.
export const zoomNoteJa = 'ZOOMを使ったオンライン相談・査定依頼も受け付けています。';
export const zoomNoteEn = 'We also take online consultations and valuation requests by Zoom.';
