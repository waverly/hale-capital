"use client"

import { useEffect, useState } from "react"
import { useInterval } from "usehooks-ts"
import { Slide } from "./Slide"
import "@theme/Views/Slideshow.scss"

export const Slideshow = ({ carousel }: Pick<NonNullable<Sanity.PageQueryResult>, "carousel">) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const increment = (direction: number) => {
    if (!carousel || carousel.length < 2) return
    let nextSlide = activeSlide + direction
    if (nextSlide < 0) nextSlide = carousel.length - 1
    else if (nextSlide >= carousel.length) nextSlide = 0
    setActiveSlide(nextSlide)
  }

  let pauseTimer: any

  const slideshowInterval = 5

  useEffect(() => {
    return () => clearTimeout(pauseTimer)
  }, [pauseTimer])

  useInterval(() => {
    if (paused) return
    increment(1)
  }, slideshowInterval! * 1000)

  return (
    <div className="slideshow">
      {carousel
        ?.filter((s) => !!s)
        .map((slide, i) => (
          <Slide key={slide._key} slide={slide as any as Sanity.CarouselItem} active={activeSlide == i} />
        ))}
    </div>
  )
}
