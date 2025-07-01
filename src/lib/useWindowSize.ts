import React from "react"

const useWindowSize = () => {
  const getSize = (): { width: number; height: number } => {
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 9999,
      height: typeof window !== "undefined" ? window.innerHeight : 9999,
    }
  }

  const [windowSize, setWindowSize] = React.useState(getSize)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => setWindowSize(getSize())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export { useWindowSize }
