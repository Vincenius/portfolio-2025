import Layout from './Layout';
import { Anchor, Box, Stack, Text, Title } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from '@/styles/Blog.module.css';

const markdownComponents = {
  a: ({ node, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
};

export default function BlogDetail({ post, activePath }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  const { headline, date, image } = post.data;
  const content = post.body;

  return (
    <Layout activePath={activePath}>
      <Stack gap="sm">
        <Box mb="xs">
          <Anchor href="/blog" size="sm">
            ← Back to blog
          </Anchor>
        </Box>

        <Box className={styles.bubble}>
          {image && (
            <Box mb="sm">
              <img src={image} alt="" className={styles.bubbleImage} />
            </Box>
          )}

          {headline && (
            <Title order={1} mb={6}>
              {headline}
            </Title>
          )}

          <Text size="sm" c="dimmed" mb="sm">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>

          <div className={styles.markdown}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {content}
            </ReactMarkdown>
          </div>
        </Box>
      </Stack>
    </Layout>
  );
}
