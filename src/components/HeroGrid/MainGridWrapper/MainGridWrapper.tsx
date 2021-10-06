import { Box } from '@chakra-ui/react'

type MainGridWrapperProps = {
  children?: React.ReactNode
}

export const MainGridWrapper = ({
  children,
}: MainGridWrapperProps): React.ReactElement => (
  <Box
    d='flex'
    m='auto'
    p='5rem 0'
    minH='90vh'
    mb={{ base: '4rem', sm: '10rem' }}
  >
    {children}
  </Box>
)
