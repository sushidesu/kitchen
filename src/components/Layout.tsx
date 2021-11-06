import { Grid, GridItem } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Grid
    minH="100vh"
    gridTemplateRows="44px 1fr 44px"
    gridTemplateAreas={`"header"
"main"
"footer"
`}
  >
    <GridItem gridArea="header">
      <Header />
    </GridItem>
    <GridItem gridArea="main">
      <main>{children}</main>
    </GridItem>
    <GridItem gridArea="footer">
      <Footer />
    </GridItem>
  </Grid>
)
