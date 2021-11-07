import { Container, Stack, Heading, Text } from "@chakra-ui/layout"
import { Layout } from "../components/Layout"
import { SEOHeaders } from "../components/SEOHeaders"

function WhatIsThisPage(): JSX.Element {
  return (
    <Layout>
      <SEOHeaders title="これは何？" titleType="page" />
      <Container py="4">
        <Stack direction="column">
          <Heading fontSize="lg">これは何？</Heading>
          <Text>
            自分がたまに使うためのツール集です。こういうのがほしい！等ありましたら以下のフォームからお知らせください。
          </Text>
        </Stack>
      </Container>
    </Layout>
  )
}

export default WhatIsThisPage
