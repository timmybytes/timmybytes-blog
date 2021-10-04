import { Box, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Logo = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <svg
      onClick={toggleColorMode}
      width='28'
      height='28'
      viewBox='0 0 800 612'
      fill={colorMode === 'dark' ? '#fff' : '#000'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M528.727 589.522H615.434L617.772 184.292C617.959 151.975 591.911 125.777 559.594 125.777H472.886L470.548 531.007C470.362 563.324 496.409 589.522 528.727 589.522Z'
        fill={colorMode === 'dark' ? '#fff' : '#000'}
        stroke={colorMode === 'dark' ? '#fff' : '#000'}
      />
      <path
        d='M355.586 589.522H442.293L444.641 182.6C444.828 150.283 418.78 124.085 386.463 124.085H299.756L297.408 531.007C297.221 563.324 323.269 589.522 355.586 589.522Z'
        fill={colorMode === 'dark' ? '#fff' : '#000'}
        stroke={colorMode === 'dark' ? '#fff' : '#000'}
      />
      <path
        d='M701.867 589.522H788.575L790.908 185.078C791.095 152.761 765.047 126.563 732.73 126.563H646.023L643.689 531.007C643.502 563.324 669.55 589.522 701.867 589.522Z'
        fill={colorMode === 'dark' ? '#fff' : '#000'}
        stroke={colorMode === 'dark' ? '#fff' : '#000'}
      />
      <path
        d='M213.826 22.5L127.119 22.5L124.185 531.007C123.999 563.324 150.046 589.522 182.363 589.522H269.071L272.005 81.0152C272.191 48.6982 246.144 22.5 213.826 22.5Z'
        fill={colorMode === 'dark' ? '#fff' : '#000'}
        stroke={colorMode === 'dark' ? '#fff' : '#000'}
      />
      <path
        d='M268.896 266.675V145.021C268.896 132.004 258.343 121.391 245.327 121.316L67.0152 120.287C34.6982 120.101 8.50008 146.148 8.50008 178.466V265.173L268.896 266.675Z'
        fill={colorMode === 'dark' ? '#fff' : '#000'}
        stroke={colorMode === 'dark' ? '#fff' : '#000'}
      />
    </svg>
  )
}

type FullContainerType = {
  children?: React.ReactNode
}

const FullContainer = ({ children, ...rest }: FullContainerType) => (
  <Box
    p={0}
    m={0}
    boxSizing='border-box'
    minH={{ base: '90vh', md: '98vh' }}
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
    <>
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
        <Box
          d='flex'
          justifyContent='center'
          alignItems='center'
          w='100%'
          h='100px'
        >
          <Example />
          {/* <Text textTransform='uppercase'>Arrow</Text> */}
        </Box>
      </FullContainer>
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
    </>
  )
}

export default Home
