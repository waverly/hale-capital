import React from "react";
import "./../../css/Components/TeamMember.css";

const TeamMember = member => {
  if (member) {
    return (
      <div
        className={"team-member " + (member.isSelected ? "expanded" : "closed")}
        onClick={member.revealChild}
      >
        <div className="member-inner-wrap">
          <div className="profile-pic">
            <img src={member.headshot} alt="" />
          </div>

          <div className="text-wrap">
            <div className="info-wrap">
              <div className="name">
                <p className="sans-serif">{member.name}</p>
              </div>
              <div className="jobtitle">
                <p className="serif-italic">{member.jobtitle}</p>
              </div>
            </div>

            <div className="icon">
              <div className="plus">
                <span className="vertical" />
                <span className="horizontal" />
              </div>
              <div className="minus">
                <span className="horizontal" />
              </div>
            </div>

            <div className="carrot" />
          </div>
        </div>

        <div className="bio">
          <p className="serif">{member.bio}</p>
        </div>
      </div>
    );
  } else {
    return <h1>no props</h1>;
  }
};

export default TeamMember;
