import React from "react";
import comingSoonImage from "../../assets/images/coming-soon.svg";
import mainLogo from "../../assets/images/logo-main.png";
import "../../stylesheets/Events.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Events = () => {
	return (
		<div className="events">
			<div className="events__logo">
				<img src={mainLogo} alt="SOS Logo Blue" />
        <Link to="/" className="home"> <FontAwesomeIcon icon={faArrowLeft}/> Back Home</Link>
			</div>
			<div className="events__coming-soon-image">
				<img
					src={comingSoonImage}
					alt="Building under construction"
					title="Coming Soon!"
				/>
			</div>
			<div>
				<h1 className="events__coming-soon-header">Coming Soon!</h1>
				<p>
					We are preparing our best of events and memories for you. Hold on
					tight!
				</p>
			</div>
		</div>
	);
};

export default Events;
