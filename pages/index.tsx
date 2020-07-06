import Head from 'next/head'
import { Layout } from "../src/components/Layout"
import { Container } from "../src/components/Container"
import { Card } from "../src/components/Card"

import { RemoveLineBreaks } from "../src/components/RemoveLineBreaks"

const Index = () => (
    <Layout>
      <Head>
        <title>Kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Card title="Remove Line Breaks">
          <RemoveLineBreaks />
        </Card>
      </Container>

    </Layout>
  )

export default Index
