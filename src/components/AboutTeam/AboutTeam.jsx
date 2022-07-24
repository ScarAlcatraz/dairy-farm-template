import React from "react";
import "./AboutTeam.scss";
import ProPic from "../../imgs/ProfilePicture.png";

function AboutTeam() {
  return (
    <div>
      <div className="About-team-container">
        <div className="About-team-wrapper">
          <div className="About-title">
            <p>

            Our Team
            </p>
            </div>
          <div className="Team">
            <div className="Member-image">
              <img src={ProPic} alt="" />
            </div>
            <div className="Member-description">
              <p className="Member-name">Lorem Ipsum Dolor</p>
              <p>Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
