import styles from '@/styles/Layout.module.css';
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Flex,
  Image,
  MantineProvider,
  Text,
  Title,
  createTheme,
} from '@mantine/core';
import {
  IconHome,
  IconArticle,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChessKnight,
  IconBrandBluesky,
  IconBrandSpotify,
} from '@tabler/icons-react';
import vincentImg from '../imgs/vincent.jpg';

const theme = createTheme({});

export default function Layout({ children, activePath = '/' }) {
  const isActive = (href) => href === '/' ? activePath === '/' : activePath.startsWith(href);
  const navClass = (href) =>
    `${styles.sidebarLink}${isActive(href) ? ` ${styles.sidebarLinkActive}` : ''}`;
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Flex mih="100vh" direction={{ base: 'column', md: 'row' }}>
        <Box
          component="aside"
          className={styles.sidebar}
          p="xl"
          pb="md"
          style={{
            flexShrink: 0,
            backgroundColor: '#087f5b',
          }}
          w={{ base: '100%', md: 280 }}
        >
          <Flex direction="column" align={{ base: 'center', md: 'start' }} h="100%" justify="space-between">
            <Box w="100%">
              <Flex direction="column" align={{ base: 'center', md: 'start' }}>
                <Box className={styles.profileImageWrapper}>
                  <Image
                    src={vincentImg.src}
                    alt="Vincent Will"
                    radius="xl"
                    w={180}
                    h={180}
                    fit="contain"
                  />
                </Box>
                <Title order={1} mt="md" c="white" fw={900} style={{ letterSpacing: '-0.5px' }}>
                  Vincent Will
                </Title>
                <Box className={styles.accentBar} />
                <Text size="md" mt="xs" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  I'm a <b style={{ color: 'white' }}>web developer</b>,{' '}
                  <b style={{ color: 'white' }}>musician</b>, and{' '}
                  <b style={{ color: 'white' }}>artist</b> from Berlin. Here you can find all
                  relevant links, a selection of my latest projects, and my blog.
                </Text>
                <Box component="nav" mt="lg" w="100%">
                  <Box component="a" href="/" className={navClass('/')}>
                    <IconHome size={16} />
                    Home
                  </Box>
                  <Box component="a" href="/blog" className={navClass('/blog')}>
                    <IconArticle size={16} />
                    Blog
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box w="100%" pt="md" className={styles.sidebarFooter}>
              <Flex gap="xs" wrap="wrap" justify="space-between" mb="lg" w="100%">
                <ActionIcon variant="subtle" c="rgba(255,255,255,0.7)" component="a" href="https://github.com/vincenius" target="_blank" rel="noopener" aria-label="GitHub profile" size="md" className={styles.socialIcon}>
                  <IconBrandGithub size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" c="rgba(255,255,255,0.7)" component="a" href="https://www.linkedin.com/in/vincent-will-58356212a/" target="_blank" rel="noopener" aria-label="LinkedIn profile" size="md" className={styles.socialIcon}>
                  <IconBrandLinkedin size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" c="rgba(255,255,255,0.7)" component="a" href="https://lichess.org/@/vincenius" target="_blank" rel="noopener" aria-label="Lichess profile" size="md" className={styles.socialIcon}>
                  <IconChessKnight size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" c="rgba(255,255,255,0.7)" component="a" href="https://bsky.app/" target="_blank" rel="noopener" aria-label="Bluesky profile" size="md" className={styles.socialIcon}>
                  <IconBrandBluesky size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" c="rgba(255,255,255,0.7)" component="a" href="https://open.spotify.com/user/vincenius" target="_blank" rel="noopener" aria-label="Spotify profile" size="md" className={styles.socialIcon}>
                  <IconBrandSpotify size={20} />
                </ActionIcon>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text size="xs" style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Vincent Will</Text>
                <Anchor size="xs" href="/privacy" style={{ color: 'rgba(255,255,255,0.5)' }} td="underline">Privacy</Anchor>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Commit-chart border strip — fixed on desktop, hidden on mobile */}
        <Box className={styles.slantsBorder} />

        <Box className={styles.mainWrapper} style={{ flex: 1 }}>
          <Box component="main" className={styles.hero} style={{ minHeight: '100vh' }}>
            <Container size="md" p="xl" mx="auto">
              {children}
            </Container>
          </Box>
        </Box>
      </Flex>
    </MantineProvider>
  );
}
