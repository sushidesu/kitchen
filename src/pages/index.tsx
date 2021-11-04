import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { readFileSync } from "fs"
import { ITool } from "../interface/tool"

import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Card } from "../components/Card"

import { ToolTypes } from "../types/tools"
import { RemoveLineBreaks } from "../tools/RemoveLineBreaks"
import { CountLength } from "../tools/CountLength"
import { ConvertEnv } from "../tools/ConvertEnv"
import { CleanData } from "../tools/CleanData"

type Props = {
  tools: {
    [slug in ToolTypes]: {
      slug: string
      componentName: string
      title: string
      description?: string
    }
  }
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `${process.cwd()}/public/tools.json`
  const file = readFileSync(path)
  const data = JSON.parse(file.toString())

  return {
    props: {
      tools: data,
    },
  }
}

const Index = ({
  tools: _tools,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
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
