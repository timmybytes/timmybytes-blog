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
      </MainGrid>
    </MainGridWrapper>
  )
}
