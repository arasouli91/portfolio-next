import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbYTX from '../public/images/works/thumbYTX.png'
import thumbGF from '../public/images/works/thumbGF.png'
import thumbYabla from '../public/images/works/thumbYabla.png'
import thumbChess from '../public/images/works/thumbChess.png'
import thumbPM from '../public/images/works/thumbPM.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ytx" title="YouTube MegaPlaylist" thumbnail={thumbYTX}>
            YouTube playlist app adding many useful features and surpassing YouTube's
            playlist length limit.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="grafflife"
            title="GraffLife"
            thumbnail={thumbGF}
          >
            Web/Mobile multiplayer graffiti game.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="omnichess"
            title="OmniChess"
            thumbnail={thumbChess}
          >
            Mobile/Web chess game developed in Unity. Select size of game board.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="yabla" title="Yabla Userscript" thumbnail={thumbYabla}>
            Added some features to a Chinese learning app by injecting JS/HTML/CSS
            into Yabla.com.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="pmassessment"
            title="PM Assessment"
            thumbnail={thumbPM}
          >
            Assessment completed for interview that I put a little effort into,
            but I didn't take offer.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
