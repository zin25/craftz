import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Button,
    Link,
    List,
    ListItem,
    SimpleGrid,
    useColorModeValue 
} from "@chakra-ui/react"
import Section from "../components/section"
import Layout from '../components/layouts/article'
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear, BioSection } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'



const Page = () => {
    return(
        <Layout>
        <Container>
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Azzin Maharil
                </Heading>
                <p>Digital Craftzman</p>
            </Box>
            <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center">
                <Image borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="/images/azin.jpg" 
                alt="Profile Image"/>
            </Box>
            </Box>

            <Section delay={0.3}>
        <List>
          <ListItem>
            <Link href="https://github.com/zin25" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#c6c7cb"
                leftIcon={<IoLogoGithub />}
              >
              </Button>
              </Link>
              
          </ListItem>
          </List>
    </Section>


            <Section delay={0.1}>
            <Paragraph>
            Hello, I'm Fresh Graduate from Universitas Teknokrat Indonesia based on Lampung!
            </Paragraph>
                    <Box align="center" my={4}>
                    <NextLink href="/works" scroll={false}>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    My portfolio
                    </Button>
                    </NextLink>
                    </Box>
                    </Section>

                    <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Bandar Lampung, Indonesia.
                    </BioSection>
                    <BioSection>
                    <BioYear>2022</BioYear>
                    Completed the Bachelor in the Teknokrat University -
                    Faculty of Engineering and Computer Science
                    </BioSection>
                    </Section>
                    <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        I ♥
        </Heading>
        <Paragraph>
        Art, Music,{' '}
        Playing Guitar,{' '}
        Games,
        And
        Everything About Machine Learning and Space.
        </Paragraph>
    </Section>
    
    </Container>
    </Layout>
    )
}

export default Page