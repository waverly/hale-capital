import React from "react";
import Slide from "./Slide";

class Slideshow extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.next();
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.props.slides) return " ";

    return (
      <div className="slideshow-wrapper">
        <div
          className="slideshow"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute"
          }}
        >
          {/* {this.props.slides.map((s, index) => <h1> slide </h1>)} */}
          {this.props.slides.map((s, index) => {
            const currentSlide = this.props.slides[index];
            return (
              <Slide
                key={s}
                media={currentSlide}
                index={index}
                active={index === this.props.activeSlide}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slideshow;
