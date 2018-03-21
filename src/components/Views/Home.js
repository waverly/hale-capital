import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Slideshow from "../Components/Slideshow";
import SpanLetter from "../Components/SpanLetter";

import "./../../css/Views/Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      animationDirection: "previous"
    };
  }

  // span tagline transitions
  // get list of all spans within

  render() {
    if (!this.props.data) return " Hmm ";

    const spanStyle = {
      opacity: "0"
    };

    const data = this.props.data.data;
    return (
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={700}
        transitionAppearTimeout={700}
        transitionLeaveTimeout={700}
      >
        <div className="home-wrap">
          <div className="tagline">
            <h1>
              <div className="wrapper">
                <div className="contents">
                  <div className="inner highlight">
                    <span className="highlight">
                      <SpanLetter letter="R" delay={300} />
                      <SpanLetter letter="e" delay={500} />
                      <SpanLetter letter="i" delay={700} />
                      <SpanLetter letter="n" delay={900} />
                      <SpanLetter letter="v" delay={1100} />
                      <SpanLetter letter="e" delay={1300} />
                      <SpanLetter letter="n" delay={1500} />
                      <SpanLetter letter="t" delay={1700} />
                      <SpanLetter letter="i" delay={1900} />
                      <SpanLetter letter="n" delay={2100} />
                      <SpanLetter letter="g" delay={2300} />
                    </span>
                  </div>
                </div>
              </div>
              <span> </span>Technology Companies Since 2007
            </h1>
          </div>
          <div className="bg-fade" />
          <div className="background-carousel">
            <Slideshow
              next={this.props.next}
              previous={this.props.previous}
              activeSlide={this.props.activeSlide}
              slides={this.props.slides}
            />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
