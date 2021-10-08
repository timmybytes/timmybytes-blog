import { Box } from '@chakra-ui/react'

export const RedDot = (): React.ReactElement => (
  <Box
    gridColumn={{ base: '1 / 5', sm: '5' }}
    gridRow={{ base: '3', sm: '6' }}
    fontSize={{ base: '12px', sm: '.9rem' }}
    h={{ base: '0', sm: '25px' }}
    w={{ base: '0', sm: '25px' }}
    bg='brand.red'
    rounded='full'
    alignSelf='end'
    justifyContent='end'
    lineHeight='1.3'
    pb={{ base: 0, sm: '5px' }}></Box>
)
