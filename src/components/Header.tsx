import {
  Container,
  useColorMode,
  Heading,
  Flex,
  Spacer,
  Box,
  Stack,
  Switch,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

export const Header = (): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Container height="full" as="header">
      <Flex px="1" height="full" alignItems="center">
        <Box>
          <Heading fontSize="2xl">Kitchen 🍳</Heading>
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
