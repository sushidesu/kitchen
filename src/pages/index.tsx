import Head from 'next/head'
import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Card } from "../components/Card"

import { RemoveLineBreaks } from "../components/RemoveLineBreaks"
import { CountLength } from "../components/CountLength"
import { ConvertEnv } from '../components/ConvertEnv'

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
        <Card title="Convert Env" >
          <ConvertEnv />
        </Card>
      </Container>
    </Layout>
  )

export default Index
