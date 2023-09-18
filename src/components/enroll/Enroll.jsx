import React from "react";
import sideNavImage from "../../assets/images/new-side-nav-image.svg";
import EnrollInput from "./EnrollInput";

const Enroll = () => {
	return (
		<>
			<form>
				<h2 className="form-header">Enroll Your Ward</h2>
				<p className="form-description">
					Please fill out each box to provide information about your ward.
				</p>
				<EnrollInput type="text" placeholder="Enter Your Name Here.." />
				<EnrollInput type="email" placeholder="Enter Your Email Here.." />
				<div className="telephone">
					<div className="telephone__contry-code">+233</div>
					<EnrollInput type="tel" placeholder="Enter your phone number here" />
				</div>
				<EnrollInput type="text" placeholder="Enter Your Ward's Name here..." />
				<EnrollInput
					type="text"
					placeholder="What's your ward's previous school...?"
				/>
                <button className="--cta">
                Make enrollment request
                </button>
			</form>
		</>
	);
};

export default Enroll;
