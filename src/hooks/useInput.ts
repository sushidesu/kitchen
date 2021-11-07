import React, { useState, useCallback } from "react"

export const useInput = (
  init?: string
): [
  string,
  React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >,
  React.FocusEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >
] => {
  const [text, setText] = useState(init ?? "")

  const onChange = useCallback<
    React.FocusEventHandler<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  >((event) => {
    setText(event.target.value)
  }, [])

  const onBlur = useCallback<
    React.FocusEventHandler<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  >((event) => {
    setText(event.target.value)
  }, [])

  return [text, onChange, onBlur]
}
