import Head from "next/head"
import { ITool } from "../interface/tool"

import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Card } from "../components/Card"

import toolDataJson from "../../public/tools.json"
import { ToolTypes } from "../types/tools"
import { RemoveLineBreaks } from "../tools/RemoveLineBreaks"
import { CountLength } from "../tools/CountLength"
import { ConvertEnv } from "../tools/ConvertEnv"
import { CleanData } from "../tools/CleanData"

type ToolData = {
  [slug in ToolTypes]: {
    slug: string
    componentName: string
    title: string
    description?: string
  }
}

const Index = (): JSX.Element => {
  const _tools = toolDataJson as ToolData
  const tools: ITool[] = [
    {
      ..._tools["remove-line-breaks"],
      pinned: false,
      component: RemoveLineBreaks,
    },
    {
      ..._tools["count-length"],
      pinned: false,
      component: CountLength,
    },
    {
      ..._tools["convert-env"],
      pinned: false,
      component: ConvertEnv,
    },
    {
      ..._tools["clean-the-data"],
      pinned: false,
      component: CleanData,
    },
  ]

  return (
    <Layout>
      <Head>
        <title>Kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {tools.map((tool) => (
          <Card key={tool.slug} {...tool} />
        ))}
      </Container>
    </Layout>
  )
}

export default Index
