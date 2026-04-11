import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  return rss({
    title: 'Blog - Vincent Will',
    description: 'My personal blog and journal',
    site: context.site,
    items: posts
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map((post) => ({
        title: post.data.headline || `Post from ${post.data.date}`,
        pubDate: new Date(post.data.date),
        description: post.body.substring(0, 200) + '...',
        link: post.data.previewText ? `/blog/${post.id}` : `/blog`,
      })),
  });
}
