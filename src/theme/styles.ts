import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: props => ({
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    scrollBehavior: 'smooth',
    body: {
      color: mode('#000', 'whiteAlpha.900')(props),
      bg: mode('#fff', '#222')(props),
      fontSize: '14px',
    },
    a: {
      color: 'cyan.600',
      transition: '.3s',
      _hover: {
        color: 'cyan.800',
      },
    },
  }),
}
