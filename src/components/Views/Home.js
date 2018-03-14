import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./../../css/Views/Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      animationDirection: "previous"
    };
  }

  render() {
    if (!this.props.data) return " Hmm ";

    const data = this.props.data.data;
    return (
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={700}
        transitionAppearTimeout={700}
        transitionLeaveTimeout={700}
      >
        <div className="home-wrap">
          <div className="tagline">
            <h1>
              <span className="highlight">Reinventing</span> Technology
              Companies Since 2007
            </h1>
          </div>
          <div className="bg-fade" />
          <div
            className="bg-img"
            style={{
              backgroundImage: "url(" + data.backgroundimage.url + ")"
            }}
          />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
