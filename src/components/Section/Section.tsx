import { Box } from '@chakra-ui/react'

type SectionProps = {
  header?: string
  noLine?: boolean
  noDot?: boolean
  children?: React.ReactNode
}

export const Section = ({
  header = '',
  noLine,
  noDot,
  children,
}: SectionProps): React.ReactElement => {
  const headerDashed = header.toLowerCase().split(' ').join('-')
  return (
    <Box
      as='section'
      p='5rem 10vw'
      maxW={{ base: '90vw', lg: '75vw' }}
      id={headerDashed}
      m='0 auto'>
      <Box
        as='h2'
        d='flex'
        justifyContent='start'
        alignItems='center'
        position='sticky'
        top={0}
        fontSize='1.5rem'
        m={0}
        fontWeight={900}
        lineHeight='1.2'
        textTransform='lowercase'
        py={{ base: 2, sm: 4 }}>
        {!noDot && (
          <Box
            d='inline-block'
            h='25px'
            w='25px'
            bg='brand.red'
            rounded='full'
            mr={4}></Box>
        )}
        {header}{' '}
      </Box>
      {!noLine && (
        <Box
          borderBottom='5px solid'
          borderColor='brand.yellow'
          width='100%'
          mb={4}></Box>
      )}
      {children}
    </Box>
  )
}
