import React, { useState, useCallback } from "react"

type ResetFunction = () => void

export const useInput = (
  init?: string
): [
  string,
  React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >,
  React.FocusEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >,
  ResetFunction
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

  const reset = useCallback(() => {
    setText(init ?? "")
  }, [])

  return [text, onChange, onBlur, reset]
}
