import { useMemo } from "react"
import { Stack } from "@chakra-ui/react"
import { useInput } from "../../hooks/useInput"
import { Textarea } from "@chakra-ui/react"

export const RemoveLineBreaks = (): JSX.Element => {
  const [text, change] = useInput()

  const removed = useMemo(() => text.replace(/\r?\n/g, ""), [text])

  return (
    <Stack spacing={"4"}>
      <Textarea value={text} onChange={change} />
      <Textarea value={removed} readOnly />
    </Stack>
  )
}
