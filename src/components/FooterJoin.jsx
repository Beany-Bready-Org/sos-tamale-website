import React from "react";
import { Link } from "react-router-dom";
import backImage from "../assets/images/gallery-images/gallery-img27.png";

const FooterJoin = () => {
	return (
		<div className="footer-join">
			<img src={backImage} alt="" className="footer-join__image"/>
			<div className="footer-join__content">
				<h2>Ready for quality education?</h2>
				<p>Talk to us today!</p>
			</div>
			<Link to="/enroll" className="footer-join__cta">
				Enroll Now
			</Link>
		</div>
	);
};

export default FooterJoin;
