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
      animationDirection: "previous",
      taglineClass: "",
      reinventClass: "",
      innerClass: ""
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ taglineClass: "taglineAnimate" }), 3800);
    setTimeout(() => this.setState({ innerClass: "innerAnimate" }), 2400);
  }

  render() {
    if (!this.props.data) return " ";

    let caption;
    this.props.data
      ? (caption = this.props.data.data.body[this.props.activeSlide].primary
          .caption)
      : console.log(" no data");

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
                  <div className={"inner highlight " + this.state.innerClass}>
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
              <span className={"taglineText " + this.state.taglineClass}>
                Technology Companies Since 2007
              </span>
            </h1>
          </div>
          <div className="bg-fade" />
          <div className="homepage-caption">
            <p>
              {caption.length > 0
                ? this.props.data.data.body[this.props.activeSlide].primary
                    .caption[0].text
                : " "}
            </p>
          </div>
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
