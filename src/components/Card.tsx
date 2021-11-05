import { Stack, useColorMode } from "@chakra-ui/react"
import { ITool } from "../interface/tool"

type CardProps = ITool

export const Card = ({
  component: Component,
  title,
  description,
}: CardProps): JSX.Element => {
  const { colorMode } = useColorMode()
  return (
    <Stack
      direction="column"
      px="6"
      py="4"
      border="1px"
      borderColor={colorMode === "light" ? "gray.200" : "whiteAlpha.300"}
      rounded="md"
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <Component />
    </Stack>
  )
}
