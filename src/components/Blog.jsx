import Layout from './Layout';
import { Anchor, Card, Flex, Stack, Text, Title } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from '@/styles/Blog.module.css';

const markdownComponents = {
  a: ({ node, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
};

export default function BlogList({ posts = [], activePath }) {
  return (
    <Layout activePath={activePath}>
      <Flex justify="space-between" align="center" mb="xl" wrap="wrap" maw={680}>
        <Title order={1}>
          Blog
        </Title>
        <Anchor href="/rss.xml" size="sm" display="inline-block" fw={600}>
          Subscribe via RSS
        </Anchor>
      </Flex>
      <Stack gap="md">
        {posts.map((post) => (
          <Card key={post.id} className={styles.bubble} radius="lg" withBorder shadow="sm" p="lg">
            {post.image && (
              <Card.Section>
                <img src={post.image.src} width={post.image.width} height={post.image.height} alt="" className={styles.bubbleImage} />
              </Card.Section>
            )}
            {post.headline && (
              <Title order={2} mb="xs" mt={post.image ? 'sm' : 0}>
                {post.headline}
              </Title>
            )}
            <Text size="md" c="dimmed" mb="sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <div className={styles.markdown}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {post.previewText ?? post.body}
              </ReactMarkdown>
            </div>
            {post.previewText && (
              <Anchor href={`/blog/${post.id}`} size="md" mt="xs" display="block" fw={700}>
                Read more →
              </Anchor>
            )}
          </Card>
        ))}
      </Stack>
    </Layout>
  );
}