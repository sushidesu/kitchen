import React from "react"
import styled from "styled-components"

export const RemoveSpaces = () => {
  return (
    <Wrapper>
      <Textarea />
      <Textarea />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > textarea:first-child {
    margin-bottom: 1em;
  }
`

const Textarea = styled.textarea`
  min-width: 300px;
  min-height: 100px;
  resize: none;
`
