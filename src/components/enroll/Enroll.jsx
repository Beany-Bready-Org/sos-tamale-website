import React from "react";
import sideNavImage from "../../assets/images/new-side-nav-image.svg";
import EnrollInput from "./EnrollInput";
import siteLogo from "../../assets/images/logo2.png";
import "../../stylesheets/Enroll.scss";

const Enroll = () => {
	return (
		<main className="enroll-container">
			<form className="enroll-form">
				<div className="enroll-form__heading">
                <h2 className="enroll-form__heading-header --header">Enroll Your Ward</h2>
				<p className="enroll-form__heading-description --description">
					Please fill out each box to provide information about your ward.
				</p>
                </div>
				<EnrollInput
					type="text"
					placeholder="Enter Your Name Here.."
					className="enroll-form__input --input"
				/>
				<EnrollInput
					type="email"
					placeholder="Enter Your Email Here.."
					className="enroll-form__input --input"
				/>
				<div className="enroll-form__input telephone --input">
					<div className="telephone__contry-code">+233</div>
					<EnrollInput type="tel" placeholder="Enter your phone number here" className="--input"/>
				</div>
				<EnrollInput
					type="text"
					placeholder="Enter Your Ward's Name here..."
					className="enroll-form__input --input"
				/>
				<EnrollInput
					type="text"
					placeholder="What's your ward's previous school...?"
					className="enroll-form__input --input"
				/>
				<button className="--cta --input">Make enrollment request</button>
			</form>
			<header className="side-nav">
				<nav className="secondary-navbar">
					<div className="logo">
						<img src={siteLogo} alt="Site logo" style={{width: "100px"}}/>
					</div>
					<div className="hamburger">
						<div className="line line1"></div>
						<div className="line line2"></div>
						<div className="line line3"></div>
					</div>
				</nav>
				<div className="side-nav__image">
					<img src={sideNavImage} alt="Side nav image" />
				</div>
				<div className="side-nav__sdg">
					<blockquote className="side-nav__sdg--four">
						”Ensure inclusive and equitable quality education and promote
						lifelong learning opportunities for all”
					</blockquote>
					<b className="side-nav__sdg--sdg">SDG 4</b>
				</div>
			</header>
		</main>
	);
};

export default Enroll;
