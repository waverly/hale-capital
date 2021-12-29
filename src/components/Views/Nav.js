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
      logoClass: "",
      reinventClass: "",
      navClass: "",
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
    if (this.props.width < 1250) {
      this.setState({ mobileMenuExpanded: !this.state.mobileMenuExpanded });
    }
  }

  componentDidMount() {
    console.log("component remounting");
    setTimeout(() => this.setState({ logoClass: "animate" }), 1000);
    setTimeout(() => this.setState({ navClass: "navAnimate" }), 3500);
  }

  render() {
    const path = this.props.location.pathname;

    return (
      <div
        className={
          path === "/"
            ? this.state.mobileMenuExpanded && this.props.width < 1250
              ? "nav-wrap home mobile-expanded"
              : "nav-wrap home"
            : this.state.mobileMenuExpanded && this.props.width < 1250
              ? "nav-wrap mobile-expanded"
              : "nav-wrap"
        }
      >
        <div className="logo">
          <div
            onClick={this.mobileMenuToggle}
            className={
              this.mobileMenuExpanded && this.props.width < 1250
                ? "hamburger active"
                : "hamburger"
            }
          >
            <span id="one" />
            <span id="two" />
          </div>
          <button onClick={this.mobileMenuToggle} className="logomark">
            <Logo class={this.state.logoClass} />
          </button>
          <Link
            className={"textmark " + this.state.logoClass}
            to="/"
            // onClick={
            //   this.state.mobileMenuExpanded
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

        <div className={"text-wrap " + this.state.navClass}>
          {/* <Link
            className={"textmark-mobile " + this.state.logoClass}
            to="/"
            onClick={
              this.state.mobileMenuExpanded
                ? () => {
                    this.mobileMenuToggle();
                    this.props.scrollTopZero();
                  }
                : this.props.scrollTopZero
            }
          >
            <p className="name-p">Hale Capital Partners</p>
          </Link> */}
          <Link
            to={`/what-we-do`}
            className={
              "nav-item " + (path === "/what-we-do" ? "active" : "inactive")
            }
            onClick={
              this.state.mobileMenuExpanded
                ? () => {
                    this.mobileMenuToggle();
                    this.props.scrollTopZero();
                  }
                : this.props.scrollTopZero
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
                direction={"down"}
                className="down"
                color={path === "/" ? "lightgrey" : "darkblue"}
              />
            </div>
            <div className="nav-children">
              <Link
                to={`/growth-equity`}
                onClick={
                  this.state.mobileMenuExpanded
                    ? () => {
                        this.mobileMenuToggle();
                        this.props.scrollTopZero();
                      }
                    : this.props.scrollTopZero
                }
                className={
                  "nav-child " +
                  (path === "/growth-equity" ? "active" : "inactive")
                }
              >
                Growth Equity
              </Link>
              <Link
                to={`/direct-lending`}
                onClick={
                  this.state.mobileMenuExpanded
                    ? () => {
                        this.mobileMenuToggle();
                        this.props.scrollTopZero();
                      }
                    : this.props.scrollTopZero
                }
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
            onClick={
              this.state.mobileMenuExpanded
                ? () => {
                    this.mobileMenuToggle();
                    this.props.scrollTopZero();
                  }
                : this.props.scrollTopZero
            }
            className={
              "nav-item " + (path === "/portfolio" ? "active" : "inactive")
            }
          >
            <div className="index">03</div>
            <div className="item-title">Portfolio</div>
          </Link>
          <Link
            to={`/news`}
            onClick={
              this.state.mobileMenuExpanded
                ? () => {
                    this.mobileMenuToggle();
                    this.props.scrollTopZero();
                  }
                : this.props.scrollTopZero
            }
            className={"nav-item " + (path === "/news" ? "active" : "inactive")}
          >
            <div className="index">04</div>
            <div className="item-title">News</div>
          </Link>
          <Link
            to={`/about-us`}
            onClick={
              this.state.mobileMenuExpanded
                ? () => {
                    this.mobileMenuToggle();
                    this.props.scrollTopZero();
                  }
                : this.props.scrollTopZero
            }
            className={
              "nav-item " + (path === "/about-us" ? "active" : "inactive")
            }
          >
            <div className="index">05</div>
            <div className="item-title">About Us</div>
          </Link>
          <Link
            to={`/contact-us`}
            onClick={
              this.state.mobileMenuExpanded
                ? () => {
                    this.mobileMenuToggle();
                    this.props.scrollTopZero();
                  }
                : this.props.scrollTopZero
            }
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
