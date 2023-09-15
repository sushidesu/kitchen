import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
} from "@chakra-ui/react"
import { ChangeEventHandler, useCallback, useMemo, useState } from "react"
import { Layout } from "../../components/Layout"
import { SEOHeaders } from "../../components/SEOHeaders"
import ResizeTextarea from "react-textarea-autosize"

const modulus10weight3 = (n: string) => {
  const weight = [3, 1]
  const sum = n
    .toString()
    .split("")
    .reverse()
    .map((v, i) => parseInt(v) * weight[i % weight.length])
    .reduce((a, b) => a + b)
  return (10 - (sum % 10)) % 10
}

const AnycodePage = (): JSX.Element => {
  const [nums, setNums] = useState<string>("")

  const handleOnChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setNums(e.target.value)
    },
    []
  )

  const jans = useMemo(
    () =>
      nums
        .split("\n")
        .map((n) => {
          if (n === "") {
            return ""
          }
          // validate num
          const parsed = parseInt(n)
          if (isNaN(parsed)) {
            return ""
          }
          // 10桁になるまで0埋め
          const padded = parsed.toString().padStart(10, "0")
          const code = `01${padded}`
          return `${code}${modulus10weight3(code)}`
        })
        .join("\n"),
    [nums]
  )

  return (
    <Layout>
      <SEOHeaders titleType="page" title={"Anycode"} />

      <Container maxW={"container.lg"}>
        <Stack spacing={"6"}>
          <Heading fontSize={"lg"}>Anycode</Heading>
          <Stack direction={"row"}>
            <Stack>
              <FormControl>
                <FormLabel>連番</FormLabel>
                <Textarea
                  value={nums}
                  onChange={handleOnChange}
                  as={ResizeTextarea}
                />
              </FormControl>
            </Stack>
            <Stack width={"full"}>
              <FormControl width={"full"}>
                <FormLabel>JAN</FormLabel>
                <Textarea width={"full"} value={jans} as={ResizeTextarea} />
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default AnycodePage
