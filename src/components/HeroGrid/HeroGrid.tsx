import { Text } from '@chakra-ui/react'
import { ContentLinks } from './ContentLinks/ContentLinks'
import { ExternalLinks } from './ExternalLinks/ExternalLinks'
import { HeadingText } from './HeadingText/HeadingText'
import { MainGrid } from './MainGrid/MainGrid'
import { MainGridWrapper } from './MainGridWrapper/MainGridWrapper'
import { RedDot } from './RedDot/RedDot'
import { SocialLinkBar } from './SocialLinkBar/SocialLinkBar'

export const HeroGrid = (): React.ReactElement => {
  const accentColor = 'brand.red'
  return (
    <MainGridWrapper>
      <MainGrid>
        <HeadingText accentColor={accentColor} />
        <ContentLinks accentColor={accentColor} />
        <SocialLinkBar accentColor={accentColor} />
        <ExternalLinks accentColor={accentColor} />
        <RedDot />
        <Text
          fontSize='.6rem'
          gridRow={{ base: '7', sm: '7' }}
          gridColumn={{ base: '1 / -1', sm: '4' }}>
          <a
            href='https://labs.jensimmons.com'
            target='_blank'
            rel='noreferrer noopener'>
            {'{ after Simmons & Tischold }'}
          </a>
        </Text>
      </MainGrid>
    </MainGridWrapper>
  )
}
