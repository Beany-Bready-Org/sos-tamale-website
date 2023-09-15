import React from "react";
import footerLogo from "../assets/images/logo2.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer-main">
				<div className="footer-main__logo">
					<img src={footerLogo} alt="SOS Logo White" style={{width: "90px"}}/>
					<h2
						className="footer-main__logo-school-name"
						style={{ textTransform: "capitalize" }}
					>
						SOS Hermann Gmeiner school tamale
					</h2>
				</div>
				<div className="footer-main__links">
					<ul className="footer-main__links-social">
            <h3 className="footer-header">Get in touch</h3>
						<li>
							<NavLink to="#">Facebook</NavLink>
						</li>
						<li>
							<NavLink to="#">Twitter</NavLink>
						</li>
						<li>
							<NavLink to="#">Linkedin</NavLink>
						</li>
						<li>
							<NavLink to="#">Instagram</NavLink>
						</li>
					</ul>
					<ul className="footer-main__links-other-links">
            <h3 className="footer-header">Other Links</h3>
						<li>
							<NavLink to="#">SOS Ghana</NavLink>
						</li>
						<li>
							<NavLink to="#">SOS HGIC</NavLink>
						</li>
					</ul>
				</div>
			</div>
      <div className="footer-secondary">
        <p className="footer-secondary__org">
          &copy;
        <NavLink to="#" className="link">
          Beany-Bread Org - Emmanuel Opoku & Alexander Afoko Jnr.
          </NavLink>
        </p>
        <ul className="footer-secondary__nav">
          <li>
            <NavLink to="#" className="link">Home</NavLink>
          </li>
          <li>
            <NavLink to="#" className="link">About</NavLink>
          </li>
          <li>
            <NavLink to="#" className="link">Contact</NavLink>
          </li>
        </ul>
      </div>
		</>
	);
};

export default Footer;
