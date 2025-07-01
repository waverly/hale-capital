import "@/theme/Components/Arrow.scss"

export const Arrow = ({ color, className }: { color: string; className?: string }) => {
  return <span className={`${color === "lightgrey" ? "home arrow" : "other arrow"} ${className}`} />
}
