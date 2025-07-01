"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "@/theme/Components/Arrow.scss"
import "@/theme/Components/Logo.scss"
import "@/theme/Views/Nav.scss"
import { Arrow, Logo } from "@/ui"
import { useWindowSize } from "@/lib"
import { usePathname } from "next/navigation"

export const Header = () => {
  const { width } = useWindowSize()
  const pathname = usePathname()

  const [active, setActive] = useState(false)
  const [arrowdown, setArrowdown] = useState(true)
  const [logoClass, setLogoClass] = useState("")
  const [navClass, setNavClass] = useState("")
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false)

  const clickToggle = () => {
    setActive(!active)
    setArrowdown(!arrowdown)
  }

  const arrowToggle = () => setArrowdown(!arrowdown)

  const mobileMenuToggle = () => setMobileMenuExpanded(!mobileMenuExpanded)

  useEffect(() => {
    setTimeout(() => setLogoClass("animate"), 1000)
    setTimeout(() => setNavClass("navAnimate"), 3500)
  }, [])

  // todo: on location change, scroll to top and hide menu

  return (
    <div className={pathname === "/" ? (mobileMenuExpanded && width < 1250 ? "nav-wrap home mobile-expanded" : "nav-wrap home") : mobileMenuExpanded && width < 1250 ? "nav-wrap mobile-expanded" : "nav-wrap"}>
      <div className="logo">
        <button onClick={mobileMenuToggle} className="logomark">
          <Logo className={logoClass} />
        </button>
        <Link className={"textmark " + logoClass} href="/">
          <div className="name-p">Hale Capital Partners</div>
        </Link>
      </div>

      <div className={"text-wrap " + navClass}>
        <Link
          href={`/what-we-do`}
          className={"nav-item " + (pathname === "/what-we-do" ? "active" : "inactive")}
          onClick={
            () =>
              mobileMenuExpanded
                ? () => {
                    mobileMenuToggle()
                    // scrollTopZero()
                  }
                : console.log("todo")
            //scrollTopZero()
          }
        >
          <div className="index">01</div>
          <div className="item-title">What We Do</div>
        </Link>

        <div className={"nav-item" + (active ? " expanded" : "")} onMouseEnter={arrowToggle} onMouseLeave={arrowToggle} onClick={clickToggle}>
          <div className="index sans-serif expandable">02</div>
          <div className="item-title expandable">
            Investment Strategies
            <Arrow className="down" color={pathname === "/" ? "lightgrey" : "darkblue"} />
          </div>
          <div className="nav-children">
            <Link
              href={`/commercial-technology`}
              onClick={
                () =>
                  mobileMenuExpanded
                    ? () => {
                        mobileMenuToggle()
                        // scrollTopZero()
                      }
                    : console.log("todo")
                // this.props.scrollTopZero
              }
              className={"nav-child " + (pathname === "/commercial-technology" ? "active" : "inactive")}
            >
              Commercial Technology
            </Link>
            <Link
              href={`/federal-markets`}
              onClick={
                () =>
                  mobileMenuExpanded
                    ? () => {
                        mobileMenuToggle()
                        // scrollTopZero()
                      }
                    : console.log("todo")
                // this.props.scrollTopZero
              }
              className={"nav-child " + (pathname === "/federal-markets" ? "active" : "inactive")}
            >
              Federal Markets
            </Link>
          </div>
        </div>
        <Link
          href={`/portfolio`}
          onClick={
            () =>
              mobileMenuExpanded
                ? () => {
                    mobileMenuToggle()
                    // scrollTopZero()
                  }
                : console.log("todo")
            // this.props.scrollTopZero
          }
          className={"nav-item " + (pathname === "/portfolio" ? "active" : "inactive")}
        >
          <div className="index">03</div>
          <div className="item-title">Portfolio</div>
        </Link>
        <Link
          href={`/news`}
          onClick={
            () =>
              mobileMenuExpanded
                ? () => {
                    mobileMenuToggle()
                    // scrollTopZero()
                  }
                : console.log("todo")
            // this.props.scrollTopZero
          }
          className={"nav-item " + (pathname === "/news" ? "active" : "inactive")}
        >
          <div className="index">04</div>
          <div className="item-title">News</div>
        </Link>
        <Link
          href={`/about-us`}
          onClick={
            () =>
              mobileMenuExpanded
                ? () => {
                    mobileMenuToggle()
                    // scrollTopZero()
                  }
                : console.log("todo")
            // this.props.scrollTopZero
          }
          className={"nav-item " + (pathname === "/about-us" ? "active" : "inactive")}
        >
          <div className="index">05</div>
          <div className="item-title">About Us</div>
        </Link>
        <Link
          href={`/contact-us`}
          onClick={
            () =>
              mobileMenuExpanded
                ? () => {
                    mobileMenuToggle()
                    // scrollTopZero()
                  }
                : console.log("todo")
            // this.props.scrollTopZero
          }
          className={"nav-item contact " + (pathname === "/contact-us" ? "active" : "inactive")}
        >
          <div className="item-title sans-serif">Contact Us</div>
        </Link>
      </div>

      <div onClick={mobileMenuToggle} className={mobileMenuExpanded ? "hamburger active" : "hamburger"}>
        <span id="one" />
        <span id="two" />
      </div>
    </div>
  )
}
