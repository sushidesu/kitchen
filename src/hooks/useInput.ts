import { useState, useCallback } from "react"

export const useInput = (init?: string) => {
  const [text, setText] = useState(init || "")

  const change = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    setText(event.target.value)
  }, [setText])

  return {
    text,
    change,
  }
}
