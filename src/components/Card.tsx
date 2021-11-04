import React from "react"
import styled from "styled-components"
import { ITool } from "../interface/tool"

type CardProps = ITool

export const Card = ({
  component: Component,
  title,
  description,
}: CardProps): JSX.Element => (
  <Wrapper>
    <h2>{title}</h2>
    <p>{description}</p>
    <Component />
  </Wrapper>
)

const Wrapper = styled.article`
  border-radius: 6px;
  box-shadow: 4px 4px 14px rgba(203, 203, 203, 0.8);
  margin: 20px 10px;
  padding: 10px 20px 20px 20px;

  & > h2 {
    font-size: 1.1em;
    margin-bottom: 1em;
  }
`
