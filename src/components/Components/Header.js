import React from "react";
import "./../../css/Components/Header.css";

const Header = ({ index, title }) => (
  <header className="page-header">
    <div className="header-info">
      <div className="index sans-serif">{index}</div>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  </header>
);

export default Header;
