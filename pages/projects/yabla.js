import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Yabla Userscript">
    <Container>
      <Title>
        Yabla Userscript <Badge>2022</Badge>
      </Title>
      <P>
        Added some features to a Chinese learning app by injecting JS/HTML/CSS
        into Yabla.com via a userscript. I previously used this app daily for learning Chinese,
        but there was so much room for improvement and new features. So, I decided
        to add them myself.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, PostgreSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/yabla-userscript">
            Yabla Userscript GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work