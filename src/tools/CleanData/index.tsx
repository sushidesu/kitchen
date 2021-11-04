import { css } from "styled-components"
import { Textarea } from "../../components/Textarea"
import { useInput } from "../../hooks/useInput"
import { cleanData } from "./cleanData"

export function CleanData(): JSX.Element {
  const { text, change } = useInput()
  const cleaned = cleanData(text)

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > * + * {
          margin-top: 1em;
        }
      `}
    >
      <Textarea value={text} onChange={change} />
      <Textarea value={cleaned} readOnly />
    </div>
  )
}
