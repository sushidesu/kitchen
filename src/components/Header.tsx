import React from "react"
import styled from "styled-components"
import { Flex, Spacer, Box, Switch } from "@chakra-ui/react"
import { Container } from "./Container"

export const Header = (): JSX.Element => (
  <Container>
    <Flex alignItems="center">
      <Box>
        <Title>Kitchen 🍳</Title>
      </Box>
      <Spacer />
      <Box>
        <Switch />
      </Box>
    </Flex>
  </Container>
)

const Title = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1.4em;
  line-height: 44px;
  margin-left: 8px;
`
