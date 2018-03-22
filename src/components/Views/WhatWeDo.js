import React from "react";
import BlueBox from "../Components/BlueBox";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";

import "./../../css/Views/WhatWeDo.css";

class WhatWeDo extends React.Component {
  componentDidMount() {
    console.log("props will be below");
    console.log(this.props);
  }

  render() {
    if (this.props.data) {
      const wwd = this.props.data.data;
      return (
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
                <p className="caption serif">image caption</p>
                <div className="list-wrap">
                  <ListItem item={wwd.body["0"]} />

                  <BlueBox
                    left="10%"
                    top={this.props.width < 1000 ? "18%" : "20%"}
                    width={this.props.width < 1000 ? "80%" : "20vw"}
                    height={this.props.width < 1000 ? "85%" : "20vw"}
                  />
                </div>
              </div>{" "}
              {/*  end inner wrap */}
            </div>
          </div>
        </div>
      );
    } else {
      return " ";
    }
  }
}

export default WhatWeDo;
