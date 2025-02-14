import "@theme/Components/Arrow.scss"

export const Arrow = ({ color, direction }: { color: string; direction: string }) => {
  return <span className={color === "lightgrey" ? "home arrow arrow-" + direction : "other arrow arrow-" + direction} />
}
