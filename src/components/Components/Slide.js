import React from "react";
import { isImage } from "../../utils/helpers";

class Slide extends React.Component {
  componentDidMount() {}

  render() {
    const { media, active } = this.props;

    if (isImage(media)) {
      return (
        <img
          className="slide"
          src={media}
          style={{
            transition: "opacity 0.5s",
            opacity: active ? "1" : "0"
          }}
        />
      );
    } else {
      if (active) {
        this.vid.currentTime = 0;
        this.vid.play();
      }

      return (
        <video
          className="slide"
          playsInline
          muted
          src={media}
          ref={node => {
            this.vid = node;
          }}
          style={{
            transition: "opacity 0.5s",
            opacity: active ? "1" : "0",
            backgroundSize: "cover",
            position: "absolute",
            top: "0",
            left: "0",
            minWidth: "100%",
            minHeight: "100%"
          }}
        />
      );
    }
  }
}

export default Slide;
