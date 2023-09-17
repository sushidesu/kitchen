import { useMemo } from "react"
import { Stack } from "@chakra-ui/react"
import { useInput } from "../../hooks/useInput"
import { Textarea } from "@chakra-ui/react"

export const ScrapboxToMarkdown = (): JSX.Element => {
  const { text, change } = useInput()

  const removed = useMemo(
    () =>
      text
        .split("\n")
        .map((line) => {
          const a = line.replace(/^\s([^\s])/, "- $1")
          const b = a.replace(/^\s\s([^\s])/, "  - $1")
          const c = b.replace(/^\s\s\s([^\s])/, "    - $1")
          return c
        })
        .join("\n"),
    [text],
  )

  return (
    <Stack spacing={"4"}>
      <Textarea value={text} onChange={change} />
      <Textarea value={removed} readOnly />
    </Stack>
  )
}
