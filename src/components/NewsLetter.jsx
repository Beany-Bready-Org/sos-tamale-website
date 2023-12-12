import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/NewsLetter.scss";

const NewsLetter = () => {
	return (
		<div>
			<h1>Sign up for ou news letter</h1>
			<div className="newsletter_content">
				<input type="text" placeholder="Your email here..." />
				<button type="submit">
					Sign Up
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
};

export default NewsLetter;
