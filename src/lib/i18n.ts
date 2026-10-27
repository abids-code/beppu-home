export type Locale = 'ja' | 'en';

export const locales: Locale[] = ['ja', 'en'];
export const defaultLocale: Locale = 'ja';

// Japanese lives at the root (keeps the existing URLs); English is under /en/.
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') {
    return clean === '/' ? '/en/' : `/en${clean}`;
  }
  return clean;
}

// Maps a Japanese path to the same page in the other locale.
export function otherLocalePath(locale: Locale, pathWithoutPrefix: string): string {
  return localePath(locale === 'ja' ? 'en' : 'ja', pathWithoutPrefix);
}

export function pick<T>(locale: Locale, ja: T, en: T): T {
  return locale === 'en' ? en : ja;
}
