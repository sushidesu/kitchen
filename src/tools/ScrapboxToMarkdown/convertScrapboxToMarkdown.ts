export const convertScrapboxToMarkdown = (text: string): string => {
  return text
    .split("\n")
    .map((line) => {
      return line
        .replace(/^(\s+)(.+)$/, (_, p1: string, p2: string) => {
          return p1.replace(/^\s/, "").replace(/\s/g, "  ") + "- " + p2
        })
        .replace(/\[(.+?)\s(.+?)\]/, "[$1]($2)")
      // .replace(/^code:(.+)$/, "```$1")
    })
    .join("\n")
}
