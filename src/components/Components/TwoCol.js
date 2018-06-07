import React from "react";
import "./../../css/Components/TwoCol.css";

const Header = ({ index, title }) => (
  <div className="col-wrap">
    <div className="col-left">
      <h3 className="serif description">{wwd.tagline["0"].text}</h3>
      <div className="paragraph serif">
        {wwd.description.map((p, index) => <p key={index}> {p.text} </p>)}
      </div>
    </div>

    <div className="col-right">
      <div className="inner-wrap">
        <img src={wwd.image.url} alt="" />
        <p className="caption">image caption</p>
        <div className="list-wrap">
          <ul className="list">
            <li className="list-title sans-serif">Industries</li>
            {wwd.industry.map((p, index) => (
              <li key={index}> {p["industry-type"]["0"].text} </li>
            ))}
          </ul>
          <BlueBox left="10%" top="10%" width="20vw" height="20vw" />
        </div>
      </div>{" "}
      {/*  end inner wrap */}
    </div>
  </div>
);

export default Header;
