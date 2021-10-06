import { Image, Box, Text } from '@chakra-ui/react'
import { HeroGrid } from '@components/HeroGrid'
import { Logo } from '@components/Logo'
import { Section } from '@components/Section'
import { SideNav } from '@components/SideNav'
import type { NextPage } from 'next'

const Grid: NextPage = () => {
  return (
    <>
      <Logo />
      <Box as='main' p='0 5vw'>
        <SideNav />
        <HeroGrid />
        <Section header='about'>
          <Box
            d='flex'
            flexDir={{ base: 'column', lg: 'row' }}
            gridGap={{ base: '1rem', lg: '2rem' }}
          >
            <Text w='25ch' py={{ base: 0, lg: '4' }}>
              I’m a developer and creative collaborator living in Portland, OR.
              My tech area of focus is primarily React-based frontend
              development, though I also have experience working in design and
              writing roles, as well as having had the privilege of overseeing
              many large, diverse teams over the years.{' '}
            </Text>
            <Text w='25ch' py={{ base: 0, lg: '4' }}>
              I’m driven by curiosity and the desire to continually improve in
              all the things I do. I really value the process of “tinkering” to
              explore and familiarize yourself with new concepts, so I’m usually
              working on at least a few small projects to keep myself engaged
              and learning.
            </Text>
            <Text w='25ch' py={{ base: 0, lg: '4' }}>
              I’ve also been fortunate to work with some great Lead Engineers,
              Project Managers, and other professionals that have challenged me
              and helped me continue to grow as a developer.
            </Text>
            <Text w='25ch' py={{ base: 0, lg: '4' }}>
              I’m currently open to new developer roles, and I’m especially
              interested in working with teams and products that focus on using
              technology to create greater equity in the world. You can use the
              form below to get in touch. Thanks for stopping by!
            </Text>
          </Box>
        </Section>
        <Section header='projects'>
          <Box d='flex' flexDir={{ base: 'column', md: 'row' }} gridGap='1rem'>
            <Box>
              <Image src='/images/banquet-card.svg' alt='Project logo' />
              <Text>Project name</Text>
              <Text maxW='25ch'>
                I’m a developer and creative collaborator living in Portland,
                OR. My tech area of focus is primarily React-based frontend
                development, though I also have experience working in design and
                writing roles, as well as having had the privilege of overseeing
                many large, diverse teams over the years.{' '}
              </Text>
            </Box>
            <Box>
              <Image
                src='/images/rational-design-logo.svg'
                alt='Project logo'
              />
              <Text>Project name</Text>
              <Text maxW='25ch'>
                I’m a developer and creative collaborator living in Portland,
                OR. My tech area of focus is primarily React-based frontend
                development, though I also have experience working in design and
                writing roles, as well as having had the privilege of overseeing
                many large, diverse teams over the years.{' '}
              </Text>
            </Box>
            <Box>
              <Image src='/images/dotfiles-logo.svg' alt='Project logo' />
              <Text>Project name</Text>
              <Text maxW='25ch'>
                I’m a developer and creative collaborator living in Portland,
                OR. My tech area of focus is primarily React-based frontend
                development, though I also have experience working in design and
                writing roles, as well as having had the privilege of overseeing
                many large, diverse teams over the years.{' '}
              </Text>
            </Box>
          </Box>
        </Section>
        <Section header='contact'></Section>
      </Box>
    </>
  )
}

export default Grid
