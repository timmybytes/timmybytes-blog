import { Box, Text, useColorMode } from '@chakra-ui/react'

const CONTENT_LINKS = [
  {
    url: '#about',
    name: 'About',
  },
  {
    url: '#projects',
    name: 'Projects',
  },
  {
    url: '#contact',
    name: 'Contact',
  },
]

type Link = {
  url: string
  name: string
}

type ContentLinksProps = {
  accentColor?: string
  links?: Link[]
}

export const ContentLinks = ({
  links = CONTENT_LINKS,
  accentColor = 'brand.blue',
}: ContentLinksProps): React.ReactElement => {
  const { colorMode } = useColorMode()
  return (
    <Box
      gridColumn={{ base: '1 / -1', sm: '1 / 3' }}
      gridRow={{ base: '3', sm: '4 / span 2' }}
      lineHeight='1.2'
      alignSelf='end'
      justifySelf='start'>
      <Text
        d='flex'
        alignItems='center'
        justifyContent='end'
        as='h2'
        borderBottom='5px solid'
        borderColor={accentColor}
        fontSize={{ base: '1.5rem', sm: '1.95rem' }}
        m={0}
        py={2}
        fontWeight={900}
        lineHeight='1.2'
        textTransform='lowercase'
        textAlign={{ base: 'left', sm: 'right' }}>
        <Box
          as='span'
          d='inline-block'
          h='25px'
          w='25px'
          bg='brand.red'
          rounded='full'
          mr={4}></Box>
        Contents
      </Text>
      <Box
        as='ul'
        sx={{ listStyle: 'none' }}
        p='.5rem 0'
        fontWeight={700}
        textAlign={{ base: 'left', sm: 'right' }}
        textTransform='uppercase'>
        {links &&
          links.map(({ url, name }, idx) => (
            <Box as='li' key={idx}>
              <Text
                as='a'
                color={colorMode === 'dark' ? 'brand.white' : 'brand.black'}
                href={url}>
                {name}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  )
}
