import NextLink from "next/link"
import {
  Container,
  useColorMode,
  Flex,
  Spacer,
  Link,
  Text,
  Stack,
  Switch,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import Logo from "../assets/kitchen.svg"

export const Header = (): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Container height="full" as="header">
      <Flex px="1" height="full" alignItems="center">
        <NextLink href="/" passHref>
          <a>
            <Logo height="26" />
          </a>
        </NextLink>
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
