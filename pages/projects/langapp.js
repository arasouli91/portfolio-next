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
  <Layout title="Language Learning AI Chat App">
    <Container>
      <Title>
        Language Learning AI Chat App <Badge>2024-</Badge>
      </Title>
      <P>
        Language learning AI chatbot that goes far beyond simply providing a wrapper
        over an LLM. Combines other effective language learning methodologies.
        This is the main project that I am currently working on now.
        Working on the backend using python NLP libraries for language parsing
        and working on optimizing interaction with LLM. 
        Also, working on frontend of SaaS web app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, OpenAI API, TailwindCSS, NodeJS, Python, Vite</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/langapp2.png" alt="language app" />
      <WorkImage src="/images/works/langapp.png" alt="language app" />
    </Container>
  </Layout>
)

export default Work