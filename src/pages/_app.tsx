import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import "../../src/styles/global.css"
import theme from "../styles/theme"

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
