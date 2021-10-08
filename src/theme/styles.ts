import { mode } from '@chakra-ui/theme-tools'
import { colors } from './colors'

export const styles = {
  global: props => ({
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    scrollBehavior: 'smooth',
    body: {
      color: mode(colors.brand.black, colors.brand.white)(props),
      bg: mode(colors.brand.white, colors.brand.black)(props),
      fontSize: '14px',
    },
  }),
}
