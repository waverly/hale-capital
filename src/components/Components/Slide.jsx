import React from "react";
import { isImage, isVideo } from "../../utils/helpers";

class Slide extends React.Component {
  componentDidMount() {}

  render() {
    const { media, active } = this.props;
    if (isImage(media)) {
      return (
        <img
          className="slide"
          src={media}
          alt=""
          style={{
            transition: "opacity 0.5s",
            opacity: active ? "1" : "0"
          }}
        />
      );
    }
    if (isVideo(media) ){
      if (active) {
        if (this.vid) {
          this.vid.currentTime = 0;
          this.vid.play();
        }
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
    return (<React.Fragment />)
  }
}

export default Slide;
