import React from "react"
import styled from "styled-components"
import { Container } from "./Container"

export const Header = (): JSX.Element => (
  <Wrapper>
    <Container>
      <Title>Kitchen 🍳</Title>
    </Container>
  </Wrapper>
)

const Wrapper = styled.header`
  background-color: #fff;
  border-bottom: 2px solid #efefef;
`

const Title = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1.4em;
  line-height: 44px;
  margin-left: 8px;
`
