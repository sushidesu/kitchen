import styled from "styled-components"
import { Textarea } from "../Textarea"
import { useInput } from "../../hooks/useInput"

export function TableGenerator() {
  const { text, change } = useInput()

  const rows = text.split("\n")
  const first = rows[0]
  const rest = rows.splice(1)
  const numOfColumns = text?.split("\n")[0]?.split("\t")?.length
  const BAR = "---"
  const bars = Array.from({ length: numOfColumns }, () => BAR).join("\t")
  const barInserted = [first, bars, ...rest]

  const converted = barInserted.join("\n")
    .replace(/\t/g, " | ")
    .replace(/(\n)/g, " |$1| ")
    .replace(/^(.)/g, "| $1")
    .replace(/(.)$/g, "$1 |")
    // .replace(/(\n)(.)$/g, "$1| $1")

  return (
    <Wrapper>
      <p>{numOfColumns}</p>
      <Textarea value={text} onChange={change} />
      <Textarea value={converted} readOnly />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(first-child) {
    margin-top: 1em;
  }
`
