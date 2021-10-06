import { Box, Text } from '@chakra-ui/react'

const HEADING_TEXT: [string, string, string] = [
  'Timothy Merritt',
  'is a',
  'frontend developer',
]

type HeadingTextProps = {
  text?: [string, string, string]
}

export const HeadingText = ({
  text = HEADING_TEXT,
}: HeadingTextProps): React.ReactElement => (
  <>
    <Box
      gridColumn={{ base: '1 / -1', sm: '1 / 4' }}
      textAlign='right'
      fontSize='calc(1.5rem + 1.8vw)'
      m={0}
      lineHeight='1.2em'
      textTransform='lowercase'
      fontWeight={900}>
      <Text as='h1'>{text[0]}</Text>
      <Text as='h1'>{text[1]}</Text>
    </Box>
    <Box
      sx={{ writingMode: 'vertical-rl' }}
      gridColumn={{ base: '5', sm: '4 / 4' }}
      gridRow={{ base: '2 / -1', sm: '1 / 5' }}
      justifySelf='start'
      alignSelf='start'
      textAlign='left'
      fontSize='calc(1.6rem + 1.8vw)'
      lineHeight='1em'
      textTransform='lowercase'
      fontWeight={900}
      color='#494cf8'>
      <Text as='h1' pt={{ base: 0, sm: 4 }}>
        {text[2]}
      </Text>
    </Box>
  </>
)
