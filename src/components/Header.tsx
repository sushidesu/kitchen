import React from "react"
import { Heading, Flex, Spacer, Box, Switch } from "@chakra-ui/react"
import { Container } from "./Container"

export const Header = (): JSX.Element => (
  <Container>
    <Flex height="full" alignItems="center">
      <Box>
        <Heading size="lg">Kitchen 🍳</Heading>
      </Box>
      <Spacer />
      <Box>
        <Switch />
      </Box>
    </Flex>
  </Container>
)
