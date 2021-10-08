import {
  Box,
  Code,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import { Section } from '@components/Section'
import { SideNav } from '@components/SideNav'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const PROJECTPAGE_LINKS = [
  { url: '#purpose-&-goal', name: 'Purpose' },
  { url: '#spotlight', name: 'Spotlight' },
  { url: '#status', name: 'Status' },
  { url: '#lessons-learned', name: 'Lessons' },
]

type ThickCodeProps = {
  children?: React.ReactNode
}

const ThickCode = ({
  children,
  ...rest
}: ThickCodeProps): React.ReactElement => (
  <Code
    fontFamily='IBM Plex Mono'
    bg='none'
    fontSize='12px'
    fontWeight={500}
    px='3px'
    lineHeight='inherit'
    d='inline'
    {...rest}>
    {children}
  </Code>
)

const ThickCodeBlock = ({ children }: ThickCodeProps) => (
  <Code
    fontFamily='IBM Plex Mono'
    bg='none'
    fontSize='12px'
    fontWeight={500}
    px='3px'
    lineHeight='inherit'
    d='inline'
    sx={{
      display: 'block',
      whiteSpace: 'pre',
      overflowX: 'scroll',
      maxW: '100%',
      minW: '100px',
      padding: '1rem',
    }}>
    {children}
  </Code>
)

const Page: NextPage = () => {
  const { onClose, isOpen, onOpen } = useDisclosure()
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Logo />
      <Box as='main' p='0 5vw'>
        <Box p='5rem 10vw' maxW={{ base: '90vw', lg: '75vw' }} m='0 auto'>
          <Box
            d='flex'
            justifyContent='start'
            alignItems='center'
            position='sticky'
            top={0}
            as='h1'
            fontSize='calc(3.4rem + 1.8vw)'
            m={0}
            fontWeight={900}
            lineHeight='1.2'
            textTransform='lowercase'
            py={{ base: 2, sm: 4 }}>
            banquet
          </Box>
        </Box>
        <SideNav links={PROJECTPAGE_LINKS} />
        {/* INTRO */}
        <Box
          d='grid'
          maxW={{ base: '80vw', lg: '75vw' }}
          pl={{ base: '2rem', md: '0' }}
          gridTemplateColumns={{
            base: '1fr 1fr 1fr 1fr',
            md: '1fr 1fr 1fr .25fr',
          }}
          gridTemplateRows='.5fr .5fr .5fr'
          gridGap='1rem'>
          <Image
            src='/images/banquet-1.png'
            rounded='sm'
            shadow='xl'
            w='100%'
            maxW='800px'
            alt='Banquet screenshot'
            gridColumn={{ base: '1 / 4', md: '1 / 3' }}
            gridRow='1 / 3'
            onClick={onOpen}
          />
          <Image
            src='/images/banquet-2.png'
            rounded='sm'
            shadow='xl'
            w='100%'
            maxW='800px'
            alt='Banquet screenshot'
            gridColumn={{ base: '2 / 5', md: '2 / 4' }}
            gridRow='2 / 3'
          />
        </Box>
        <Section header='introduction' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is an all-in-one website starter written in Next.js with
              TypeScript. It offers a robust template that can be built out to
              accommodate any frontend needs, with a focus on developer
              experience and writing scalable, strict code. To that end, it
              comes preconfigured with linting, formatting, testing, automated
              code generation, and a robust UI with Chakra and React Icons. As
              such, Banquet offers a “feast” of tooling and structure to get you
              started building any kind of modern site you need.
            </Text>
            <Text fontSize='xs' m='0 auto'>
              Click to enlarge
            </Text>
            <Box
              maxW={{ base: '80vw', lg: '100%' }}
              m='0 auto'
              justifyContent='center'
              d='grid'
              gridTemplateColumns='1fr 1fr 1fr'
              gridTemplateRows='1fr 1fr 1fr'
              gridGap='1rem'>
              <Zoom
                wrapStyle={{
                  width: '100%',
                  gridRow: '1',
                }}>
                <Image
                  src='/images/banquet-4.png'
                  rounded='sm'
                  shadow='xl'
                  w='100%'
                  alt='Banquet screenshot'
                />
              </Zoom>
              <Zoom
                wrapStyle={{
                  width: '100%',
                  gridRow: '1',
                }}>
                <Image
                  src='/images/banquet-3.png'
                  rounded='sm'
                  shadow='xl'
                  w='100%'
                  alt='Banquet screenshot'
                />
              </Zoom>
              <Zoom
                wrapStyle={{
                  width: '100%',
                  gridRow: '1',
                }}>
                <Image
                  src='/images/banquet-3.png'
                  rounded='sm'
                  shadow='xl'
                  w='100%'
                  alt='Banquet screenshot'
                />
              </Zoom>
              <Zoom
                wrapStyle={{
                  width: '100%',
                  gridRow: '2',
                }}>
                <Image
                  src='/images/banquet-3.png'
                  rounded='sm'
                  shadow='xl'
                  w='100%'
                  alt='Banquet screenshot'
                />
              </Zoom>
              <Zoom
                wrapStyle={{
                  width: '100%',
                  gridRow: '2',
                }}>
                <Image
                  src='/images/banquet-3.png'
                  rounded='sm'
                  shadow='xl'
                  w='100%'
                  alt='Banquet screenshot'
                />
              </Zoom>
              <Zoom
                wrapStyle={{
                  width: '100%',
                  gridRow: '2',
                }}>
                <Image
                  src='/images/banquet-3.png'
                  rounded='sm'
                  shadow='xl'
                  w='100%'
                  alt='Banquet screenshot'
                />
              </Zoom>
            </Box>
          </Box>
        </Section>
        <Section header='purpose & goal' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              The idea for Banquet came from the repetition of using tools like
              <ThickCode>create-react-app</ThickCode> and{' '}
              <ThickCode>create-next-app</ThickCode>. While each is a powerful,
              highly usable tool in its own right, I found that whenever
              creating a new project with them I still ended up having to spend
              a large amount of time removing unneeded boilerplate and having to
              configure a suite of dependencies before I could get started. The
              goal with Banquet was to incorporate a system of boilerplate
              easier to substitute with custom content, as well as remove the
              barrier to entry for development by adding crucial tools not
              usually present in most other templates.
            </Text>
          </Box>
        </Section>
        <Section header='spotlight' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Two of the best custom features included with Banquet are its git
              hook workflow and its automated code generation.
            </Text>
            <Text pb={4}>
              Banquet uses Plop.js in combination with Handlebars-styled
              templates for creating new components and pages from the command
              line, affectionately named the <ThickCode>bake</ThickCode>{' '}
              command. It comes preconfigured with templates for a standard
              TypeScript TSX component, SCSS file, Jest/Testing Library tests,
              and a generic new Next.js Page. By running{' '}
              <ThickCode>yarn bake</ThickCode> from the CLI, the user is
              presented with a menu of options to choose from. In the most
              straightforward use case, typing{' '}
              <ThickCode>yarn bake Component NewComponentName</ThickCode>{' '}
              creates a directory in <ThickCode>src/components</ThickCode> with:
            </Text>
            <UnorderedList>
              <ListItem>
                A template TSX file with default type declarations and imports
              </ListItem>
              <ListItem>
                A (optional) accompanying test file that defaults to checking
                whether the component renders
              </ListItem>
              <ListItem>
                A (optional) default index file for exporting all modules from
                the directory
              </ListItem>
              <ListItem>A (optional) SCSS module file</ListItem>
            </UnorderedList>
            <Text pb={4}>
              This results in the following structure, all from one simple
              command:
            </Text>
            <Box as='pre'>
              {/* prettier-ignore */}
              <ThickCodeBlock>
{`src/
  components/
    NewComponentName/
      NewComponentName.tsx
      NewComponentName.test.tsx
      NewComponentName.module.scss
      index.ts
`}
            </ThickCodeBlock>
            </Box>
            <Text pb={4}>
              The <ThickCode>bake</ThickCode> command also includes fallbacks in
              case the user simply enters through the generator menu, as well as
              functions to randomize names for untitled components to avoid
              duplicates.
            </Text>
            <Text pb={4}>
              Including a Plop generator was so pleasant to use during the
              development of Banquet that I now typically use it all the time
              when developing other projects as well.
            </Text>
            <Text pb={4}>
              Banquet also includes a robust workflow for formatting and caching
              errors with lint-staged, Husky, Prettier, ESLint, Jest with React
              Testing Library, and the TypeScript compiler each time you make a
              commit. First, when staged files are committed, ESLint checks for
              and fixes any linting errors via the included config file. Then
              Prettier makes a pass to format all staged files appropriately.
              Finally, any test files associated with the staged files are run.
            </Text>
            <Text pb={4}>
              If any of these processes fail, the commit fails with warning
              messages and gives the user a chance to fix any issues before they
              leave the local repo. As a final check, there is also a{' '}
              <ThickCode>pre-push</ThickCode>
              hook that does a type-check on all TypeScript code as well. If all
              these stages pass, the commit is allowed to be pushed remotely,
              and through the process the stability and strictness of the commit
              is much more reliable—especially when working with other
              maintainers or collaborators.
            </Text>
          </Box>
        </Section>
        <Section header='Status' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is actively maintained, though I’m not adding any new
              features at the moment.
            </Text>
          </Box>
        </Section>
        <Section header='lessons learned' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              One of the biggest issues I had to deal with in straddling the
              line between creating a template starter and a boilerplate site
              was deciding how much structure was “too much”, and how
              over-customization might be frustrating for some users.
              Admittedly, Banquet is promoted as an “opinionated” project, but I
              didn’t want to make it too difficult for users to shape it to
              their own tastes.
            </Text>
            <Text pb={4}>
              One area where this balance was particularly tricky was in
              deciding how much of Chakra-UI components to leave bare-bones, and
              when to create more specific (but with possibly less use cases).
              There are some custom Layout components that are still simple
              enough in their configuration to be used in a variety of ways, but
              I did create a couple more narrowly-focused components based on
              the standard Chakra modal: a{' '}
              <ThickCode>{`<ImageModal />`}</ThickCode> and
              <ThickCode>{`<Carousal />`}</ThickCode>.
            </Text>
            <Text pb={4}>
              These were intended to be the first in a series of similarly
              customized and expanded components based on Chakra’s UI, and while
              I’m satisfied with the way the came out, I realized that were I to
              continue with more and more such components, I would end up closer
              to creating another UI library rather than a reusable template. I
              think it can be easy to want to keep scaling, keep widening the
              depth of support for what you’re creating, but it pays to have a
              sense of the bigger picture at hand and know when to stop, switch
              gears, and move on.
            </Text>
            <Text pb={4}>
              All in all, Banquet was a fun project to build that I hope others
              find useful for their own needs. Much of what I learned and built
              while working on it has already become more ingrained in my own
              daily development, and I’m thankful for all I learned during the
              process.
            </Text>
            <Text pb={4}></Text>
          </Box>
        </Section>
        <Box p='5rem 10vw' maxW={{ base: '90vw', lg: '75vw' }} m='0 auto'>
          <Link href='/' passHref>
            <Box
              d='flex'
              justifyContent='start'
              alignItems='center'
              position='sticky'
              top={0}
              as='h1'
              fontSize='1.5rem'
              m={0}
              fontWeight={900}
              lineHeight='1.2'
              textTransform='lowercase'
              gridGap='1rem'
              cursor='pointer'
              py={{ base: 2, sm: 4 }}>
              <HiOutlineArrowNarrowLeft /> Back to home
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Page
