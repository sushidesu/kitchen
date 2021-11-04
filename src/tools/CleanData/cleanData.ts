export const cleanData = (text: string): string => {
  const converter = (line: string): string => {
    let result = line
    result = result.replace(/[^\d\t]/g, "")
    result = result.replace(/\t\t/, "\t")
    return result
  }

  return text.split("\n").map(converter).join("\n")
}
