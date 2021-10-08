import { Code } from '@chakra-ui/react'

type BlockCodeProps = {
  children?: React.ReactNode
}

export const BlockCode = ({
  children,
  ...rest
}: BlockCodeProps): React.ReactElement => (
  <Code
    fontFamily='IBM Plex Mono'
    bg='none'
    fontSize='12px'
    fontWeight={500}
    px='3px'
    lineHeight='inherit'
    d='inline'
    sx={{
      display: 'block',
      whiteSpace: 'pre',
      overflowX: 'scroll',
      maxW: '100%',
      minW: '100px',
      padding: '1rem',
    }}>
    {children}
  </Code>
)
