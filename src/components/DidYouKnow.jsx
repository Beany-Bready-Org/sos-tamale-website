import React from "react";
import didYouKnowImage from "../assets/images/didyouknow.svg";
import { Link } from "react-router-dom";
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        sollicitudin urna non libero porta aliquet. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <div className="did-you-know__buttons">
        <Link to="#" className="--cta-secondary">
          Visit Our Main Website
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="arrow-icon"
          />
        </Link>
        <Link to="#" className="college-cta">
          Visit International College
          <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
        </Link>
      </div>

      <div className="overlay">
        <img src={didYouKnowImage} alt="A background" />
      </div>
    </div>
  );
};

export default DidYouKnow;
