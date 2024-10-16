import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../stylesheets/InfoBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const InfoBox = ({ title, description, linkRef }) => {
  return (
    <div className="info-box">
      <h1 className="info-box__header">{title}</h1>
      <p className="info-box__description">{description}</p>
      <Link to={linkRef}>
        <button
          type="button"
          title={"Read more about this information."}
          className="info-box__cta --cta-outline"
        >
          Read More
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Link>
    </div>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkRef: PropTypes.string.isRequired,
};

export default InfoBox;
