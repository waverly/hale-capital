import React from "react"
import { isClient } from "@lib"

const useWindowSize = () => {
  const getSize = (): { width: number; height: number } => {
    return {
      width: isClient() ? window.innerWidth : 9999,
      height: isClient() ? window.innerHeight : 9999,
    }
  }

  const [windowSize, setWindowSize] = React.useState(getSize)

  React.useEffect(() => {
    if (!isClient()) return
    const handleResize = () => setWindowSize(getSize())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export { useWindowSize }
