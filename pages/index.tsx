import Head from 'next/head'
import { Layout } from "../src/components/Layout"
import { Container } from "../src/components/Container"
import { Card } from "../src/components/Card"

import { RemoveSpaces } from "../src/components/RemoveSpaces"

const Index = () => (
    <Layout>
      <Head>
        <title>Kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Card title="RemoveSpaces">
          <RemoveSpaces />
        </Card>
      </Container>

    </Layout>
  )

export default Index
