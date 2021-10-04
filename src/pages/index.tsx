import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

type FullContainerType = {
  children?: React.ReactNode
}

const FullContainer = ({ children, ...rest }: FullContainerType) => (
  <Box
    p={0}
    m={0}
    boxSizing='border-box'
    // minH={{ base: '90vh', md: '98vh' }}
    d='flex'
    flexDir='column'
    fontSize='14px'
    justifyContent='space-between'
    alignItems='stretch'
    w='100%'
    mb={60}
    {...rest}
  >
    {children}
  </Box>
)

const Header = () => (
  <Box as='header'>
    <Box
      d='flex'
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      p={4}
    >
      <Logo />
    </Box>
    <Box
      as='nav'
      fontWeight={400}
      width={{ base: '100%', sm: '75%', md: '50%', xl: '25%' }}
      d='block'
      transform='rotate(-90deg)'
      position='fixed'
      top={0}
      zIndex={8888}
      right='35px'
      textAlign='center'
      transformOrigin='top right'
    >
      <Box d='flex'>
        <Text textTransform='uppercase' pr={8}>
          Contact
        </Text>
        <Text textTransform='uppercase' pr={8}>
          What
        </Text>
        <Text textTransform='uppercase'>Who</Text>
      </Box>
    </Box>
  </Box>
)

const MotionBox = motion(Box)
function Example() {
  return (
    <MotionBox
      height='20px'
      width='20px'
      rounded='full'
      bg='red.300'
      drag
      dragConstraints={{ top: -50, left: 0, right: 0, bottom: 50 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  )
}

const Home: NextPage = () => {
  return (
    <div style={{ height: '5000px' }}>
      <FullContainer>
        <Header />
        <Box
          d='flex'
          alignItems='center'
          justifyContent='center'
          flexDir='column'
        >
          <Heading
            as='h1'
            fontSize='clamp(2.5rem, -0.875rem + 8.333vw, 6.5rem)'
            textAlign='center'
            mt='4rem'
            fontWeight={600}
          >
            timothy merritt
          </Heading>
          <Text textTransform='uppercase'>frontend developer</Text>
        </Box>
      </FullContainer>
      <Box
        d='flex'
        justifyContent='center'
        alignItems='center'
        p='1rem'
        transform='translateX(-50px)'
        position='sticky'
        top={0}
      >
        <Example />
      </Box>
      <FullContainer>
        <Box
          p={4}
          d='flex'
          flexDir={{ base: 'column', sm: 'row' }}
          w='100%'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            d='grid'
            gridAutoRows='auto'
            justifyContent='center'
            alignItems='flex-start'
            position='relative'
          >
            <Image
              width='100%'
              height='auto'
              maxW='400px'
              p={4}
              src='images/gradients/gradienta-unsplash-0.png'
              alt='gradient'
            />
            <Text
              gridRow={2}
              fontWeight={800}
              py={4}
              position='absolute'
              transform='rotate(-90deg)'
              left={0}
              w='100%'
            >
              Header
            </Text>
            <Text maxW='25ch' p={4} pl={8}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              dignissimos mollitia molestiae quia at exercitationem, unde esse
              aliquid, in vero qui maiores possimus quos culpa ut cupiditate
              nihil facilis quibusdam.
            </Text>
          </Box>
          <Box
            d='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='flex-start'
          >
            <Image
              width='100%'
              height='auto'
              maxW='400px'
              p={4}
              src='images/gradients/gradienta-unsplash-1.png'
              alt='gradient'
            />
            <Text fontWeight={800} p={4}>
              Header
            </Text>
            <Text maxW='25ch' p={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              dignissimos mollitia molestiae quia at exercitationem, unde esse
              aliquid, in vero qui maiores possimus quos culpa ut cupiditate
              nihil facilis quibusdam.
            </Text>
          </Box>
          <Box
            d='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='flex-start'
          >
            <Image
              width='100%'
              height='auto'
              maxW='400px'
              p={4}
              src='images/gradients/gradienta-unsplash-2.png'
              alt='gradient'
            />
            <Text fontWeight={800} p={4}>
              Header
            </Text>
            <Text maxW='25ch' p={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              dignissimos mollitia molestiae quia at exercitationem, unde esse
              aliquid, in vero qui maiores possimus quos culpa ut cupiditate
              nihil facilis quibusdam.
            </Text>
          </Box>
        </Box>
      </FullContainer>
      <Box
        d='flex'
        justifyContent='center'
        alignItems='center'
        p='1rem'
        // transform='translateX(-50px)'
        position='sticky'
        top={0}
      >
        <Example />
      </Box>
      <Box
        d='flex'
        justifyContent='center'
        alignItems='center'
        p='1rem'
        transform='translateX(50px)'
        position='sticky'
        top={0}
      >
        <Example />
      </Box>
    </div>
  )
}

export default Home
