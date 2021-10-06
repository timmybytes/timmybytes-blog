import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import { Section } from '@components/Section'
import { SideNav } from '@components/SideNav'
import type { NextPage } from 'next'
import Link from 'next/link'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

const PROJECTPAGE_LINKS = [
  { url: '#purpose-&-goal', name: 'Purpose & Goal' },
  { url: '#spotlight', name: 'Spotlight' },
  { url: '#status', name: 'Status' },
  { url: '#lessons-learned', name: 'Lessons Learned' },
]

const Page: NextPage = () => {
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
        <Section header='introduction' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
            <Box pb={4}>
              <Text>Banquet comes with the following out of the box:</Text>
              <UnorderedList py={4}>
                <ListItem>
                  Modern React developement: Next.js + TypeScript
                </ListItem>
                <ListItem>
                  Robust UI library: Chakra UI + React Icons included
                </ListItem>
                <ListItem>
                  Flexible styling: Support for CSS Modules with SCSS/SASS
                  and/or inline-styling with Chakra
                </ListItem>
                <ListItem>
                  Testing defaults: Jest + React Testing Library
                </ListItem>
                <ListItem>
                  Customizable templating: Plop.js code generator
                </ListItem>
                <ListItem>
                  Pre-commit and pre-push hooks with Husky and lint-staged,
                  including linting, formatting, type checking, and testing
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Section>
        <Section header='purpose & goal' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
          </Box>
        </Section>
        <Section header='spotlight' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
          </Box>
        </Section>
        <Section header='Status' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
          </Box>
        </Section>
        <Section header='lessons learned' noLine>
          <Box d='flex' flexDir='column' maxW='65ch' gridGap='1rem'>
            <Text pb={4}>
              Banquet is an opinionated starter + boilerplate for creating
              Next.js projects. There are many great starter templates out there
              for settings up a web development project, but Banquet front-loads
              many useful tools and configurations as defaults with less
              tinkering required.
            </Text>
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
