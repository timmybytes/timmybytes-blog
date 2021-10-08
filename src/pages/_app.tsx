import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/kanit/100.css'
import '@fontsource/kanit/200.css'
import '@fontsource/kanit/300.css'
import '@fontsource/kanit/400.css'
import '@fontsource/kanit/500.css'
import '@fontsource/kanit/600.css'
import '@fontsource/kanit/700.css'
import '@fontsource/kanit/800.css'
import '@fontsource/kanit/900.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/700.css'
// import { Layout } from '@components/Layout'
import { theme } from '@theme/index'
import type { AppProps } from 'next/app'
// import { DataProvider } from '@context/DataContext'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
