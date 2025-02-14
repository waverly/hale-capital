"use client"

import { useState } from "react"
import { Slideshow } from "./Slideshow"
import { SpanLetter } from "./SpanLetter"

import "@theme/Views/Home.scss"

export const Home = ({ pageData }: { pageData: Sanity.PageQueryResult }) => {
  const [taglineClass] = useState("")
  const [innerClass] = useState("")

  return (
    <div className="fixed-wrapper">
      <div className="home-wrap">
        <div className="tagline">
          <h1>
            <div className="wrapper">
              <div className="contents">
                <div className={"inner highlight " + innerClass}>
                  <span className={"highlight reinvent"}>
                    <SpanLetter letter="R" delay={1500} />
                    <SpanLetter letter="e" delay={1700} />
                    <SpanLetter letter="i" delay={1900} />
                    <SpanLetter letter="n" delay={2100} />
                    <SpanLetter letter="v" delay={2300} />
                    <SpanLetter letter="e" delay={2500} />
                    <SpanLetter letter="n" delay={2700} />
                    <SpanLetter letter="t" delay={2900} />
                    <SpanLetter letter="i" delay={3100} />
                    <SpanLetter letter="n" delay={3300} />
                    <SpanLetter letter="g" delay={3500} />
                  </span>
                </div>
              </div>
            </div>
            <span> </span>
            <span className={"taglineText " + taglineClass}>Technology Investing Since 2007</span>
          </h1>
        </div>
        <div className="bg-fade" />
        <div className="homepage-caption">{/* <p>{caption.length > 0 ? this.props.data.data.body[this.props.activeSlide].primary.caption[0].text : " "}</p> */}</div>
        <div className="background-carousel">{/* <Slideshow next={this.props.next} previous={this.props.previous} activeSlide={this.props.activeSlide} slides={this.props.slides} /> */}</div>
      </div>
    </div>
  )
}
