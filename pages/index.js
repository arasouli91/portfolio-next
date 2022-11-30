import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section' 
import {  IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Amir Rasouli
          </Heading>
          <p>Full-Stack Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
          Bachelors of Computer Science<br/>
          Southern New Hampshire University<br/>
          • Graduated November 2019<br/>
          • GPA: 4.0
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioYear>Microsoft, Software Engineer | Aug 22 - Now</BioYear><br/>
        Work with Kusto and Cosmos databases. KQL and Cosmos SCOPE script.<br/>
        <BioYear>Meta, Software Engineer | Dec 21 - Jun 22</BioYear><br/>
        • Worked on E2E testing platform for verifying user privacy commitments.<br/>
        • Debugging test user events as they flow through backend systems. Hack/PHP.<br/>
        <BioYear>Microsoft, Software Engineer | Apr 21 - Oct 21</BioYear><br/>
        • Worked on various projects involving frontend and backend development. Bing and MSN.<br/>
        • Used C# w/ .NET MVC on backend.<br/>
        • Frontend projects involved JS/TS, HTML, CSS/SASS, React/Redux, Blazor, and other tech.<br/>
        • Developed new page on MSN. Mostly React/Redux used in this project.<br/>
        <BioYear>Emerson, Software Engineer Co-op | Jan 19 - Sep 19</BioYear><br/>  
        • Worked on various projects, completed and added functionality to pre-existing projects.<br/>
        • Developed C# utility programs for enterprise software.<br/>
        • Added functionality to AMS Device Manager enterprise software, C++ legacy code.<br/>
        <BioYear>Zamphyr, Software Engineer Intern | Apr 18 - Aug 18</BioYear><br/>        
        • Developing a multi-language, browser-based, embeddable IDE compiled to WebAssembly.<br/>
        • Integrating C/C++ and JavaScript with Emscripten and WebAssembly.<br/>
        • Multi-threading with HTML5 Web Workers.<br/>
        <BioYear>Pulse-Micro, Software Engineer Intern | Jan 18 - Apr 18</BioYear><br/>
        • Javascript, HTML/CSS, SQL, C#, and Java<br/>
        • Work on a variety of codebases for web and mobile applications.<br/>
        <BioYear>Santa Barbara City College, Math Lab Tutor | Jan 16 - Jun 16</BioYear><br/>
        • Tutor all levels of math up to Calculus II.<br/>
        • Tutor up to groups of 6 people at once, using whiteboards.<br/>
        • Derive equations and give in-depth explanations of concepts.<br/>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <List>
          <ListItem>
          C++, C#/.NET/Core, JavaScript/TS, React/Redux, HTML/CSS, SQL/MySQL, 
          Algorithms and Data Structures, MongoDB, HTML5, SASS, Blazor, 
          Emscripten/WebAssembly, Linux, Object Oriented Design, Responsive Design,
          Accessibility, Hack/PHP, JSON, XML, Jest, KQL, Unity, UML, Git, 
          Java, Python, Lua
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Accounts
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/arasouli91" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @arasouli91
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/amir-rasouli" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @amir-rasouli
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
