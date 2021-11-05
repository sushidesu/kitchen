import React from "react"
import {
  useColorMode,
  Heading,
  Flex,
  Spacer,
  Box,
  Switch,
} from "@chakra-ui/react"
import { Container } from "./Container"

export const Header = (): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Container>
      <Flex height="full" alignItems="center">
        <Box>
          <Heading size="lg">Kitchen 🍳</Heading>
        </Box>
        <Spacer />
        <Box>
          <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        </Box>
      </Flex>
    </Container>
  )
}
