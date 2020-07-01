import Head from 'next/head'
import { Layout } from "../src/components/Layout"

const Index = () => (
    <Layout>
      <Head>
        <title>kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  )

export default Index
