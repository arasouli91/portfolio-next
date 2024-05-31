import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbYTX from '../public/images/works/thumbYTX.png'
import thumbGF from '../public/images/works/thumbGF.png'
import thumbYabla from '../public/images/works/thumbYabla.png'
import thumbChess from '../public/images/works/thumbChess.png'
import thumbPM from '../public/images/works/thumbPM.png'
import thumbArkra from '../public/images/works/thumbArkra.png'
import thumbGFWeb from '../public/images/works/gfwebapp.png'
import thumbSongSim from '../public/images/works/songsim.png'
import thumbLangApp from '../public/images/works/langapp2.png'
import thumbDjAssist from '../public/images/works/thumbDjassist.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem class="project-item" id="ytx" title="YouTube MegaPlaylist" thumbnail={thumbYTX}>
            YouTube playlist app adding many useful features 
            and surpassing YouTube&apos;s playlist length limit.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="grafflife"
            title="GraffLife"
            thumbnail={thumbGF}
          >
            Web/Mobile multiplayer graffiti game.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="langapp"
            title="Language Learning AI Chatbot"
            thumbnail={thumbLangApp}
          >
            Language learning AI chatbot that goes far beyond simply providing a wrapper around an LLM.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="omnichess"
            title="OmniChess"
            thumbnail={thumbChess}
          >
            Mobile/Web chess game developed in Unity. Select size of game board.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="djassist"
            title="DJ Assist"
            thumbnail={thumbDjAssist}
          >
            Web app that runs along side DJ software to provide additional functionality.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="arkra"
            title="Arkra Assessment"
            thumbnail={thumbArkra}
          >
            Assessment completed for interview that I put some effort into,
            got an offer.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            class="project-item" 
            id="pmassessment"
            title="PM Assessment"
            thumbnail={thumbPM}
          >
            Assessment completed for interview that I put some effort into,
            got an offer.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem 
            class="project-item" 
            id="yabla" 
            title="Yabla Userscript" 
            thumbnail={thumbYabla}
          >
            Added some features to a Chinese learning app by injecting JS/HTML/CSS
            into Yabla.com.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="grafflifeweb"
            title="GraffLife Web App"
            thumbnail={thumbGFWeb}
          >
            Blazor web app for the GraffLife game. Entity framework and MySQL.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            class="project-item" 
            id="songsimilarity"
            title="Song Similarity"
            thumbnail={thumbSongSim}
          >
            Python script for finding similar songs using audio analysis libraries.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects