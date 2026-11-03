import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

/** id koleksi berbentuk "<lang>/<slug>". */
export const postLang = (post: CollectionEntry<'blog'>) => post.id.split('/')[0] as Lang;
export const postSlug = (post: CollectionEntry<'blog'>) => post.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    'blog',
    (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingMinutes(body: string | undefined) {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
