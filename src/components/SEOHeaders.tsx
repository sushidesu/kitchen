import NextHeadSeo from "next-head-seo"

type TitleType = "top" | "page" | "noTitleTemplate"

type SEOHeadersProps = {
  title?: string
  titleType?: TitleType
}

export function SEOHeaders(props: SEOHeadersProps): JSX.Element {
  const { title = "", titleType = "top" } = props
  const APP_NAME = "Kitchen"
  const page_title: { [key in TitleType]: string } = {
    top: APP_NAME,
    page: `${title} - ${APP_NAME}`,
    noTitleTemplate: title,
  }

  return (
    <NextHeadSeo
      title={page_title[titleType]}
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
