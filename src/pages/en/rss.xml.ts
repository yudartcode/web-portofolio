import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '../../data/profile';
import { ui } from '../../i18n/ui';
import { localizePath } from '../../i18n/utils';
import { getPosts, postSlug } from '../../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('en');
  return rss({
    title: profile.shortName,
    description: ui['en']['meta.description'],
    site: context.site!,
    customData: '<language>en</language>',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: localizePath(`/blog/${postSlug(p)}/`, 'en'),
    })),
  });
}
