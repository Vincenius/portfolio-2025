import Head from "next/head";
import NextImage from "next/image";
import styles from "@/styles/Home.module.css";
import { ActionIcon, Box, Card, Container, Flex, Image, List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import blob from '@/imgs/dddynamite.svg';
import vincent from '@/imgs/vincent.jpg';
import statusscout from '@/imgs/statusscout.png';
import tram4 from '@/imgs/tram4.jpg';
import foerderhausLogo from '@/imgs/foerderhaus.svg';
import wwebLogo from '@/imgs/wweb.png';
import puzzlerLogo from '@/imgs/puzzler.png';
import vinceniusLogo from '@/imgs/vincenius.svg';
import playlistLogo from '@/imgs/playlist.png';
import workoutLogo from '@/imgs/workout.png';
import sponsorNinjaLogo from '@/imgs/sponsor-ninja.png';
import { IconBrandGithub, IconBrandLinkedin, IconPencilMinus, IconChessKnight, IconBrandBluesky, IconBrandSpotify, IconLink, IconMail, IconBrandInstagram, IconBrandYoutube, IconBraces, IconChessRook, IconArticle } from '@tabler/icons-react';

const LinkCard = ({ href, children }) => (
  <Card padding="lg" radius="lg" withBorder className={styles.linkCard} component="a" href={href} w="100%" target="_blank" rel="noopener">
    {children}
  </Card>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Vincent Will | Portfolio</title>
        <meta name="description" content="Vincent Will's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vincenius.svg" />
        <script defer="" src="https://analytics.vincentwill.com/script.js" data-website-id="916d8b4d-42f5-40cd-a2c2-a9adb7efdf34"></script>
      </Head>
      <div>
        <main>
          <section className={styles.hero}>
            <Container size="xl">
              <Flex gap="4em" className={styles.heroContent} direction={{ base: 'column', md: 'row' }}>
                <Flex maw={300} direction="column" align={{ base: 'center', md: 'start' }} mx={{ base: 'auto', md: 0 }}>
                  <Image component={NextImage} src={vincent} alt="Vincent Will" radius="xl" w={200} h={200} objectFit="contain" />
                  <Title order={1} mt="md">Vincent Will</Title>
                  <Text size="lg" mt="md">I'm a <b>web developer</b>, <b>musician</b>, and <b>artist</b> from Berlin. Here you can find all relevant links and a selection of my latest projects.</Text>
                </Flex>
                <Box>
                  <SimpleGrid cols={{ base: 2, xs: 3, sm: 6, md: 3, lg: 3, xl: 6 }} mb="xl">
                    <LinkCard href="https://github.com/vincenius">
                      <ThemeIcon mb="sm"><IconBrandGithub style={{ width: '70%', height: '70%' }} /></ThemeIcon>
                      <Title order={2} size="h5">GitHub</Title>
                      <Text size="xs">github.com</Text>
                    </LinkCard>
                    <LinkCard href="https://www.linkedin.com/in/vincent-will-58356212a/">
                      <ThemeIcon mb="sm"><IconBrandLinkedin style={{ width: '70%', height: '70%' }} /></ThemeIcon>
                      <Title order={2} size="h5">LinkedIn</Title>
                      <Text size="xs">linkedin.com</Text>
                    </LinkCard>
                    <LinkCard href="https://wweb.dev">
                      <ThemeIcon mb="sm"><IconPencilMinus style={{ width: '70%', height: '70%' }} /></ThemeIcon>
                      <Title order={2} size="h5">Blog</Title>
                      <Text size="xs">wweb.dev</Text>
                    </LinkCard>
                    <LinkCard href="https://lichess.org/@/vincenius">
                      <ThemeIcon mb="sm"><IconChessKnight style={{ width: '70%', height: '70%' }} /></ThemeIcon>
                      <Title order={2} size="h5">Lichess</Title>
                      <Text size="xs">lichess.org</Text>
                    </LinkCard>
                    <LinkCard href="https://bsky.app/">
                      <ThemeIcon mb="sm"><IconBrandBluesky style={{ width: '70%', height: '70%' }} /></ThemeIcon>
                      <Title order={2} size="h5">Bluesky</Title>
                      <Text size="xs">bsky.app</Text>
                    </LinkCard>
                    <LinkCard href="https://open.spotify.com/user/vincenius">
                      <ThemeIcon mb="sm"><IconBrandSpotify style={{ width: '70%', height: '70%' }} /></ThemeIcon>
                      <Title order={2} size="h5">Spotify</Title>
                      <Text size="xs">spotify.com</Text>
                    </LinkCard>
                  </SimpleGrid>


                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb="lg">
                    <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                      <Card.Section>
                        <Image component={NextImage} src={statusscout} alt="StatusScout OG" width={600} height={400} h="auto" />
                      </Card.Section>

                      <Title order={2} mt="md" size="h4" mb="md">StatusScout</Title>
                      <Text mb="md">An all-in-one website health monitor that helps you keep your site fast, secure, and reliable.</Text>
                      <Flex gap="sm" align="center">
                        <ActionIcon variant="outline" component="a" href="https://statusscout.dev" target="_blank" rel="noopener">
                          <IconLink size={16} />
                        </ActionIcon>
                        <ActionIcon variant="outline" component="a" href="https://github.com/Vincenius/statusscout" target="_blank" rel="noopener">
                          <IconBrandGithub size={16} />
                        </ActionIcon>
                      </Flex>
                    </Card>

                    <Flex gap="lg" direction="column">
                      <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                        <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                          <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                            <Flex align="center" justify="center" h="100%" w="100%">
                              <ThemeIcon><IconBrandBluesky size={24} /></ThemeIcon>
                            </Flex>

                          </Card>
                          <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                            <Title order={2} size="h4" mb="md">bsky-embed</Title>
                            <Text mb="sm">A web-component to easily embed a bluesky feed.</Text>
                            <Flex gap="xs" align="center">
                              <ActionIcon variant="outline" component="a" href="https://github.com/Vincenius/bsky-embed" target="_blank" rel="noopener">
                                <IconBrandGithub size={16} aria-label="GitHub repository for bsky-embed" />
                              </ActionIcon>
                            </Flex>
                          </Box>
                        </Flex>
                      </Card>

                      <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                        <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                          <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                            <Image component={NextImage} src={vinceniusLogo} alt="Vincenius Art Logo" width={100} height={100} w={40} h={40} />
                          </Card>
                          <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                            <Title order={2} size="h4" mb="md">Vincenius Art</Title>
                            <Text mb="sm">A website where I showcase my art projects.</Text>
                            <Flex gap="xs" align="center">
                              <ActionIcon variant="outline" component="a" href="https://vincenius.com/" target="_blank" rel="noopener">
                                <IconLink size={16} />
                              </ActionIcon>
                            </Flex>
                          </Box>
                        </Flex>
                      </Card>
                    </Flex>

                    <Flex gap="lg" direction="column">
                      <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                        <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                          <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                            <Flex align="center" justify="center" h="100%" w="100%">
                              <Image component={NextImage} src={wwebLogo} alt="wweb.dev Logo" width={100} height={100} w="auto" h={30} />
                            </Flex>
                          </Card>
                          <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                            <Title order={2} size="h4" mb="md">wweb.dev</Title>
                            <Text mb="sm">A blog where I write about web development. </Text>
                            <Flex gap="sm" align="center">
                              <ActionIcon variant="outline" component="a" href="https://wweb.dev" target="_blank" rel="noopener">
                                <IconLink size={16} />
                              </ActionIcon>
                              <ActionIcon variant="outline" component="a" href="https://github.com/Vincenius/wwebdev" target="_blank" rel="noopener">
                                <IconBrandGithub size={16} />
                              </ActionIcon>
                            </Flex>
                          </Box>
                        </Flex>
                      </Card>
                      <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                        <Flex gap="md" direction={{ base: 'column', xs: 'row' }}>
                          <Card radius="md" bg="gray.1" p="xs" w={60} h={60}>
                            <Flex align="center" justify="center" h="100%" w="100%">
                              <ThemeIcon><IconMail size={24} /></ThemeIcon>
                            </Flex>

                          </Card>
                          <Box w={{ base: '100%', xs: 'calc(100% - 80px)' }}>
                            <Title order={2} size="h4" mb="md">OpenMailer</Title>
                            <Text mb="sm">A minimalist Next.js alternative to Mailchimp.</Text>
                            <Flex gap="sm" align="center">
                              <ActionIcon variant="outline" component="a" href="https://github.com/Vincenius/OpenMailer" target="_blank" rel="noopener">
                                <IconBrandGithub size={16} />
                              </ActionIcon>
                            </Flex>
                          </Box>
                        </Flex>
                      </Card>
                    </Flex>

                    <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                      <Card.Section>
                        <Image component={NextImage} src={tram4} alt="Tram4 band picture" width={600} height={400} h={200} />
                      </Card.Section>

                      <Title order={2} mt="md" size="h4" mb="md">Tram4</Title>
                      <Text mb="md">A skate-punk band where I play the guitar.</Text>
                      <Flex gap="sm" align="center">
                        <ActionIcon variant="outline" component="a" href="https://tram4.de" target="_blank" rel="noopener">
                          <IconLink size={16} />
                        </ActionIcon>
                        <ActionIcon variant="outline" component="a" href="https://open.spotify.com/artist/5nmykeSzy5xp8bO8Z2QFPs" target="_blank" rel="noopener">
                          <IconBrandSpotify size={21} />
                        </ActionIcon>
                        <ActionIcon variant="outline" component="a" href="https://www.instagram.com/tram4band/" target="_blank" rel="noopener">
                          <IconBrandInstagram size={21} />
                        </ActionIcon>
                        <ActionIcon variant="outline" component="a" href="https://www.youtube.com/channel/UCaSZqsQ-Vzo6I7yFzJMrFYg" target="_blank" rel="noopener">
                          <IconBrandYoutube size={21} />
                        </ActionIcon>
                      </Flex>
                    </Card>
                  </SimpleGrid>

                  <Card padding={{ base: "md", md: "xl" }} radius="lg" withBorder>
                    <Title order={2} size="h4" mb="lg">More Projects</Title>
                    <List spacing="md" size="md" center>
                      <List.Item icon={
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <Image component={NextImage} src={puzzlerLogo} alt="puzzler logo" width={100} height={100} w={30} h={30} />
                          </Flex>
                        </Card>
                      }>
                        <Text>
                          <b><a href="https://puzzler.happysunday.club/" target="_blank" rel="noopener">Puzzler</a></b>: A website to improve chess skills & challenge friends with five daily puzzles.
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <ThemeIcon size={40}><IconBraces size={30} /></ThemeIcon>
                      }>
                        <Text>
                          <b><a href="https://css-speedrun.netlify.app/" target="_blank" rel="noopener">CSS Speedrun</a></b>: A small fun app to test your CSS knowledge.<br />
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <Image component={NextImage} src={foerderhausLogo} alt="vincenius logo" width={100} height={100} w={30} h={30} />
                          </Flex>
                        </Card>
                      }>
                        <Text>
                          <b><a href="https://www.foerderhaus24.de/" target="_blank" rel="noopener">Förderhaus24</a></b>: A web app to find subsidies for housing in Germany.<br />
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <Image component={NextImage} src={playlistLogo} alt="playlist.lol logo" width={100} height={100} w={30} h={30} />
                          </Flex>
                        </Card>
                      }>
                        <Text>
                          <b><a href="https://playlist.lol/" target="_blank" rel="noopener">playlist.lol</a></b>: A Spotify playlist that gets updated automatically every day with one of the "1001 Albums You Must Hear Before You Die".<br />
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <Image component={NextImage} src={workoutLogo} alt="workout.lol logo" width={100} height={100} w={40} h={40} />
                      }>
                        <Text>
                          <b><a href="https://workout.lol/" target="_blank" rel="noopener">workout.lol</a></b> <i>[Sold]</i>: A small web application to create workouts based on your available equipment.<br />
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <ThemeIcon size={40}><IconChessRook size={30} /></ThemeIcon>
                      }>
                        <Text>
                          <b><a href="https://github.com/Vincenius/chess-fitness" target="_blank" rel="noopener">chess.fitness</a></b> <i>[Deactivated]</i>: A ChatGPT-4 based AI chess coach that helps you improve your opening knowledge.<br />
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <Card radius="md" bg="gray.1" p="0" w={40} h={40}>
                          <Flex align="center" justify="center" h="100%" w="100%">
                            <Image component={NextImage} src={sponsorNinjaLogo} alt="sponsor ninja logo" width={100} height={100} w={30} h={30} />
                          </Flex>
                        </Card>
                      }>
                        <Text>
                          <b><a href="https://github.com/Vincenius/sponsor-ninja" target="_blank" rel="noopener">Sponsor Ninja</a></b> <i>[Deactivated]</i>: An easy & free way to collect sponsorships for your projects.<br />
                        </Text>
                      </List.Item>
                      <List.Item icon={
                        <ThemeIcon size={40}><IconArticle size={30} /></ThemeIcon>
                      }>
                        <Text>
                          <b><a href="https://github.com/Vincenius/modest" target="_blank" rel="noopener">Modest</a></b> <i>[Deactivated]</i>: A micro-blogging platform to create your own twitter-like blog for free.<br />
                        </Text>
                      </List.Item>

                      {/* todo img quest -> todo get up again */}
                    </List>
                  </Card>
                </Box>
              </Flex>

              {/* <Image component={NextImage} src={blob} alt="blob" /> */}
            </Container>
          </section>
        </main>
      </div>
    </>
  );
}
