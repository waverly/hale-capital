import React from 'react';
import './../../css/Components/BlueBox.css';

const HelloWorld = ({width, height, left, top}) => (


  <div className="blue-box" style={{width: width, height: height, left: left, top: top}}>
    <div className="light-blue"></div>
    <div className="dark-blue"></div>
  </div>

);

export default HelloWorld;
