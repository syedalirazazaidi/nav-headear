import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/customTheme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
