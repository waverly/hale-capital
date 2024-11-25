import React from "react";
import "./../../css/Components/TeamMember.css";

const TeamMember = member => {
  if (member) {
    return (
      <div
        className={"team-member " + (member.isSelected ? "expanded" : "closed")}
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
              <div className="bio">
                <p className="serif">{member.bio}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  } else {
    return <h1>no props</h1>;
  }
};

export default TeamMember;
