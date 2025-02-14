"use client"

import { useState, useEffect } from "react"

export const SpanLetter = ({ delay, letter }: { delay: number; letter: string }) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const thisTimeout = setTimeout(() => setOpacity(1), delay)
    return () => {
      clearTimeout(thisTimeout)
    }
  }, [delay])

  return (
    <span
      style={{
        opacity,
        transition: "opacity 2s",
      }}
    >
      {letter}
    </span>
  )
}
