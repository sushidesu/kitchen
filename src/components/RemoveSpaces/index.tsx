import React, { useState, useCallback, useMemo } from "react"
import styled from "styled-components"

export const RemoveSpaces = () => {
  const [text, setText] = useState("")

  const change = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }, [setText])

  const removed = useMemo(() => text.replace(/\s/g, ""), [text])

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
