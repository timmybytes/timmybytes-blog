import { Box, Text } from '@chakra-ui/react'
import { useScrollPosition } from '@hooks/useScrollPosition'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineArrowNarrowUp, HiOutlineHome } from 'react-icons/hi'

type LinkType = {
  url: string
  name: string
}

type SideNavProps = {
  links: LinkType[]
}

export const SideNav = ({ links }: SideNavProps): React.ReactElement => {
  const router = useRouter()
  const scroll = useScrollPosition()
  return (
    <Box
      as='nav'
      fontWeight={400}
      sx={{ writingMode: 'vertical-lr' }}
      position='fixed'
      top='-10'
      right='-20px'
      transform={scroll && scroll > 100 ? 'translateY(5vh)' : 'translateY(5vh)'}
      visibility={scroll && scroll > 100 ? 'visible' : 'hidden'}
      willChange='opacity, visibility'
      transition='opacity 0.3s ease-out, transform 1.2s ease-out'
      opacity={scroll && scroll > 200 ? '1' : '0'}
      h='100vh'>
      <Box d='flex' justifyContent='center' gridGap='1rem' alignItems='center'>
        <Text textTransform='uppercase' pr={8}>
          <a href='#'>
            <HiOutlineArrowNarrowUp />
          </a>
        </Text>
        {links &&
          links.map(({ url, name }, idx) => (
            <Text key={idx} textTransform='uppercase' pr={8}>
              <a href={url}>{name}</a>
            </Text>
          ))}
        {router?.pathname &&
          // Only show 'home' link if not on homepage
          router.pathname !== '/' && (
            <Text textTransform='uppercase' pr={8} cursor='pointer'>
              <Link href='/' passHref>
                <HiOutlineHome />
              </Link>
            </Text>
          )}
      </Box>
    </Box>
  )
}
