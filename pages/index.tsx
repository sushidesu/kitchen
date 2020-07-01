import Head from 'next/head'
import { Layout } from "../src/components/Layout"
import { Card } from "../src/components/Card"

import { RemoveSpaces } from "../src/components/RemoveSpaces"

const Index = () => (
    <Layout>
      <Head>
        <title>kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card title="RemoveSpaces">
        <RemoveSpaces />
      </Card>

    </Layout>
  )

export default Index
