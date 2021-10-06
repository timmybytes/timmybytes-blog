import { Box, Text } from '@chakra-ui/react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const EXTERNAL_LINKS = [
  { url: 'https://dev.to/timmybytes', name: 'Writing' },
  { url: 'https://animalpolitik.org', name: 'Music' },
]

type Link = {
  url: string
  name: string
}

type ExternalLinksProps = {
  links?: Link[]
}

export const ExternalLinks = ({
  links = EXTERNAL_LINKS,
}: ExternalLinksProps): React.ReactElement => {
  return (
    <Box
      borderTop='5px solid #494cf8'
      borderBottom='5px solid #494cf8'
      fontWeight={700}
      gridColumn={{ base: '1 / -1', sm: '5 / 6' }}
      gridRow={{ base: '4', sm: '2' }}
      justifySelf='start'
      alignSelf={{ base: 'flex-start', sm: 'start' }}
      textAlign={{ base: 'left', sm: 'left' }}>
      <Box as='ul' p={0} sx={{ listStyle: 'none' }}>
        {links &&
          links.map(({ url, name }, idx) => (
            <Box as='li' key={idx}>
              <Text
                as='a'
                href={url}
                target='_blank'
                rel='noreferrer noopener'
                d='inline-flex'
                justifyContent='space-evenly'
                alignItems='center'
                gridGap='.25rem'
                textTransform='uppercase'
                fontWeight={700}>
                <Text as='span'>{name} </Text>
                <HiOutlineArrowNarrowRight />
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  )
}
