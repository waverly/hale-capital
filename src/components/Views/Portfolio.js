import React from "react";
import PortfolioItem from "../Components/PortfolioItem";
import Footer from './Footer';
import Testimonial from "../Components/Testimonial";
import "./../../css/Views/Portfolio.css";

class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: true
    };

    this.handleCurrent = this.handleCurrent.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleCurrent(x) {
    this.setState({ current: x });
  }

  render() {
    if (this.props.data) {
      const d = this.props.data.data;
      const bgImg = `url(${d.gridbackground.url})`;

      const companies = this.props.companies;

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
                <h3 className="serif">
                  <span
                    className={this.state.current ? "active" : ""}
                    onClick={() => this.handleCurrent(true)}
                  >
                    Current
                  </span>{" "}
                  /{" "}
                  <span
                    className={this.state.current ? "" : "active"}
                    onClick={() => this.handleCurrent(false)}
                  >
                    Past
                  </span>
                </h3>
              </div>
            </div>
            {/* start portfolio grid */}
            <div className="portfolio-grid" style={{ backgroundImage: bgImg }}>
              {companies.map((c, index) => {
                if (this.state.current) {
                  if (c.data.current === "current") {
                    return <PortfolioItem key={index} data={c} />;
                  }
                }
                if (!this.state.current) {
                  if (c.data.current === "past") {
                    return <PortfolioItem key={index} data={c} />;
                  }
                }
              })}
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
          <Footer/>
        </div>

      );
    } else {
      return "Loading...";
    }
  }
}

export default Portfolio;
