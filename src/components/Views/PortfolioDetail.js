import React from "react";
import "./../../css/Views/PortfolioDetail.css";

const PortfolioDetail = props => {
  if (!props.data) return " ";
  console.log(props);

  let logo;
  let img;
  let name;

  if (props.data.data.name) {
    name = props.data.data.name["0"].text;
  }
  if (props.data.data.logo) {
    logo = props.data.data.logo.url;
  }
  if (props.data.data.image) {
    img = props.data.data.image.url;
  }

  const description = props.data.data.description["0"].text;
  return (
    <div className="section-wrap portfolio-detail-wrap">
      {/* start header */}
      <div className="separator" />
      <div className="context">{name ? <p>Portfolio / {name}</p> : null}</div>

      <div className="inner-wrap">
        <div className="left">
          {logo ? <img src={logo} alt="" /> : null}

          <p className="description">{description}</p>
        </div>
        <div className="right">{img ? <img src={img} alt="" /> : null}</div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
