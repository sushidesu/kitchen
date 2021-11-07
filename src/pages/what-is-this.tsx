import {
  Container,
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ButtonGroup,
  Button,
} from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { SEOHeaders } from "../components/SEOHeaders"

function WhatIsThisPage(): JSX.Element {
  const sendMessage = async () => {
    const result = await fetch(process.env.NEXT_PUBLIC_SEND_MESSAGE_URL ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ message: "hello!!!!" }),
    })
    const body = await result.text()
    window.alert(body)
  }
  return (
    <Layout>
      <SEOHeaders title="これは何？" titleType="page" />
      <Container py="8">
        <Stack direction="column" spacing="8">
          <Stack direction="column">
            <Heading fontSize="lg">これは何？</Heading>
            <Text>
              自分がたまに使うためのツール集です。こういうのがほしい！等ありましたら以下のフォームからお知らせください。
            </Text>
          </Stack>
          <Stack direction="column">
            <FormControl isRequired>
              <FormLabel>お名前</FormLabel>
              <Input />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>要望・感想など</FormLabel>
              <Textarea rows={8} />
            </FormControl>
          </Stack>
          <ButtonGroup justifyContent="center">
            <Button onClick={sendMessage} px="12">
              送信
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </Layout>
  )
}

export default WhatIsThisPage
