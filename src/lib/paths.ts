import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { getPosts, postLang, postSlug } from './posts';

export async function blogStaticPaths(lang: Lang) {
  const all = await getCollection('blog');
  const other = lang === 'id' ? 'en' : 'id';
  const otherSlugs = new Set(all.filter((p) => postLang(p) === other).map(postSlug));
  const posts = await getPosts(lang);
  return posts.map((post) => ({
    params: { slug: postSlug(post) },
    props: { post, hasTranslation: otherSlugs.has(postSlug(post)) },
  }));
}
