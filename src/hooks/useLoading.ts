import { useState, useCallback } from "react"

type SetLoadingFunction = (value: boolean) => void

export const useLoading = (init?: boolean): [boolean, SetLoadingFunction] => {
  const [loading, setLoading] = useState<boolean>(init ?? false)

  const changeLoading = useCallback((value: boolean) => {
    setLoading(value)
  }, [])

  return [loading, changeLoading]
}
