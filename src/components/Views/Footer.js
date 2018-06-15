import React from "react";

import "./../../css/Views/Footer.css";

class Footer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="footer-wrap">
        <div className="left">
          <div className="address sub-left">
            <p>17 State Street</p>
            <p>Suite 3230</p>
            <p>New York, NY, 10004</p>
            <p>212 751 1201</p>
          </div>

          <div className="social sub-left">
            <a href={this.props.socials.data.facebook.url} target="_blank">
              Facebook
            </a>
            <a href={this.props.socials.data.twitter.url} target="_blank">
              Twitter
            </a>
            <a href={this.props.socials.data.linkedin.url} target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="right">
          <p>Hale Capital Partners 2018</p>
        </div>
      </div>
    );
  }
}

export default Footer;
