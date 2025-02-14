"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "@theme/Components/Arrow.scss"
import "@theme/Components/Logo.scss"
import "@theme/Views/Nav.scss"
import { Arrow, Logo } from "@ui"

export const Header = () => {
  const [active, setActive] = useState(false)
  const [arrowdown, setArrowdown] = useState(true)
  const [logoClass, setLogoClass] = useState("")
  const [reinventClass, setReinventClass] = useState("")
  const [navClass, setNavClass] = useState("")
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const clickToggle = () => {
    //   this.setState({ active: !active })
    //   this.setState({ arrowdown: !arrowdown })
  }

  const arrowToggle = () => {
    //   if (width > 999) {
    //     this.setState({ arrowdown: !arrowdown })
    //   }
  }

  const mobileMenuToggle = () => {
    //   if (this.props.width < 1250) {
    //     this.setState({ mobileMenuExpanded: !mobileMenuExpanded })
    //   }
  }

  useEffect(() => {
    setTimeout(() => setLogoClass("animate"), 1000)
    setTimeout(() => setNavClass("navAnimate"), 3500)
  }, [])

  const path: string = "/"
  // todo: detect path, home is transparent

  return (
    <div className={path === "/donk" ? (mobileMenuExpanded && width < 1250 ? "nav-wrap home mobile-expanded" : "nav-wrap home") : mobileMenuExpanded && width < 1250 ? "nav-wrap mobile-expanded" : "nav-wrap"}>
      <div className="logo">
        <button onClick={mobileMenuToggle} className="logomark">
          <Logo className={logoClass} />
        </button>
        <Link
          className={"textmark " + logoClass}
          href="/"
          // onClick={
          //   mobileMenuExpanded
          //     ? () => {
          //         // this.mobileMenuToggle();
          //         this.props.scrollTopZero();
          //       }
          //     : this.props.scrollTopZero
          // }
        >
          <p className="name-p">Hale Capital Partners</p>
        </Link>
      </div>

      <div className={"text-wrap " + navClass}>
        <Link
          href={`/what-we-do`}
          className={"nav-item " + (path === "/what-we-do" ? "active" : "inactive")}
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
            <Arrow direction={"down"} className="down" color={path === "/" ? "lightgrey" : "darkblue"} />
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
              className={"nav-child " + (path === "/commercial-technology" ? "active" : "inactive")}
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
              className={"nav-child " + (path === "/federal-markets" ? "active" : "inactive")}
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
          className={"nav-item " + (path === "/portfolio" ? "active" : "inactive")}
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
          className={"nav-item " + (path === "/news" ? "active" : "inactive")}
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
          className={"nav-item " + (path === "/about-us" ? "active" : "inactive")}
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
          className={"nav-item contact " + (path === "/contact-us" ? "active" : "inactive")}
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
