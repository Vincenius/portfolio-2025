import Layout from '@/components/Layout.jsx';
import styles from '@/styles/Home.module.css';
import {
  ActionIcon,
  Box,
  Card,
  Flex,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandBluesky,
  IconBrandSpotify,
  IconLink,
  IconMail,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBraces,
  IconChessRook,
  IconArticle,
  IconDeviceComputerCamera,
} from '@tabler/icons-react';

export default function Home({ images, activePath }) {
  return (
    <Layout activePath={activePath}>
      <Box>
        <Title order={1} mb="xl">
          My Latest Projects
        </Title>
        <Box className={styles.masonry} mb="lg">
          <Box className={styles.masonryItem}>
            <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
              <Card.Section>
                <Image src={images.statusscout} alt="StatusScout OG" h="auto" />
              </Card.Section>
              <Title order={2} mt="md" size="h4" mb={4}>
                StatusScout
              </Title>
              <Box className={styles.cardAccentBar} />
              <Text mb="md">
                An all-in-one website health monitor that helps you keep your site fast,
                secure, and reliable.
              </Text>
              <Flex gap="sm" align="center">
                <ActionIcon
                  variant="outline"
                  component="a"
                  href="https://statusscout.dev"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit StatusScout website"
                >
                  <IconLink size={16} />
                </ActionIcon>
                <ActionIcon
                  variant="outline"
                  component="a"
                  href="https://github.com/Vincenius/statusscout"
                  target="_blank"
                  rel="noopener"
                  aria-label="StatusScout GitHub repository"
                >
                  <IconBrandGithub size={16} />
                </ActionIcon>
              </Flex>
            </Card>
          </Box>

          <Box className={styles.masonryItem}>
            <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
              <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                <Card radius="md" bg="#e6fcf5" p="xs" w={60} h={60} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <ThemeIcon color="teal">
                      <IconBrandBluesky size={24} />
                    </ThemeIcon>
                  </Flex>
                </Card>
                <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                  <Title order={2} size="h4" mb={4}>
                    bsky-embed
                  </Title>
                  <Box className={styles.cardAccentBar} />
                  <Text mb="sm">A web-component to easily embed a bluesky feed.</Text>
                  <Flex gap="xs" align="center">
                    <ActionIcon
                      variant="outline"
                      component="a"
                      href="https://github.com/Vincenius/bsky-embed"
                      target="_blank"
                      rel="noopener"
                      aria-label="bsky-embed GitHub repository"
                    >
                      <IconBrandGithub size={16} />
                    </ActionIcon>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Box className={styles.masonryItem}>
            <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
              <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                <Card radius="md" bg="#e6fcf5" p="xs" w={60} h={60} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Image src={images.vincenius} alt="Vincenius Art Logo" w={40} h={40} />
                </Card>
                <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                  <Title order={2} size="h4" mb={4}>
                    Vincenius Art
                  </Title>
                  <Box className={styles.cardAccentBar} />
                  <Text mb="sm">A website where I showcase my art projects.</Text>
                  <Flex gap="xs" align="center">
                    <ActionIcon
                      variant="outline"
                      component="a"
                      href="https://vincenius.com/"
                      target="_blank"
                      rel="noopener"
                      aria-label="Visit Vincenius Art website"
                    >
                      <IconLink size={16} />
                    </ActionIcon>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Box className={styles.masonryItem}>
            <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
              <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                <Card radius="md" bg="#e6fcf5" p="xs" w={60} h={60} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={images.wweb} alt="wweb.dev Logo" w="auto" h={30} />
                  </Flex>
                </Card>
                <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                  <Title order={2} size="h4" mb={4}>
                    wweb.dev
                  </Title>
                  <Box className={styles.cardAccentBar} />
                  <Text mb="sm">A blog where I write about web development.</Text>
                  <Flex gap="sm" align="center">
                    <ActionIcon
                      variant="outline"
                      component="a"
                      href="https://wweb.dev"
                      target="_blank"
                      rel="noopener"
                      aria-label="Visit wweb.dev"
                    >
                      <IconLink size={16} />
                    </ActionIcon>
                    <ActionIcon
                      variant="outline"
                      component="a"
                      href="https://github.com/Vincenius/wwebdev"
                      target="_blank"
                      rel="noopener"
                      aria-label="wweb.dev GitHub repository"
                    >
                      <IconBrandGithub size={16} />
                    </ActionIcon>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Box className={styles.masonryItem}>
            <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
              <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                <Card radius="md" bg="#e6fcf5" p="xs" w={60} h={60} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <ThemeIcon color="teal">
                      <IconDeviceComputerCamera size={24} />
                    </ThemeIcon>
                  </Flex>
                </Card>
                <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                  <Title order={2} size="h4" mb={4}>
                    Meeting Pictures
                  </Title>
                  <Box className={styles.cardAccentBar} />
                  <Text mb="sm">
                    A collection of stupid backgrounds for Zoom, Teams, Google Meet.
                  </Text>
                  <Flex gap="sm" align="center">
                    <ActionIcon
                      variant="outline"
                      component="a"
                      href="https://meeting.pictures/"
                      target="_blank"
                      rel="noopener"
                      aria-label="Visit Meeting Pictures website"
                    >
                      <IconLink size={16} />
                    </ActionIcon>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Box className={styles.masonryItem}>
            <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
              <Card.Section>
                <Image src={images.tram4} alt="Tram4 band picture" h={200} />
              </Card.Section>
              <Title order={2} mt="md" size="h4" mb={4}>
                Tram4
              </Title>
              <Box className={styles.cardAccentBar} />
              <Text mb="md">A skate-punk band where I play the guitar.</Text>
              <Flex gap="sm" align="center">
                <ActionIcon
                  variant="outline"
                  component="a"
                  href="https://tram4.de"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit Tram4 website"
                >
                  <IconLink size={16} />
                </ActionIcon>
                <ActionIcon
                  variant="outline"
                  component="a"
                  href="https://open.spotify.com/artist/5nmykeSzy5xp8bO8Z2QFPs"
                  target="_blank"
                  rel="noopener"
                  aria-label="Tram4 on Spotify"
                >
                  <IconBrandSpotify size={21} />
                </ActionIcon>
                <ActionIcon
                  variant="outline"
                  component="a"
                  href="https://www.instagram.com/tram4band/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Tram4 on Instagram"
                >
                  <IconBrandInstagram size={21} />
                </ActionIcon>
                <ActionIcon
                  variant="outline"
                  component="a"
                  href="https://www.youtube.com/channel/UCaSZqsQ-Vzo6I7yFzJMrFYg"
                  target="_blank"
                  rel="noopener"
                  aria-label="Tram4 on YouTube"
                >
                  <IconBrandYoutube size={21} />
                </ActionIcon>
              </Flex>
            </Card>
          </Box>
        </Box>

        <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
          <Title order={2} size="h4" mb={4}>
            More Projects
          </Title>
          <Box className={styles.cardAccentBar} />
          <List spacing="md" size="md" center>
            <List.Item
              icon={
                <Box style={{ borderRadius: 8, padding: 4, background: '#e6fcf5', boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <ThemeIcon size={40} color="teal">
                    <IconMail size={30} />
                  </ThemeIcon>
                </Box>
              }
            >
              <Text>
                <b>
                  <a
                    href="https://github.com/Vincenius/OpenMailer"
                    target="_blank"
                    rel="noopener"
                  >
                    OpenMailer
                  </a>
                </b>
                : A minimalist Next.js alternative to Mailchimp.
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Card radius="md" bg="#e6fcf5" p="0" w={40} h={40} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={images.puzzler} alt="puzzler logo" w={30} h={30} />
                  </Flex>
                </Card>
              }
            >
              <Text>
                <b>
                  <a
                    href="https://puzzler.happysunday.club/"
                    target="_blank"
                    rel="noopener"
                  >
                    Puzzler
                  </a>
                </b>
                : A website to improve chess skills &amp; challenge friends with five daily
                puzzles.
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Box style={{ borderRadius: 8, padding: 4, background: '#e6fcf5', boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <ThemeIcon size={40} color="teal">
                    <IconBraces size={30} />
                  </ThemeIcon>
                </Box>
              }
            >
              <Text>
                <b>
                  <a
                    href="https://css-speedrun.netlify.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    CSS Speedrun
                  </a>
                </b>
                : A small fun app to test your CSS knowledge.
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Card radius="md" bg="#e6fcf5" p="0" w={40} h={40} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={images.workout} alt="workout.lol logo" w={30} h={30} />
                  </Flex>
                </Card>
              }
            >
              <Text>
                <b>
                  <a href="https://workout.lol/" target="_blank" rel="noopener">
                    workout.lol
                  </a>
                </b>{' '}
                <i>[Sold]</i>: A small web application to create workouts based on your
                available equipment.
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Card radius="md" bg="#e6fcf5" p="0" w={40} h={40} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={images.playlist} alt="playlist.lol logo" w={30} h={30} />
                  </Flex>
                </Card>
              }
            >
              <Text>
                <b>
                  <a href="https://playlist.lol/" target="_blank" rel="noopener">
                    playlist.lol
                  </a>
                </b>
                : A Spotify playlist that gets updated automatically every day with one of
                the "1001 Albums You Must Hear Before You Die".
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Card radius="md" bg="#e6fcf5" p="0" w={40} h={40} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={images.foerderhaus} alt="vincenius logo" w={30} h={30} />
                  </Flex>
                </Card>
              }
            >
              <Text>
                <b>Förderhaus24</b> <i>[Deactivated]</i>: A web app to find subsidies for
                housing in Germany.
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Box style={{ borderRadius: 8, padding: 4, background: '#e6fcf5', boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <ThemeIcon size={40} color="teal">
                    <IconChessRook size={30} />
                  </ThemeIcon>
                </Box>
              }
            >
              <Text>
                <b>
                  <a
                    href="https://github.com/Vincenius/chess-fitness"
                    target="_blank"
                    rel="noopener"
                  >
                    chess.fitness
                  </a>
                </b>{' '}
                <i>[Deactivated]</i>: A ChatGPT-4 based AI chess coach that helps you
                improve your opening knowledge.
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Card radius="md" bg="#e6fcf5" p="0" w={40} h={40} style={{ boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={images.sponsorNinja} alt="sponsor ninja logo" w={30} h={30} />
                  </Flex>
                </Card>
              }
            >
              <Text>
                <b>
                  <a
                    href="https://github.com/Vincenius/sponsor-ninja"
                    target="_blank"
                    rel="noopener"
                  >
                    Sponsor Ninja
                  </a>
                </b>{' '}
                <i>[Deactivated]</i>: An easy &amp; free way to collect sponsorships for
                your projects.
                <br />
              </Text>
            </List.Item>
            <List.Item
              icon={
                <Box style={{ borderRadius: 8, padding: 4, background: '#e6fcf5', boxShadow: '0 0 0 2px rgba(8,127,91,0.35)' }}>
                  <ThemeIcon size={40} color="teal">
                    <IconArticle size={30} />
                  </ThemeIcon>
                </Box>
              }
            >
              <Text>
                <b>
                  <a
                    href="https://github.com/Vincenius/modest"
                    target="_blank"
                    rel="noopener"
                  >
                    Modest
                  </a>
                </b>{' '}
                <i>[Deactivated]</i>: A micro-blogging platform to create your own
                twitter-like blog for free.
                <br />
              </Text>
            </List.Item>
          </List>
        </Card>
      </Box>
    </Layout>
  );
}
