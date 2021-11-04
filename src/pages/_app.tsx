import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import "../../src/styles/global.css"

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
