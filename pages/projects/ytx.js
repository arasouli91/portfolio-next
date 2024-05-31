import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="YouTube MegaPlaylist">
    <Container>
      <Title>
        YouTube MegaPlaylist <Badge>2022-</Badge>
      </Title>
      <P>
        A music player app. Implements a YouTube playlist that 
        provides many useful features that I wanted while listening to music
        on YouTube. Main features are: potentially unlimited size playlist 
        surpasses the 5,000 video limit 
        on YT playlists, sorts playlist by metrics to determine favorite songs,
        search playlists, and a side-by-side queue playlist.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ytx.netlify.app/">
            https://www.ytx.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS Serverless Functions, MongoDB, React, WebWorkers</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/youtube-megaplaylist">
            YouTube-MegaPlaylist GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ytx.png" alt="ytx" />
    </Container>
  </Layout>
)

export default Work