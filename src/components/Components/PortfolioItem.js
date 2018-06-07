import React from "react";
import { Link } from "react-router-dom";
import "./../../css/Components/PortfolioItem.css";

const PortfolioItem = props => {
  const { data } = props;

  if (!data) return " ";
  let logo;
  if (data.data.logo) {
    logo = data.data.logo.url;
  }

  const uid = data.uid;

  if (logo) {
    return (
      <div className="portfolio-item">
        <Link to={`/portfolio/${uid}`}>
          <img src={logo} alt="" />
        </Link>
      </div>
    );
  } else {
    return "";
  }
};

export default PortfolioItem;
