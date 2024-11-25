import React from "react";
import "./../../css/Components/BlueBox.css";

const BlueBox = ({ width, height, left, top }) => (
  <div
    className="blue-box"
    style={{ width: width, height: height, left: left, top: top }}
  >
    <div className="light-blue" />
    <div className="dark-blue" />
  </div>
);

export default BlueBox;
