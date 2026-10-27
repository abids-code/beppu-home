import { getCollection, render, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export interface NewsItem {
  id: string;
  number: number;
  title: string;
  date: Date;
  category: 'case' | 'article';
  originalUrl: string;
  // true when the English page is a translation; false when showing the Japanese fallback.
  translated: boolean;
  dateUnverified: boolean;
  entry: CollectionEntry<'news'> | CollectionEntry<'newsEn'>;
}

function toItem(entry: CollectionEntry<'news'> | CollectionEntry<'newsEn'>, translated: boolean): NewsItem {
  return {
    id: entry.id,
    number: entry.data.legacyNumber,
    title: entry.data.title,
    date: entry.data.date,
    category: entry.data.category,
    originalUrl: entry.data.originalUrl,
    translated,
    dateUnverified: entry.data.dateUnverified,
    entry,
  };
}

// Japanese is always complete. English uses a translation when one exists and
// falls back to the Japanese entry (flagged) when not.
export async function getNews(locale: Locale): Promise<NewsItem[]> {
  const ja = await getCollection('news');
  if (locale === 'ja') {
    return ja.map((e) => toItem(e, true)).sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  const en = await getCollection('newsEn');
  const enById = new Map(en.map((e) => [e.id, e]));
  return ja
    .map((e) => {
      const translation = enById.get(e.id);
      return translation ? toItem(translation, true) : toItem(e, false);
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getNewsById(locale: Locale, id: string) {
  const items = await getNews(locale);
  return items.find((i) => i.id === id);
}

export { render };
