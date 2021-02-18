import React from "react";
import { withRouter } from "react-router-dom";
import PortfolioItem from "../Components/PortfolioItem";
import Footer from "./Footer";
import Testimonial from "../Components/Testimonial";
import "./../../css/Views/Portfolio.css";

const R = require("ramda");

class Portfolio extends React.Component {
  state = {
    current: null,
    filter: "directlending",
    bgImg: this.props.data.data.gridbackground.url
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const { location } = this.props;
    const deserializeQueryString = R.pipe(
      R.replace(/^\?/, ""),
      R.split("&"),
      R.map(R.split("=")),
      R.fromPairs
    );

    let filterParam = deserializeQueryString(location.search).filter;

    if (!filterParam) {
      filterParam = null;
    }
    this.setState({ filter: filterParam });
  }

  handleCurrent = x => {
    if (this.state.current === x) {
      this.setState({ current: null });
      return;
    }
    this.setState({ current: x });
  };

  handleFilter = x => {
    if (this.state.filter === x) {
      this.setState({ filter: null });
      return;
    }
    this.setState({ filter: x });
  };

  handleLogoHover = c => {
    let img = c.data.image.url;
    this.setState({ bgImg: img });
  };

  render() {
    if(!this.props.data) {
      return (<p>Loading…</p>);
    }
    
    const d = this.props.data.data;

    const bgImgUrl = `url(${this.state.bgImg})`;

    return (
      <div>
        <div className="section-wrap portfolio-wrap">
          {/* start header */}
          <div className="portfolio-header">
            <div className="text-left">
              <div className="index">
                <p className="index sans-serif">03</p>
              </div>
              <h1>Select Portfolio Companies</h1>
            </div>
            <div className="text-right">
              <div>
                <h3 className="serif">
                  <span
                    className={
                      this.state.current && this.state.current !== null
                        ? "active"
                        : ""
                    }
                    onClick={() => this.handleCurrent(true)}
                  >
                    Current
                  </span>
                  <span>&nbsp;</span> / <span>&nbsp;</span>
                  <span
                    className={
                      !this.state.current && this.state.current !== null
                        ? "active"
                        : ""
                    }
                    onClick={() => this.handleCurrent(false)}
                  >
                    Past
                  </span>
                </h3>
              </div>
              <div>
                <h3 className="serif">
                  <span
                    className={
                      this.state.filter === "privateequity" ? "active" : ""
                    }
                    onClick={() => this.handleFilter("privateequity")}
                  >
                    Private Equity
                  </span>
                  <span>&nbsp;</span> / <span>&nbsp;</span>
                  <span
                    className={
                      this.state.filter === "directlending" ? "active" : ""
                    }
                    onClick={() => this.handleFilter("directlending")}
                  >
                    Direct Lending
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* start portfolio grid */}
          <div
            className="portfolio-grid"
            style={{ backgroundImage: bgImgUrl }}
          >
            {this.props.companies
              ? this.props.companies.map((c, index) => {
                  // if there is an active filter
                  if (this.state.filter) {
                    // if there is no current filter
                    if (this.state.current == null) {
                      if (this.state.filter === "directlending") {
                        if (
                          c.data.type === "directlending" ||
                          c.data.type === "both"
                        ) {
                          return (
                            <PortfolioItem
                              onMouseOver={() => this.handleLogoHover(c)}
                              key={index}
                              data={c}
                            />
                          );
                        }
                      } else {
                        if (
                          c.data.type === "privateequity" ||
                          c.data.type === "both"
                        ) {
                          return (
                            <PortfolioItem
                              onMouseOver={() => this.handleLogoHover(c)}
                              key={index}
                              data={c}
                            />
                          );
                        }
                      }
                    } else if (this.state.current === true) {
                      // if the current filter is true
                      if (this.state.filter === "directlending") {
                        if (
                          c.data.current === "current" &&
                          (c.data.type === "directlending" ||
                            c.data.type === "both")
                        ) {
                          return (
                            <PortfolioItem
                              onMouseOver={() => this.handleLogoHover(c)}
                              key={index}
                              data={c}
                            />
                          );
                        }
                      } else {
                        if (
                          c.data.current === "current" &&
                          (c.data.type === "privateequity" ||
                            c.data.type === "both")
                        ) {
                          return (
                            <PortfolioItem
                              onMouseOver={() => this.handleLogoHover(c)}
                              key={index}
                              data={c}
                            />
                          );
                        }
                      }
                    } else {
                      // if the current filter is false
                      if (this.state.filter === "directlending") {
                        if (
                          c.data.current === "past" &&
                          (c.data.type === "directlending" ||
                            c.data.type === "both")
                        ) {
                          return (
                            <PortfolioItem
                              onMouseOver={() => this.handleLogoHover(c)}
                              key={index}
                              data={c}
                            />
                          );
                        }
                      } else {
                        if (
                          c.data.current === "past" &&
                          (c.data.type === "privateequity" ||
                            c.data.type === "both")
                        ) {
                          return (
                            <PortfolioItem
                              onMouseOver={() => this.handleLogoHover(c)}
                              key={index}
                              data={c}
                            />
                          );
                        }
                      }
                    }
                  } else {
                    // if there is no active filter
                    // if there is no current filter
                    // this will return all portfolio items b/c both filters are off
                    if (this.state.current == null) {
                      return (
                        <PortfolioItem
                          onMouseOver={() => this.handleLogoHover(c)}
                          key={index}
                          data={c}
                        />
                      );
                    }

                    // if the current filter is true
                    if (this.state.current) {
                      if (c.data.current === "current") {
                        return (
                          <PortfolioItem
                            onMouseOver={() => this.handleLogoHover(c)}
                            key={index}
                            data={c}
                          />
                        );
                      }
                    } else {
                      // if the currnet filter is false
                      if (c.data.current === "past") {
                        return (
                          <PortfolioItem
                            onMouseOver={() => this.handleLogoHover(c)}
                            key={index}
                            data={c}
                          />
                        );
                      }
                    }
                  }
                  return <React.Fragment />
                })
              : <React.Fragment />}

            {/* <div
              className="bgImg"
              data-bgImg={bgImgUrl}
              style={{
                background: bgImgUrl + "no-repeat center center fixed"
              }}
            /> */}
          </div>

          {/* start testimonials */}
          <div className="testimonial-wrap">
            <h3>Testimonials</h3>
            <h3 className="serif">Words from a selection of our partners</h3>
            {d.testimonial.map((c, index) => (
              <Testimonial
                width={this.props.width}
                height={this.props.height}
                key={index}
                data={c}
              />
            ))}
          </div>
        </div>
        <Footer socials={this.props.socials} />
      </div>
    );
  }
}

export default withRouter(Portfolio);
