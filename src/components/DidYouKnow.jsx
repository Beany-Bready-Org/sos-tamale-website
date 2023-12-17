import React from "react";
import didYouKnowImage from "../assets/images/didyouknow.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const DidYouKnow = () => {
  return (
    <div className="did-you-know important-section">
      <h2 className="did-you-know__heading">Did You Know?</h2>
      <p className="did-you-know__description">
        SOS Children's Village foundation was founded in 1949 by Hermann Gmeiner to
        support children orphaned after WWII. The first institution was
        established in Austria in 1949. After that, the organisation spread to
        over 118 countries spanning 6 continents.
      </p>
      <div className="did-you-know__buttons">
        <NavLink
          to="https://www.sos-childrensvillages.org"
          className="--cta-secondary"
          target="_blank"
        >
          Visit The Main Website
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="arrow-icon"
          />
        </NavLink>
        <NavLink to="https://www.soshgic.edu.gh/" className="--cta" target="_blank">
          Visit International College
          <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
        </NavLink>
      </div>

      <div className="overlay">
        <img src={didYouKnowImage} alt="A background" />
      </div>
    </div>
  );
};

export default DidYouKnow;
