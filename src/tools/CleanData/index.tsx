import { Stack, Textarea } from "@chakra-ui/react"
import { useInput } from "../../hooks/useInput"
import { cleanData } from "./cleanData"

export function CleanData(): JSX.Element {
  const [text, change] = useInput()
  const cleaned = cleanData(text)

  return (
    <Stack spacing="4">
      <Textarea value={text} onChange={change} />
      <Textarea value={cleaned} readOnly />
    </Stack>
  )
}
