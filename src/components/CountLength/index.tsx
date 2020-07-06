import React from "react"
import styled from "styled-components"
import { useInput } from "../../hooks/useInput"
import { Textarea } from "../Textarea"

export const CountLength = () => {
  const { text, change } = useInput()

  return (
    <Wrapper>
      <Count>{ text.length }</Count>
      <Textarea value={text} onChange={change} />
    </Wrapper>
  )
}

const Count = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
