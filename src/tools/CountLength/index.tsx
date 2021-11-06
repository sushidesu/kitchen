import { Stack, Stat, StatNumber } from "@chakra-ui/react"
import { useInput } from "../../hooks/useInput"
import { Textarea } from "@chakra-ui/react"

export const CountLength = (): JSX.Element => {
  const { text, change } = useInput()

  return (
    <Stack alignItems="center" spacing={"4"}>
      <Stat>
        <StatNumber>{text.length}</StatNumber>
      </Stat>
      <Textarea value={text} onChange={change} />
    </Stack>
  )
}
