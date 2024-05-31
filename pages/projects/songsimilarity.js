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
  <Layout title="Song Similarity">
    <Container>
      <Title>
        Song Similarity <Badge>2023-</Badge>
      </Title>
      <P>
        Python script to search for similar songs within VirtualDJ database.
        Uses audio analysis Python libraries. Find similar sections in songs
        to suggest for use in DJ mixing.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/TrackSimilarity">
            TrackSimilarity GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/songsim.png" alt="song Similarity" />
    </Container>
  </Layout>
)

export default Work