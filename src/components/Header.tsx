import {
  useColorMode,
  Heading,
  Flex,
  Spacer,
  Box,
  Stack,
  Switch,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { Container } from "./Container"

export const Header = (): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Container>
      <Flex height="full" alignItems="center">
        <Box>
          <Heading size="lg">Kitchen 🍳</Heading>
        </Box>
        <Spacer />
        <Stack alignItems="center" direction="row">
          <MoonIcon />
          <Switch
            isChecked={colorMode === "light"}
            onChange={toggleColorMode}
          />
          <SunIcon />
        </Stack>
      </Flex>
    </Container>
  )
}
