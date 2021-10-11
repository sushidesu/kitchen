import React, { useState, useCallback } from "react"

export const useInput = (
  init?: string
): {
  text: string
  change: (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => void
} => {
  const [text, setText] = useState(init || "")

  const change = useCallback(
    (
      event: React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
      >
    ) => {
      setText(event.target.value)
    },
    [setText]
  )

  return {
    text,
    change,
  }
}
