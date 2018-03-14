import React from "react";
import "./../../css/Views/PortfolioDetail.css";

const PortfolioDetail = props => {
  if (!props.data) return " ";
  console.log(props);
  const name = props.data.data.name["0"].text;
  const img = props.data.data.image.url;
  const logo = props.data.data.logo.url;
  const description = props.data.data.description["0"].text;
  return (
    <div className="section-wrap portfolio-detail-wrap">
      {/* start header */}
      <div className="separator" />
      <div className="context">
        <p>Portfolio / {name}</p>
      </div>

      <div className="inner-wrap">
        <div className="left">
          <img src={logo} alt="" />
          <p className="description">{description}</p>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
