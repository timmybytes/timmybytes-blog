import { Text } from '@chakra-ui/react'
import { GrLinkedin, GrTwitter } from 'react-icons/gr'

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/timmybytes',
    icon: <GrTwitter />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/timmybytes',
    icon: <GrLinkedin />,
  },
]

type SocialLink = {
  name: string
  url: string
  icon: React.ReactNode
}

type SocialLinkBarProps = {
  accentColor: string
  links?: SocialLink[]
}

export const SocialLinkBar = ({
  links = SOCIAL_LINKS,
  accentColor = 'brand.blue',
}: SocialLinkBarProps): React.ReactElement => (
  <Text
    gridColumn={{ base: '1 / -1', sm: '1 / 5' }}
    gridRow={{ base: '6', sm: '6' }}
    fontSize='1.5rem'
    borderBottom={{
      base: '10px solid',
      sm: '25px solid',
    }}
    borderColor={{ base: accentColor, sm: accentColor }}
    alignSelf='start'
    justifyContent='end'
    lineHeight='1.3'
    pb={{ base: 0, sm: '5px' }}
    d='flex'
    gridGap='.5rem'>
    {links &&
      links.map(({ name, url, icon }, idx) => (
        <Text
          key={idx}
          as='a'
          href={url}
          target='_blank'
          rel='noreferrer noopener'
          aria-label={name}>
          {icon}
        </Text>
      ))}
  </Text>
)
