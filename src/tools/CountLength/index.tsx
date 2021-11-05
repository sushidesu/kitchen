import styled from "styled-components"
import { Stack } from "@chakra-ui/react"
import { useInput } from "../../hooks/useInput"
import { Textarea } from "@chakra-ui/react"

export const CountLength = (): JSX.Element => {
  const { text, change } = useInput()

  return (
    <Stack spacing={"4"}>
      <Count>{text.length}</Count>
      <Textarea value={text} onChange={change} />
    </Stack>
  )
}

const Count = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
`
