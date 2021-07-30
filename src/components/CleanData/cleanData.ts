export const cleanData = (text: string): string => {
  const converter = (line: string): string => {
    let result = line
    result = result.replace(/[^\d\t]/g, "")
    return result
  }

  return text.split("\n")
    .map(converter)
    .join("\n")
}
