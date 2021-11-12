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
import { useInput } from "../hooks/useInput"
import { useLoading } from "../hooks/useLoading"
import { useSketch } from "../components/Sketch/useSketch"

function WhatIsThisPage(): JSX.Element {
  const [name, handleChangeName, , resetName] = useInput()
  const [body, handleChangeBody, , resetBody] = useInput()
  const [loading, setLoading] = useLoading()

  const [getBlob, renderCanvas] = useSketch({ color: "#000" })

  const sendMessage = async () => {
    setLoading(true)
    const blob = await getBlob()
    const img = document.createElement("img")
    const url = URL.createObjectURL(blob)
    img.src = url
    console.log(img)
    //    const result = await fetch(process.env.NEXT_PUBLIC_SEND_MESSAGE_URL ?? "", {
    //      method: "POST",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //      mode: "cors",
    //      body: JSON.stringify({
    //        message: `お名前: ${name}
    //要望・感想など:
    //${body}
    //`,
    //      }),
    //    })
    //
    //    if (result.ok) {
    //      resetName()
    //      resetBody()
    //    }
    //    window.alert(result.ok ? "OK" : "Failed")
    setLoading(false)
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
              <Input value={name} onChange={handleChangeName} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>要望・感想など</FormLabel>
              <Textarea value={body} onChange={handleChangeBody} rows={8} />
            </FormControl>
            {renderCanvas()}
          </Stack>
          <ButtonGroup justifyContent="center">
            <Button
              isLoading={loading}
              disabled={loading || name === "" || body === ""}
              onClick={sendMessage}
              px="12"
            >
              送信
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </Layout>
  )
}

export default WhatIsThisPage
