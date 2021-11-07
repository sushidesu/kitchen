import NextHeadSeo from "next-head-seo"

type SEOHeadersProps = {
  title?: string
  noTitleTemplate?: boolean
}

export function SEOHeaders(props: SEOHeadersProps): JSX.Element {
  const { title, noTitleTemplate } = props
  const APP_NAME = "Kitchen"

  return (
    <NextHeadSeo title={noTitleTemplate ? title : `${title} - ${APP_NAME}`} />
  )
}
