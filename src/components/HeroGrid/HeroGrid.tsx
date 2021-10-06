import { Text } from '@chakra-ui/react'
import { ContentLinks } from './ContentLinks/ContentLinks'
import { ExternalLinks } from './ExternalLinks/ExternalLinks'
import { HeadingText } from './HeadingText/HeadingText'
import { MainGrid } from './MainGrid/MainGrid'
import { MainGridWrapper } from './MainGridWrapper/MainGridWrapper'
import { RedDot } from './RedDot/RedDot'
import { SocialLinkBar } from './SocialLinkBar/SocialLinkBar'

export const HeroGrid = (): React.ReactElement => {
  return (
    <MainGridWrapper>
      <MainGrid>
        <HeadingText />
        <ContentLinks />
        <SocialLinkBar />
        <ExternalLinks />
        <RedDot />
        <Text
          fontSize='.6rem'
          gridRow={{ base: '7', sm: '7' }}
          gridColumn={{ base: '1 / -1', sm: '4' }}>
          after{' '}
          <a
            href='https://labs.jensimmons.com'
            target='_blank'
            rel='noreferrer noopener'>
            Simmons & Tischold
          </a>
        </Text>
      </MainGrid>
    </MainGridWrapper>
  )
}
