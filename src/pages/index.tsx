import { Container, Stack } from "@chakra-ui/react"
import { ITool } from "../interface/tool"

import { SEOHeaders } from "../components/SEOHeaders"
import { Layout } from "../components/Layout"
import { Card } from "../components/Card"

import toolDataJson from "../../public/tools.json"
import { ToolTypes } from "../types/tools"
import { RemoveLineBreaks } from "../tools/RemoveLineBreaks"
import { CountLength } from "../tools/CountLength"
import { ConvertEnv } from "../tools/ConvertEnv"
import { CleanData } from "../tools/CleanData"
import { ScrapboxToMarkdown } from "../tools/ScrapboxToMarkdown"

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
    {
      ..._tools["scrapbox-to-markdown"],
      pinned: false,
      component: ScrapboxToMarkdown,
    },
  ]

  return (
    <Layout>
      <SEOHeaders titleType="top" />

      <Container>
        <Stack py="4" direction="column" spacing="8">
          {tools.map((tool) => (
            <Card key={tool.slug} {...tool} />
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}

export default Index
