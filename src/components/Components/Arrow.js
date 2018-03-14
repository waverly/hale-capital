import React from "react";
import "./../../css/Components/Arrow.css";

const Arrow = props => {
  return (
    <span
      className={
        props.color === "lightgrey"
          ? "home arrow arrow-" + props.direction
          : "other arrow arrow-" + props.direction
      }
    />
  );
};

export default Arrow;
