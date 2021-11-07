import NextHeadSeo from "next-head-seo"

type TitleType = "top" | "page" | "noTitleTemplate"

type SEOHeadersProps = {
  title?: string
  titleType?: TitleType
}

export function SEOHeaders(props: SEOHeadersProps): JSX.Element {
  const { title = "", titleType = "top" } = props

  const APP_NAME = "Kitchen"
  const APP_ROOT_URL =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_APP_ROOT_URL
  const OG_IMAGE_URL = `${APP_ROOT_URL}/ogp.png`

  const page_title: { [key in TitleType]: string } = {
    top: APP_NAME,
    page: `${title} - ${APP_NAME}`,
    noTitleTemplate: title,
  }

  return (
    <NextHeadSeo
      title={page_title[titleType]}
      canonical={APP_ROOT_URL}
      twitter={{
        card: "summary_large_image",
      }}
      og={{
        siteName: APP_NAME,
        type: "website",
        url: APP_ROOT_URL,
        image: OG_IMAGE_URL,
      }}
      customLinkTags={[
        {
          key: "favicon",
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
    />
  )
}
