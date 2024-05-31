import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OmniChess">
    <Container>
      <Title>
        OmniChess <Badge>2018</Badge>
      </Title>
      <P>
        A chess game that was made for mobile in Unity, but it runs well on web
        when compiled to WebAssembly. The game is unique because you can choose the size
        of the game board, which adds more chess pieces. Can also randomize chess pieces.
        Makes for quite interesting chess games.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Unity3D, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/thumbChess.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work