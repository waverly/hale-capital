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
            {this.props.socials ? (
              <div>
                <a href={this.props.socials.data.linkedin.url} target="_blank">
                  LinkedIn
                </a>
                <a href={this.props.socials.data.twitter.url} target="_blank">
                  Twitter
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <div className="right">
          <p>Hale Capital Partners</p>
          <div className="herpderp" />
        </div>
      </div>
    );
  }
}

export default Footer;
