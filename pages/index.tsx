import Head from 'next/head'
import { Layout } from "../src/components/Layout"
import { Container } from "../src/components/Container"
import { Card } from "../src/components/Card"

import { RemoveLineBreaks } from "../src/components/RemoveLineBreaks"
import { CountLength } from "../src/components/CountLength"
import { TableGenerator } from "../src/components/TableGenerator"

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
        <Card title="Count Length" >
          <CountLength />
        </Card>
        <Card title="Table Generator" >
          <TableGenerator />
        </Card>
      </Container>

    </Layout>
  )

export default Index
