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
  <Layout title="ProMiles Assessment">
    <Container>
      <Title>
        ProMiles Assessment  <Badge>2022</Badge>
      </Title>
      <P>
        Assessment completed for interview that I put some effort into,
        got an offer. Asked to create a UI to represent a queue of items.
        Items can be added/removed and rearranged. Was asked to use Vanilla JS,
        but it would&apos;ve been convenient to use React instead. Used OOP solution
        to essentialy make components.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Responsive mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, HTML/CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/pm_assessment">
            ProMiles Assessment GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/thumbPM.png" alt="promiles Assessment" />
    </Container>
  </Layout>
)

export default Work