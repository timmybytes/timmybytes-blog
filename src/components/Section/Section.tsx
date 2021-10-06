import { Box, Text } from '@chakra-ui/react'

type SectionProps = {
  header: string
  children?: React.ReactNode
}

export const Section = ({
  header,
  children,
}: SectionProps): React.ReactElement => {
  return (
    <>
      <Box
        p='5rem 10vw'
        maxW={{ base: '90vw', lg: '77vw' }}
        id={header}
        m='0 auto'
      >
        <Box
          d='flex'
          justifyContent='start'
          alignItems='center'
          position='sticky'
          top={0}
          as='h2'
          fontSize='1.5rem'
          m={0}
          fontWeight={900}
          lineHeight='1.2'
          textTransform='lowercase'
          py={2}
        >
          <Box
            as='span'
            d='inline-block'
            h='25px'
            w='25px'
            bg='#D44D5C'
            rounded='full'
            mr={4}
          ></Box>
          {header}{' '}
        </Box>
        <Text borderBottom='5px solid #494cf8' width='100%'></Text>
        {children}
      </Box>
    </>
  )
}
