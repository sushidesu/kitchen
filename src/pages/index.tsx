import Head from "next/head"
import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Card } from "../components/Card"

import { RemoveLineBreaks } from "../components/RemoveLineBreaks"
import { CountLength } from "../components/CountLength"
import { ConvertEnv } from "../components/ConvertEnv"
import { CleanData } from "../components/CleanData"

const Index = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Kitchen</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Card title="Remove Line Breaks" component={RemoveLineBreaks} />
      <Card title="Count Length" component={CountLength} />
      <Card title="Convert Env" component={ConvertEnv} />
      <Card title="Clean the data" component={CleanData} />
    </Container>
  </Layout>
)

export default Index
