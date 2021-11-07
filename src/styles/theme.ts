import { ThemeConfig, extendTheme } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  fonts: {
    // ref: https://zenn.dev
    body: `-apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji"`,
    heading: `-apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji"`,
  },
})

export default theme
