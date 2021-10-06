import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: props => ({
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    scrollBehavior: 'smooth',
    body: {
      color: mode('#191716', '#F9F4F5')(props),
      bg: mode('#F9F4F5', '#191716')(props),
      fontSize: '14px',
    },
  }),
}
