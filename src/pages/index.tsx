import Head from "next/head"
import { ITool } from "../interface/tool"

import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Card } from "../components/Card"

import { RemoveLineBreaks } from "../components/RemoveLineBreaks"
import { CountLength } from "../components/CountLength"
import { ConvertEnv } from "../components/ConvertEnv"
import { CleanData } from "../components/CleanData"

const Index = (): JSX.Element => {
  const tools: ITool[] = [
    {
      slug: "remove-line-breaks",
      title: "Remove Line Breaks",
      pinned: false,
      component: RemoveLineBreaks,
    },
    {
      slug: "count-length",
      title: "Count Length",
      description: `文字数をカウントします`,
      pinned: false,
      component: CountLength,
    },
    {
      slug: "convert-env",
      title: "Convert Env",
      description: `JSONのデータをenvのフォーマットに変換します`,
      pinned: false,
      component: ConvertEnv,
    },
    {
      slug: "clean-the-data",
      title: "Clean the Data",
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
