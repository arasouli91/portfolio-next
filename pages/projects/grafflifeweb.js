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
  <Layout title="GraffLife Web App">
    <Container>
      <Title>
        GraffLife Web App <Badge>2021</Badge>
      </Title>
      <P>
        A web app for the GraffLife game. 
        Uses Entity framework and Identity for user auth.
        Gives user&apos;s a UI for managing information related to the game.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web, Responsive Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#/.NET, Blazor, Razor, Entity framework, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/arasouli91/graffLifeWeb2">
            GraffLifeWeb GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/gfwebapp.png" alt="graff life" />
    </Container>
  </Layout>
)

export default Work