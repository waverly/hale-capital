import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../Components/Arrow";
import Logo from "../Components/Logo";

import "./../../css/Views/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.arrowToggle = this.arrowToggle.bind(this);
    this.clickToggle = this.clickToggle.bind(this);
    this.mobileMenuToggle = this.mobileMenuToggle.bind(this);

    this.state = {
      active: false,
      arrowdown: true,
      logoClass: "test",
      mobileMenuExpanded: false,
      width: 0,
      height: 0
    };
  }

  clickToggle() {
    this.setState({ active: !this.state.active });
    this.setState({ arrowdown: !this.state.arrowdown });
  }

  arrowToggle() {
    if (this.state.width > 999) {
      this.setState({ arrowdown: !this.state.arrowdown });
    }
  }

  mobileMenuToggle() {
    this.setState({ mobileMenuExpanded: !this.state.mobileMenuExpanded });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ logoClass: "animate" }), 800);
  }

  render() {
    const path = this.props.location.pathname;

    return (
      <div
        className={
          path === "/"
            ? this.state.mobileMenuExpanded
              ? "nav-wrap home mobile-expanded"
              : "nav-wrap home"
            : this.state.mobileMenuExpanded
              ? "nav-wrap mobile-expanded"
              : "nav-wrap"
        }
      >
        <div className="logo">
          <div className="logomark" onClick={this.mobileMenuToggle}>
            <Logo class={this.state.logoClass} />
            {/* <img src="./../assets/imgs/logo.png" alt="" /> */}
          </div>
          <Link className="textmark" to="/">
            <p className="name-p">Hale Capital Partners</p>
          </Link>
        </div>

        <div className="text-wrap">
          <Link
            to={`/what-we-do`}
            className={
              "nav-item " + (path === "/what-we-do" ? "active" : "inactive")
            }
          >
            <div className="index">01</div>
            <div className="item-title">What We Do</div>
          </Link>

          <div
            className={"nav-item" + (this.state.active ? " expanded" : "")}
            onMouseEnter={this.arrowToggle}
            onMouseLeave={this.arrowToggle}
            onClick={this.clickToggle}
          >
            <div className="index sans-serif expandable">02</div>
            <div className="item-title expandable">
              Investment Strategies
              <Arrow
                direction={this.state.arrowdown ? "down" : "up"}
                className="down"
                color={path === "/" ? "lightgrey" : "darkblue"}
              />
            </div>
            <div className="nav-children">
              <Link
                to={`/private-equity`}
                className={
                  "nav-child " +
                  (path === "/private-equity" ? "active" : "inactive")
                }
              >
                Private Equity
              </Link>
              <Link
                to={`/direct-lending`}
                className={
                  "nav-child " +
                  (path === "/direct-lending" ? "active" : "inactive")
                }
              >
                Direct Lending
              </Link>
            </div>
          </div>
          <Link
            to={`/portfolio`}
            className={
              "nav-item " + (path === "/portfolio" ? "active" : "inactive")
            }
          >
            <div className="index">03</div>
            <div className="item-title">Portfolio</div>
          </Link>
          <Link
            to={`/news`}
            className={"nav-item " + (path === "/news" ? "active" : "inactive")}
          >
            <div className="index">04</div>
            <div className="item-title">News</div>
          </Link>
          <Link
            to={`/about-us`}
            className={
              "nav-item " + (path === "/about-us" ? "active" : "inactive")
            }
          >
            <div className="index">05</div>
            <div className="item-title">About Us</div>
          </Link>
          <Link
            to={`/contact-us`}
            className={
              "nav-item contact " +
              (path === "/contact-us" ? "active" : "inactive")
            }
          >
            <div className="item-title sans-serif">Contact Us</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
