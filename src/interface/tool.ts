export interface ITool {
  slug: string
  title: string
  description?: string
  pinned: boolean
  component: () => JSX.Element
}
