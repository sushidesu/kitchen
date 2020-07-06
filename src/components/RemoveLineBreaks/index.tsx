import React, { useMemo } from "react"
import styled from "styled-components"
import { useInput } from "../../hooks/useInput"

export const RemoveLineBreaks = () => {
  const { text, change } = useInput()

  const removed = useMemo(() => text.replace(/\r?\n/g, ""), [text])

  return (
    <Wrapper>
      <Textarea value={text} onChange={change}/>
      <Textarea value={removed} readOnly />
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
