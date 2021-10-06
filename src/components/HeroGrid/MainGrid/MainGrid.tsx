import { Box } from '@chakra-ui/react'

type GridType = {
  children: React.ReactNode
}

export const MainGrid = ({ children }: GridType): React.ReactElement => (
  <Box
    maxW='1100px'
    w='73vw'
    d='grid'
    m='auto'
    gridTemplateColumns='auto 1fr 1fr 1fr 0.5fr'
    gridTemplateRows={{
      base: 'auto auto auto auto',
      sm: 'auto 1fr 1fr auto auto',
    }}
    gridGap='1rem'
    textAlign='right'
    transform={{ base: 'none', md: 'rotate(-45deg)' }}
  >
    {children}
  </Box>
)
