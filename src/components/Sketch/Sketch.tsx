import { useState, useRef, useCallback, useEffect } from "react"
import styles from "./Sketch.module.css"

export type SketchProps = {
  width?: string
  height?: string
  color?: string
}

export function Sketch(props: SketchProps): JSX.Element {
  const { width = "200px", height = "200px", color = "#000" } = props

  const [drag, setDrag] = useState(false)
  const [fromX, setFromX] = useState(0)
  const [fromY, setFromY] = useState(0)

  const canvas = useRef<HTMLCanvasElement>(null)
  const ctx = canvas.current?.getContext("2d")

  const offset = useCallback(
    (
      clientX: number,
      clientY: number,
      canvasElement: HTMLCanvasElement
    ): [number, number] => {
      const rect = canvasElement.getBoundingClientRect()
      return [clientX - rect.left, clientY - rect.top]
    },
    []
  )

  return (
    <canvas
      className={styles.wrapper}
      ref={canvas}
      width={width}
      height={height}
      style={{ border: "1px solid #333" }}
      onPointerDown={(e) => {
        if (!canvas.current) {
          return
        }

        setDrag(true)
        // from
        const [x, y] = offset(e.clientX, e.clientY, canvas.current)
        setFromX(x)
        setFromY(y)
      }}
      onPointerUp={() => {
        setDrag(false)
      }}
      onPointerMove={(e) => {
        if (!drag || !ctx || !canvas.current) {
          return
        }
        // paint
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.moveTo(fromX, fromY)
        const [x, y] = offset(e.clientX, e.clientY, canvas.current)
        ctx.lineTo(x, y)
        ctx.stroke()
        setFromX(x)
        setFromY(y)
      }}
    />
  )
}
