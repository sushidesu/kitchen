import React from "react"
import styled from "styled-components"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 44px 1fr 44px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";

  & > header {
    grid-area: header;
  }
  & > main {
    grid-area: main;
  }
  & > footer {
    grid-area: footer;
  }
`
