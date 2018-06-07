import React from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
import TeamMember from "../Components/TeamMember";

import "./../../css/Views/AboutUs.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.handleCurrent = this.handleCurrent.bind(this);
    this.state = {
      selectedKey: 0,
      team: true
    };
  }

  handleCurrent(x) {
    this.setState({ team: x });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.data) {
      const about = this.props.data.data;
      return (
        <div>
          <div className="aboutus section-wrap">
            <Header index="05" title="About Us" />

            {/*  start column */}
            <div className="col-wrap">
              <div className="col-left">
                <h3
                  className="serif description"
                  dangerouslySetInnerHTML={this.props.handleHighlight(
                    about.tagline["0"]
                  )}
                />
                <div className="paragraph serif">
                  {about.description.map((p, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={this.props.handleHighlight(
                        about.description[index]
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="col-right">
                <div className="inner-wrap">
                  <img src={about.image.url} alt="" />
                  <p className="caption">image caption</p>
                </div>{" "}
                {/*  end inner wrap */}
              </div>

              {/*  end column */}
            </div>
            <div className="our-team">
              <div className="inner-wrap">
                <h3>Our Team</h3>
                <h3 className="serif our-team-tagline">
                  {about.teamtagline["0"].text}
                </h3>
                <div className="team-members">
                  <h3 className="serif">
                    <span
                      className={this.state.team ? "active" : ""}
                      onClick={() => this.handleCurrent(true)}
                    >
                      Team
                    </span>{" "}
                    /{" "}
                    <span
                      className={this.state.team ? "" : "active"}
                      onClick={() => this.handleCurrent(false)}
                    >
                      Operating Advisors
                    </span>
                  </h3>
                  {about.teammember.map((m, index) => {
                    if (this.state.team) {
                      if (m.role === "team") {
                        return (
                          <TeamMember
                            name={m.name["0"].text}
                            jobtitle={m.jobtitle["0"].text}
                            bio={m.bio["0"].text}
                            headshot={m.headshot.url}
                            key={index}
                            index={index}
                          />
                        );
                      }
                    }
                    if (!this.state.team) {
                      if (m.role === "operations") {
                        return (
                          <TeamMember
                            name={m.name["0"].text}
                            jobtitle={m.jobtitle["0"].text}
                            bio={m.bio["0"].text}
                            headshot={m.headshot.url}
                            key={index}
                            index={index}
                          />
                        );
                      }
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default AboutUs;
