import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  Text,
} from "@chakra-ui/react"
import { ChangeEventHandler, useCallback, useMemo, useState } from "react"
import { Layout } from "../../components/Layout"
import { SEOHeaders } from "../../components/SEOHeaders"
import ResizeTextarea from "react-textarea-autosize"

const SpreadsheetToArrayPage = (): JSX.Element => {
  const [input, setInput] = useState<string>("")

  const handleOnChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setInput(e.target.value)
    },
    [],
  )

  const output = useMemo(() => {
    if (!input.trim()) return ""

    return input
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => `"${line.trim()}"`)
      .join(",\n")
  }, [input])

  return (
    <Layout>
      <SEOHeaders titleType="page" title={"Spreadsheet to Array"} />

      <Container maxW={"container.lg"}>
        <Stack spacing={"6"}>
          <Heading fontSize={"lg"}>Spreadsheet to Array</Heading>
          <Text fontSize={"sm"} color={"gray.600"}>
            スプレッドシートの列データを配列の要素形式に変換します
          </Text>
          <Stack direction={"row"}>
            <Stack width={"full"}>
              <FormControl>
                <FormLabel>スプレッドシートの列</FormLabel>
                <Textarea
                  value={input}
                  onChange={handleOnChange}
                  placeholder={"aaa\nbbb\nccc"}
                  as={ResizeTextarea}
                  minH={"200px"}
                />
                <FormHelperText>
                  スプレッドシートからコピーした列データを貼り付けてください
                </FormHelperText>
              </FormControl>
            </Stack>
            <Stack width={"full"}>
              <FormControl width={"full"}>
                <FormLabel>配列要素形式</FormLabel>
                <Textarea
                  width={"full"}
                  readOnly
                  value={output}
                  as={ResizeTextarea}
                  minH={"200px"}
                />
                <FormHelperText>"要素",形式で出力されます</FormHelperText>
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default SpreadsheetToArrayPage
