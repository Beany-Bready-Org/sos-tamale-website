import React from "react";
import didYouKnowImage from "../assets/images/didyouknow.svg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

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
                <Link to="#">Visit Our Main Website</Link>
                <Link to="#">Visit International College
                <FontAwesomeIcon icon={faArrowCircleRight}/>
                </Link>
            </div>
            <div className="overkay">
                <img src={didYouKnowImage} alt="A background" />
            </div>
		</div>
	);
};

export default DidYouKnow;
