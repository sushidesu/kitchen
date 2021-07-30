import { css } from "styled-components"
import { Textarea } from "../Textarea"
import { useInput } from "../../hooks/useInput"

export const clean = (text: string): string => {
  const converter = (line: string): string => {
    let result = line
    result = result.replace(/[^\d\t]/g, "")
    return result
  }

  return text.split("\n")
    .map(converter)
    .join("\n")
}

export function CleanData(): JSX.Element {
  const { text, change } = useInput()
  const cleaned = clean(text)

  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > * + * {
        margin-top: 1em;
      }
    `}>
      <Textarea value={text} onChange={change} />
      <Textarea value={cleaned} readOnly />
    </div>
  )
}
