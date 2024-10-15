import React from "react";
import footerLogo from "../assets/images/logo2.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faXTwitter,
	faLinkedinIn,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterJoin from "./FooterJoin";

const Footer = () => {
	return (
		<>
			<div className="footer-main">
				<div className="footer-main__logo">
					<img
						src={footerLogo}
						alt="SOS Logo White"
						style={{ width: "90px" }}
					/>
					<div className="footer-main__name">
						<div className="footer-main__name-school">
						<h2
							className="footer-main__logo-school-name"
							style={{ textTransform: "capitalize" }}
						>
							SOS Hermann Gmeiner school tamale
						</h2>
						<em>We are tops!</em>
						</div>
						<FooterJoin />
					</div>
				</div>
				<div className="footer-main__links">
					<ul className="footer-main__links-social">
						<h3 className="footer-header">Get in touch</h3>
						<li>
							<NavLink to="https://web.facebook.com/SOSCVGHANA/?_rdc=1&_rdr">
								Facebook
							</NavLink>
						</li>
						<li>
							<NavLink to="https://twitter.com/SOSCVGhana">Twitter</NavLink>
						</li>
						<li>
							<NavLink to="https://gh.linkedin.com/company/sos-children-s-villages-in-ghana">
								Linkedin
							</NavLink>
						</li>
						<li>
							<NavLink to="https://www.instagram.com/sos_hgic/?hl=en">
								Instagram
							</NavLink>
						</li>
					</ul>
					<ul className="footer-main__links-other-links">
						<h3 className="footer-header">Other Links</h3>
						<li>
							<NavLink to="https://www.sos-childrensvillages.org/where-we-help/africa/ghana">
								SOS CV Ghana
							</NavLink>
						</li>
						<li>
							<NavLink to="https://www.soshgic.edu.gh/">SOS HGIC</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-secondary">
				<p className="footer-secondary__org">
					&copy; 2024
					<NavLink
						to="https://github.com/Beany-Bready-Org/sos-tamale-website"
						className="link authors"
						target="_blank"
					>
						Emmanuel Opoku-Ameyaw & Alexander Afoko Jnr.
					</NavLink>
				</p>
				<ul className="footer-secondary__social">
					<li className="social-link">
						<Link to="https://web.facebook.com/SOSCVGHANA/?_rdc=1&_rdr">
							<FontAwesomeIcon icon={faFacebook} />
						</Link>
					</li>
					<li className="social-link">
						<Link to="https://gh.linkedin.com/company/sos-children-s-villages-in-ghana">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</Link>
					</li>
					<li className="social-link">
						<Link to="https://www.instagram.com/sos_hgic/?hl=en">
							<FontAwesomeIcon icon={faInstagram} />
						</Link>
					</li>
					<li className="social-link">
						<Link to="https://twitter.com/SOSCVGhana">
							<FontAwesomeIcon icon={faXTwitter} />
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Footer;
