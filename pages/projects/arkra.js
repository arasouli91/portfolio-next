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
  <Layout title="Arkra Assessment">
    <Container>
      <Title>
        Arkra Assessment <Badge>2024</Badge>
      </Title>
      <P>
        A take-home assessment project for a company I applied to.
        Inputs PDF, sends to their backend, OCR scan, and returns results.
        User can modify and update the results, and send to backend.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web, Responsive Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TailwindCSS, HTML5, Vite</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arkra-group/arkra-trial-react-amir">
            Arkra Assessment GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/arkraGIF.gif" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work