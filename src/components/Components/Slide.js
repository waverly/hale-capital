import React from "react";
import { isImage } from "../../utils/helpers";

const Slide = props => {
  const { media, active } = props;

  const mediaMarkup = isImage(media) ? (
    <img
      className="slide"
      src={media}
      style={{
        transition: "opacity 0.5s",
        opacity: active ? "1" : "0"
      }}
    />
  ) : (
    <video
      className="slide"
      playsInline
      autoPlay
      muted
      loop
      src={media}
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
  return mediaMarkup;
};

export default Slide;
