import { Stack, Text } from "@chakra-ui/react"

export const Footer = (): JSX.Element => {
  return (
    <Stack as="footer" justifyContent="center" alignItems="center">
      <Text align="center" color="gray.400">
        &copy; sushidesu
      </Text>
    </Stack>
  )
}
