import { Stack, Text, Heading, useColorMode } from "@chakra-ui/react"
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
      pt="4"
      pb="7"
      border="1px"
      boxShadow="md"
      borderColor={colorMode === "light" ? "gray.200" : "whiteAlpha.300"}
      rounded="md"
    >
      <Heading as="h2" size="sm">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {description}
      </Text>
      <Component />
    </Stack>
  )
}
