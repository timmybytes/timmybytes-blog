import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { HeroGrid } from '@components/HeroGrid'
import { Logo } from '@components/Logo'
import { Section } from '@components/Section'
import { SideNav } from '@components/SideNav'
import type { NextPage } from 'next'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const PROJECTS = [
  {
    url: '/banquet',
    title: 'banquet',
    image: '/images/banquet-card.svg',
    description: 'A Next.js developer starter + boilerplate',
  },
  {
    url: '/findafilm',
    title: 'findafilm',
    image: '/images/findafilm-card.svg',
    description: 'A movie search webapp',
  },
  {
    url: '/rational-design',
    title: 'rational design',
    image: '/images/rational-design-logo.svg',
    description: 'A type-scale generator',
  },
  {
    url: '/dotfiles',
    title: 'dotfiles',
    image: '/images/dotfiles-logo.svg',
    description: 'Personal configurations and custom scripts',
  },
]

const Project = ({
  url,
  title,
  description,
}: {
  url: string
  title: string
  description: string
}): React.ReactElement => {
  return (
    <Box pb={4}>
      <Box>
        <Text
          as='h3'
          fontSize='calc(2.4rem + 1.8vw)'
          lineHeight='1.1'
          fontWeight={900}
          transition='.1s'
          _hover={{
            color: 'brand.red',
          }}>
          <Link href={url} passHref>
            {title}
          </Link>
        </Text>
        <Text>{description}</Text>
        <Link href={url} passHref>
          <Text
            d='flex'
            alignItems='center'
            gridGap='.25rem'
            textTransform='uppercase'
            cursor='pointer'>
            View project <HiOutlineArrowNarrowRight />
          </Text>
        </Link>
      </Box>
    </Box>
  )
}

const HOMEPAGE_LINKS = [
  { url: '#about', name: 'About' },
  { url: '#projects', name: 'Projects' },
  { url: '#contact', name: 'contact' },
]

const Page: NextPage = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <>
      <Logo />
      <Box as='main' p='0 5vw'>
        <SideNav links={HOMEPAGE_LINKS} />
        <HeroGrid />
        <Section header='about' noLine>
          <Box
            d='grid'
            gridTemplateColumns='repeat(auto-fit, 25ch)'
            gridGap='1rem'>
            <Text w='25ch' pb={4}>
              I’m a developer and creative collaborator living in Portland, OR.
              My tech area of focus is primarily React-based frontend
              development, though I also have experience working in design and
              writing roles, as well as having had the privilege of overseeing
              many large, diverse teams over the years.{' '}
            </Text>
            <Text w='25ch' pb={4}>
              I’m driven by curiosity and the desire to continually improve in
              all the things I do. I really value the process of “tinkering” to
              explore and familiarize yourself with new concepts, so I’m usually
              working on at least a few small projects to keep myself engaged
              and learning.
            </Text>
            <Text w='25ch' pb={4}>
              I’ve also been fortunate to work with some great Lead Engineers,
              Project Managers, and other professionals that have challenged me
              and helped me continue to grow as a developer.
            </Text>
            <Text w='25ch' pb={4}>
              I’m currently open to new developer roles, and I’m especially
              interested in working with teams and products that focus on using
              technology to create greater equity in the world.{' '}
              <Text as='a' href='#contact' fontWeight={600}>
                You can use the form below to get in touch.
              </Text>
            </Text>
          </Box>
        </Section>
        <Section header='projects' noLine>
          <Box
            d='grid'
            gridTemplateColumns='repeat(auto-fit, minmax(auto, 75ch))'
            gridGap='1rem'>
            {PROJECTS &&
              PROJECTS.map(({ title, url, description }, idx) => (
                <Project
                  key={idx}
                  title={title}
                  url={url}
                  description={description}
                />
              ))}
          </Box>
        </Section>
        <Section header='contact' noLine>
          <Box as='form' onSubmit={handleSubmit}>
            <FormControl id='name'>
              <FormLabel>Name</FormLabel>
              <Input type='name' />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='message'>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder='Your message'></Textarea>
            </FormControl>
            <Button type='submit'>Submit</Button>
          </Box>
        </Section>
      </Box>
    </>
  )
}

export default Page
