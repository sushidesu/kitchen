export function blobToBase64(blob: Blob): Promise<string | undefined> {
  const reader = new FileReader()
  return new Promise<string | undefined>((resolve) => {
    reader.onload = () => {
      const result = reader.result
      if (typeof result !== "string") {
        resolve(undefined)
      } else {
        resolve(result)
      }
    }
    reader.readAsDataURL(blob)
  })
}
