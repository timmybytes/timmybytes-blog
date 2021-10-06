import { Box, Text } from '@chakra-ui/react'
import { useScrollPosition } from '@hooks/useScrollPosition'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'

export const SideNav = (): React.ReactElement => {
  const scroll = useScrollPosition()
  return (
    <Box
      as='nav'
      fontWeight={400}
      sx={{ writingMode: 'vertical-lr' }}
      position='fixed'
      top={0}
      right='-20px'
      transform={scroll && scroll > 100 ? 'translateY(5vh)' : 'translateY(5vh)'}
      visibility={scroll && scroll > 100 ? 'visible' : 'hidden'}
      willChange='opacity, visibility'
      transition='opacity 0.3s ease-out, transform 1.2s ease-out'
      opacity={scroll && scroll > 200 ? '1' : '0'}
      h='100vh'
    >
      <Box d='flex' justifyContent='center' gridGap='1rem' alignItems='center'>
        <Text textTransform='uppercase' pr={8}>
          <a href='#'>
            <HiOutlineArrowNarrowUp />
          </a>
        </Text>
        <Text textTransform='uppercase' pr={8}>
          <a href='#about'>About</a>
        </Text>
        <Text textTransform='uppercase' pr={8}>
          <a href='#projects'>Projects</a>
        </Text>
        <Text textTransform='uppercase' pr={8}>
          <a href='#contact'>Contact</a>
        </Text>
      </Box>
    </Box>
  )
}
