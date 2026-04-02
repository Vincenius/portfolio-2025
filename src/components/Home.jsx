import styles from '@/styles/Home.module.css';
import {
  MantineProvider,
  createTheme,
  ActionIcon,
  Box,
  Card,
  Container,
  Flex,
  Image,
  List,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconPencilMinus,
  IconChessKnight,
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

const theme = createTheme({});

const LinkCard = ({ href, children }) => (
  <Card
    padding="lg"
    radius="lg"
    withBorder
    className={styles.linkCard}
    component="a"
    href={href}
    w="100%"
    target="_blank"
    rel="noopener"
  >
    {children}
  </Card>
);

function HomeContent({ images }) {
  return (
    <div>
      <main>
        <section className={styles.hero}>
          <Container size="xl">
            <Flex gap="4em" className={styles.heroContent} direction={{ base: 'column', md: 'row' }}>
              <Flex
                maw={300}
                direction="column"
                align={{ base: 'center', md: 'start' }}
                mx={{ base: 'auto', md: 0 }}
              >
                <Image src={images.vincent} alt="Vincent Will" radius="xl" w={200} h={200} fit="contain" />
                <Title order={1} mt="md">
                  Vincent Will
                </Title>
                <Text size="lg" mt="md">
                  I'm a <b>web developer</b>, <b>musician</b>, and <b>artist</b> from Berlin. Here
                  you can find all relevant links and a selection of my latest projects.
                </Text>
              </Flex>
              <Box>
                <SimpleGrid cols={{ base: 2, xs: 3, sm: 6, md: 3, lg: 3, xl: 6 }} mb="xl">
                  <LinkCard href="https://github.com/vincenius">
                    <ThemeIcon mb="sm">
                      <IconBrandGithub style={{ width: '70%', height: '70%' }} />
                    </ThemeIcon>
                    <Title order={2} size="h5">
                      GitHub
                    </Title>
                    <Text size="xs">github.com</Text>
                  </LinkCard>
                  <LinkCard href="https://www.linkedin.com/in/vincent-will-58356212a/">
                    <ThemeIcon mb="sm">
                      <IconBrandLinkedin style={{ width: '70%', height: '70%' }} />
                    </ThemeIcon>
                    <Title order={2} size="h5">
                      LinkedIn
                    </Title>
                    <Text size="xs">linkedin.com</Text>
                  </LinkCard>
                  <LinkCard href="https://wweb.dev">
                    <ThemeIcon mb="sm">
                      <IconPencilMinus style={{ width: '70%', height: '70%' }} />
                    </ThemeIcon>
                    <Title order={2} size="h5">
                      Blog
                    </Title>
                    <Text size="xs">wweb.dev</Text>
                  </LinkCard>
                  <LinkCard href="https://lichess.org/@/vincenius">
                    <ThemeIcon mb="sm">
                      <IconChessKnight style={{ width: '70%', height: '70%' }} />
                    </ThemeIcon>
                    <Title order={2} size="h5">
                      Lichess
                    </Title>
                    <Text size="xs">lichess.org</Text>
                  </LinkCard>
                  <LinkCard href="https://bsky.app/">
                    <ThemeIcon mb="sm">
                      <IconBrandBluesky style={{ width: '70%', height: '70%' }} />
                    </ThemeIcon>
                    <Title order={2} size="h5">
                      Bluesky
                    </Title>
                    <Text size="xs">bsky.app</Text>
                  </LinkCard>
                  <LinkCard href="https://open.spotify.com/user/vincenius">
                    <ThemeIcon mb="sm">
                      <IconBrandSpotify style={{ width: '70%', height: '70%' }} />
                    </ThemeIcon>
                    <Title order={2} size="h5">
                      Spotify
                    </Title>
                    <Text size="xs">spotify.com</Text>
                  </LinkCard>
                </SimpleGrid>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb="lg">
                  <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                    <Card.Section>
                      <Image src={images.statusscout} alt="StatusScout OG" h="auto" />
                    </Card.Section>
                    <Title order={2} mt="md" size="h4" mb="md">
                      StatusScout
                    </Title>
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
                      >
                        <IconLink size={16} />
                      </ActionIcon>
                      <ActionIcon
                        variant="outline"
                        component="a"
                        href="https://github.com/Vincenius/statusscout"
                        target="_blank"
                        rel="noopener"
                      >
                        <IconBrandGithub size={16} />
                      </ActionIcon>
                    </Flex>
                  </Card>

                  <Flex gap="lg" direction="column">
                    <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                      <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                        <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <ThemeIcon>
                              <IconBrandBluesky size={24} />
                            </ThemeIcon>
                          </Flex>
                        </Card>
                        <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                          <Title order={2} size="h4" mb="md">
                            bsky-embed
                          </Title>
                          <Text mb="sm">A web-component to easily embed a bluesky feed.</Text>
                          <Flex gap="xs" align="center">
                            <ActionIcon
                              variant="outline"
                              component="a"
                              href="https://github.com/Vincenius/bsky-embed"
                              target="_blank"
                              rel="noopener"
                            >
                              <IconBrandGithub
                                size={16}
                                aria-label="GitHub repository for bsky-embed"
                              />
                            </ActionIcon>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>

                    <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                      <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                        <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                          <Image src={images.vincenius} alt="Vincenius Art Logo" w={40} h={40} />
                        </Card>
                        <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                          <Title order={2} size="h4" mb="md">
                            Vincenius Art
                          </Title>
                          <Text mb="sm">A website where I showcase my art projects.</Text>
                          <Flex gap="xs" align="center">
                            <ActionIcon
                              variant="outline"
                              component="a"
                              href="https://vincenius.com/"
                              target="_blank"
                              rel="noopener"
                            >
                              <IconLink size={16} />
                            </ActionIcon>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Flex>

                  <Flex gap="lg" direction="column">
                    <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                      <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                        <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <Image src={images.wweb} alt="wweb.dev Logo" w="auto" h={30} />
                          </Flex>
                        </Card>
                        <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                          <Title order={2} size="h4" mb="md">
                            wweb.dev
                          </Title>
                          <Text mb="sm">A blog where I write about web development.</Text>
                          <Flex gap="sm" align="center">
                            <ActionIcon
                              variant="outline"
                              component="a"
                              href="https://wweb.dev"
                              target="_blank"
                              rel="noopener"
                            >
                              <IconLink size={16} />
                            </ActionIcon>
                            <ActionIcon
                              variant="outline"
                              component="a"
                              href="https://github.com/Vincenius/wwebdev"
                              target="_blank"
                              rel="noopener"
                            >
                              <IconBrandGithub size={16} />
                            </ActionIcon>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                    <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                      <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                        <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <ThemeIcon>
                              <IconDeviceComputerCamera size={24} />
                            </ThemeIcon>
                          </Flex>
                        </Card>
                        <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                          <Title order={2} size="h4" mb="md">
                            Meeting Pictures
                          </Title>
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
                            >
                              <IconLink size={16} />
                            </ActionIcon>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Flex>

                  <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                    <Card.Section>
                      <Image src={images.tram4} alt="Tram4 band picture" h={200} />
                    </Card.Section>
                    <Title order={2} mt="md" size="h4" mb="md">
                      Tram4
                    </Title>
                    <Text mb="md">A skate-punk band where I play the guitar.</Text>
                    <Flex gap="sm" align="center">
                      <ActionIcon
                        variant="outline"
                        component="a"
                        href="https://tram4.de"
                        target="_blank"
                        rel="noopener"
                      >
                        <IconLink size={16} />
                      </ActionIcon>
                      <ActionIcon
                        variant="outline"
                        component="a"
                        href="https://open.spotify.com/artist/5nmykeSzy5xp8bO8Z2QFPs"
                        target="_blank"
                        rel="noopener"
                      >
                        <IconBrandSpotify size={21} />
                      </ActionIcon>
                      <ActionIcon
                        variant="outline"
                        component="a"
                        href="https://www.instagram.com/tram4band/"
                        target="_blank"
                        rel="noopener"
                      >
                        <IconBrandInstagram size={21} />
                      </ActionIcon>
                      <ActionIcon
                        variant="outline"
                        component="a"
                        href="https://www.youtube.com/channel/UCaSZqsQ-Vzo6I7yFzJMrFYg"
                        target="_blank"
                        rel="noopener"
                      >
                        <IconBrandYoutube size={21} />
                      </ActionIcon>
                    </Flex>
                  </Card>
                </SimpleGrid>

                <Card padding={{ base: 'md', md: 'xl' }} radius="lg" withBorder>
                  <Title order={2} size="h4" mb="lg">
                    More Projects
                  </Title>
                  <List spacing="md" size="md" center>
                    <List.Item
                      icon={
                        <ThemeIcon size={40}>
                          <IconMail size={30} />
                        </ThemeIcon>
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
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
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
                        <ThemeIcon size={40}>
                          <IconBraces size={30} />
                        </ThemeIcon>
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
                        <Image src={images.workout} alt="workout.lol logo" w={40} h={40} />
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
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
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
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
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
                        <ThemeIcon size={40}>
                          <IconChessRook size={30} />
                        </ThemeIcon>
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
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
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
                        <ThemeIcon size={40}>
                          <IconArticle size={30} />
                        </ThemeIcon>
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
            </Flex>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default function Home({ images }) {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <HomeContent images={images} />
    </MantineProvider>
  );
}
