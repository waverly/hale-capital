import React from "react";

const Slide = props => {
  const { slide, active } = props;
  return (
    <img
      className="slide"
      src={props.image}
      style={{
        // position: "absolute",
        // minWidth: "100%",
        // minHeight: "100%",
        transition: "opacity 0.5s",
        opacity: active ? "1" : "0"
      }}
    />
  );
};

export default Slide;
