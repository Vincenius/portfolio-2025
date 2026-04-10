import Layout from './Layout';
import { Anchor, Box, Stack, Text } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from '@/styles/Blog.module.css';

const markdownComponents = {
  a: ({ node, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
};

export default function Blog({ posts = [], activePath }) {
  return (
    <Layout activePath={activePath}>
      <Stack gap="md">
        {posts.map((post) => (
          <Box key={post.id} className={styles.bubble}>
            {post.image && (
              <Box mb="xs">
                <img src={post.image} alt="" className={styles.bubbleImage} />
              </Box>
            )}
            <Text size="xs" c="dimmed" mb={4}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <div className={styles.markdown}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {post.body}
              </ReactMarkdown>
            </div>
            {post.link && (
              <Anchor href={post.link} target="_blank" rel="noopener noreferrer" size="sm" mt="xs" display="block">
                Read more →
              </Anchor>
            )}
          </Box>
        ))}
      </Stack>
    </Layout>
  );
}