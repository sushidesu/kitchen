import { css } from "styled-components"
import { useInput } from "../../hooks/useInput"
import { Textarea } from "@chakra-ui/react"
import { InputGroup, Input, InputLeftAddon } from "@chakra-ui/react"

export function ConvertEnv(): JSX.Element {
  const { text: prefix, change: changePrefix } = useInput()
  const { text, change } = useInput()

  const converter = (line: string): string => {
    let result = line
    result = result.replace(/^\s+/, "") // remove start space
    result = result.replace(/,$/, "") // remove ,
    result = result.replace(/^(.+):/, (x) => {
      return x.replace(/([a-z])([A-Z])/, "$1_$2").toUpperCase()
    }) // camelCase to UPPER_CASE
    result = result.replace(/"/g, "") // remove ""
    result = result.replace(/:\s/, "=") // key=value
    return prefix + result
  }

  const converted = text
    .split("\n")
    .filter((line) => /.+:\s".+"/.test(line))
    .map(converter)
    .join("\n")

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
      <InputGroup>
        <InputLeftAddon>{"prefix"}</InputLeftAddon>
        <Input label={"prefix"} value={prefix} onChange={changePrefix} />
      </InputGroup>
      <Textarea value={text} onChange={change} />
      <Textarea readOnly value={converted} />
    </div>
  )
}
