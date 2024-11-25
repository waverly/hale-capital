import React from "react";
import BlueBox from "../Components/BlueBox";
import Header from "../Components/Header";
import Footer from "./Footer";
import ListItem from "../Components/ListItem";

import "./../../css/Views/WhatWeDo.css";

class WhatWeDo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.data) {
      const wwd = this.props.data.data;
      return (
        <div>
          <div className="what-we-do section-wrap">
            <Header index="01" title={wwd.title["0"].text} />
            <div className="col-wrap">
              <div className="col-left">
                <h3
                  className="serif description"
                  dangerouslySetInnerHTML={this.props.handleHighlight(
                    wwd.tagline["0"]
                  )}
                />
                <div className="paragraph serif">
                  {wwd.description.map((p, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={this.props.handleHighlight(
                        wwd.description[index]
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="col-right">
                <div className="inner-wrap">
                  <img src={wwd.image.url} alt="" />
                  <p className="caption">{wwd.caption[0].text}</p>
                  <div className="list-wrap">
                    <ListItem item={wwd.body["0"]} />

                    <BlueBox
                      left={this.props.width < 1000 ? "0" : "8%"}
                      top={this.props.width < 1000 ? "5%" : "25%"}
                      width={this.props.width < 1000 ? "100%" : "300px"}
                      height={this.props.width < 1000 ? "100%" : "300px"}
                    />
                  </div>
                </div>{" "}
                {/*  end inner wrap */}
              </div>
            </div>
          </div>
          <Footer socials={this.props.socials} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default WhatWeDo;
