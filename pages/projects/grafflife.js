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
  <Layout title="GraffLife">
    <Container>
      <Title>
        GraffLife <Badge>2016-2020</Badge>
      </Title>
      <P>
        A multiplayer graffiti art game, walk around and paint on walls. 
        Compiled to WebAssembly and runs in browser. Runs on mobile. 
        Communicates with WebSockets to a NodeJS and SQL backend server for multiplayer.
        All that I&apos;ve said above is working, but the game is still in alpha stage.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://grafflife.netlify.app/">
            https://grafflife.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, WebSockets, JavaScript, WebAssembly, NodeJS, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/graffLife">
            GrafLife GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/thumbGF.png" alt="graff life" />
    </Container>
  </Layout>
)

export default Work