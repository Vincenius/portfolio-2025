import { useState, useEffect } from 'react';
import Layout from './Layout';
import {
  Anchor,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Modal,
  Pagination,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLink } from '@tabler/icons-react';
import styles from '@/styles/Blog.module.css';
import statusscoutImg from '../imgs/statusscout.png';
import tram4Img from '../imgs/tram4.jpg';
import wwebImg from '../imgs/wweb.png';

const POSTS_PER_PAGE = 10;

const posts = [
  {
    id: 1,
    date: '2026-04-08',
    text: 'Just shipped StatusScout v2.0 — real-time alerting, an improved Lighthouse integration, and a completely redesigned dashboard. The hardest challenge was making all the charts look decent on mobile without sacrificing detail.',
    link: 'https://statusscout.dev',
    image: statusscoutImg.src,
  },
  {
    id: 2,
    date: '2026-04-01',
    text: 'Five CSS tricks I keep reaching for in every project: logical properties, the :has() selector, container queries, @layer for specificity control, and ch units for readable line lengths. These have genuinely changed how I write styles.',
    link: 'https://wweb.dev/resources/css-tricks',
  },
  {
    id: 3,
    date: '2026-03-22',
    text: 'Released bsky-embed 1.3 — now supports custom themes, lazy loading, and a compact mode. It was a fun weekend project that turned into something people actually use.',
    link: 'https://github.com/Vincenius/bsky-embed',
  },
  {
    id: 4,
    date: '2026-03-15',
    text: 'Tram4 played a sold-out show at Cassiopeia last night. Unreal energy from the crowd. New songs went down really well — we might record them this summer.',
    image: tram4Img.src,
  },
  {
    id: 5,
    date: '2026-03-08',
    text: 'Gave wweb.dev a long-overdue redesign. Simpler layout, faster load times, and a proper RSS feed at last. Still some things I want to tweak but it is good enough to ship.',
    link: 'https://wweb.dev',
    image: wwebImg.src,
  },
  {
    id: 6,
    date: '2026-02-27',
    text: 'A deep-dive into JavaScript performance: why `structuredClone` is slower than you think, when `WeakRef` actually helps, and the hidden cost of spread operators in hot paths.',
    link: 'https://wweb.dev/blog/js-performance-2026',
  },
  {
    id: 7,
    date: '2026-02-18',
    text: 'Art commissions are open again for March. I am taking five slots for digital illustrations. Mostly doing abstract generative pieces and portrait studies lately — DM me on Bluesky if you are interested.',
  },
  {
    id: 8,
    date: '2026-02-10',
    text: 'Played in a rapid chess tournament over the weekend and finished 3rd out of 64. Missed a nice tactic in the semi-final that would have won the game. The post-game analysis is humbling every time.',
  },
  {
    id: 9,
    date: '2026-01-30',
    text: 'Migrated this portfolio to Astro 5. The content layer API made structuring data so much nicer, and the build times dropped by almost half. Wrote up the migration notes in case it helps someone.',
    link: 'https://wweb.dev/blog/astro-5-migration',
  },
  {
    id: 10,
    date: '2026-01-20',
    text: 'Open-source milestone: OpenMailer crossed 500 GitHub stars. It started as a quick Mailchimp alternative for my own projects and somehow grew into something people actually depend on.',
    link: 'https://github.com/Vincenius/OpenMailer',
  },
  {
    id: 11,
    date: '2026-01-10',
    text: 'Started work on a new side project — a small tool for tracking daily habits without an account or cloud sync. Just a JSON file in your repo. More details soon.',
  },
  {
    id: 12,
    date: '2025-12-28',
    text: 'My take on web development in 2026: the hype around AI-generated UI is real but the fundamentals have not changed. Semantic HTML, progressive enhancement, and fast loading times still win in the long run.',
    link: 'https://wweb.dev/blog/webdev-2026',
  },
  {
    id: 13,
    date: '2025-12-15',
    text: 'Weekend project: a tiny CLI tool that audits your npm dependencies for duplicates and suggests deduplication strategies. Built with Node, outputs a nice tree-diff. Might clean it up and publish it.',
    link: 'https://github.com/Vincenius/dep-audit',
  },
];

const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Blog({ activePath }) {
  const [modalImage, setModalImage] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  const openModal = (src) => {
    setModalImage(src);
    open();
  };

  return (
    <Layout activePath={activePath}>
      <Modal opened={opened} onClose={close} size="xl" padding={0} withCloseButton centered>
        {modalImage && (
          <Image src={modalImage} alt="Full size" fit="contain" mah="85vh" />
        )}
      </Modal>

      <Stack gap="md">
        {sortedPosts.map((post) => (
          <Box key={post.id} className={styles.bubble}>
            {post.image && (
              <Box mb="xs" onClick={() => openModal(post.image)} style={{ cursor: 'pointer' }}>
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
            <Text size="lg" mb={post.link ? 'xs' : 0}>
              {post.text}
            </Text>
            {post.link && (
              <Anchor href={post.link} target="_blank" rel="noopener" size="sm">
                Read more →
              </Anchor>
            )}
          </Box>
        ))}
      </Stack>
    </Layout>
  );
}