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
  <Layout title="DJ Assist">
    <Container>
      <Title>
        DJ Assist <Badge>2023-</Badge>
      </Title>
      <P>
        A web app that runs along side VirtualDJ software. 
        Allows user to save information/steps involved in transitions
        between two songs. Then, while DJing, user can see which songs
        to play next and how. Can find lists of all possible paths of songs. 
        Includes a utility to merge XML databases of VirtualDJ.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, CSS/HTML, NodeJS, XML</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/DjAssistWebPortfolio">
            DJ Assist GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/djassist.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work