import React from "react";
import Header from "../Components/Header";
import TeamMember from "../Components/TeamMember";

import "./../../css/Views/AboutUs.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 0,
      expanded: false
    };

    this.revealChild = this.revealChild.bind(this);
  }

  revealChild(key) {
    this.setState({ selectedKey: key });
  }

  render() {
    if (this.props.data) {
      const about = this.props.data.data;
      return (
        <div className="aboutus section-wrap">
          <Header index="01" title="About Us" />

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
                <p className="caption serif">image caption</p>
              </div>{" "}
              {/*  end inner wrap */}
            </div>

            {/*  end column */}
          </div>
          <div className="our-team">
            <div className="inner-wrap">
              <h3>Our Team</h3>
              <h3 className="serif">{about.teamtagline["0"].text}</h3>
              <div className="team-members">
                {about.teammember.map((m, index) => (
                  <TeamMember
                    name={m.name["0"].text}
                    jobtitle={m.jobtitle["0"].text}
                    bio={m.bio["0"].text}
                    headshot={m.headshot.url}
                    key={index}
                    index={index}
                    active={this.state.active}
                    revealChild={() => this.revealChild(index)}
                    isSelected={this.state.selectedKey === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default AboutUs;
