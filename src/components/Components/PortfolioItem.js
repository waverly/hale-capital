import React from "react";
import { Link } from "react-router-dom";
import "./../../css/Components/PortfolioItem.css";

const PortfolioItem = props => {
  const { data } = props;

  if (!data) return " ";
  const logo = data.data.logo.url;
  const uid = data.uid;

  return (
    <div className="portfolio-item">
      <Link to={`/portfolio/${uid}`}>
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default PortfolioItem;
