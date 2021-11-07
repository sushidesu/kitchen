import NextLink from "next/link"
import {
  Container,
  useColorMode,
  Heading,
  Flex,
  Spacer,
  Box,
  Link,
  Text,
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
          <Heading fontSize="2xl">
            <NextLink href="/" passHref>
              <a>Kitchen 🍳</a>
            </NextLink>
          </Heading>
        </Box>
        <Spacer />
        <Stack direction="row" alignItems="center" spacing="4">
          <Text>
            <NextLink href="/what-is-this" passHref>
              <Link
                fontSize="sm"
                color={colorMode === "light" ? "blue.500" : "gray.200"}
              >
                これは何？
              </Link>
            </NextLink>
          </Text>
          <Stack alignItems="center" justifyContent="center" direction="row">
            <MoonIcon />
            <Switch
              pt="1"
              isChecked={colorMode === "light"}
              onChange={toggleColorMode}
            />
            <SunIcon />
          </Stack>
        </Stack>
      </Flex>
    </Container>
  )
}
