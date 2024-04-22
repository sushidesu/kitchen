import { convertScrapboxToMarkdown } from "./convertScrapboxToMarkdown"

describe("convertScrapboxToMarkdown", () => {
  it("should convert Scrapbox to Markdown", () => {
    const text = ` hello`
    const result = convertScrapboxToMarkdown(text)
    expect(result).toBe(`- hello`)
  })

  it("nested list", () => {
    const text = ` ネスト
 	2段目のネスト
 		3段目のネスト
 			4段目のネスト`
    expect(convertScrapboxToMarkdown(text)).toBe(`- ネスト
  - 2段目のネスト
    - 3段目のネスト
      - 4段目のネスト`)
  })

  it("should not convert", () => {
    const text = `hello`
    expect(convertScrapboxToMarkdown(text)).toBe(`hello`)
  })

  it("should convert links", () => {
    const text = ` [リンク https://example.com]`
    expect(convertScrapboxToMarkdown(text)).toBe(
      `- [リンク](https://example.com)`,
    )
  })

  it.skip("should convert code block", () => {
    const text = `code:ts
  console.log("hello")`
    expect(convertScrapboxToMarkdown(text)).toBe(`\`\`\`ts
  console.log("hello")
\`\`\``)
  })
})
