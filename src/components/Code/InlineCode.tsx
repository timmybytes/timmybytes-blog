import { Code } from '@chakra-ui/react'

type InlineCodeProps = {
  children?: React.ReactNode
}

export const InlineCode = ({
  children,
  ...rest
}: InlineCodeProps): React.ReactElement => (
  <Code
    fontFamily='IBM Plex Mono'
    bg='none'
    fontSize='12px'
    fontWeight={500}
    px='3px'
    lineHeight='inherit'
    d='inline'
    {...rest}>
    {children}
  </Code>
)
