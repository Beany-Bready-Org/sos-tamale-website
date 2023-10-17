import React from "react";
import footerLogo from "../assets/images/logo2.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <NavLink to="https://github.com/Beany-Bready-Org/sos-tamale-website" className="link authors" target="_blank">
          Beany-Bready Org - Emmanuel Opoku-Ameyaw & Alexander Afoko Jnr.
          </NavLink>
        </p>
		<NavLink to="https://github.com/Beany-Bready-Org/sos-tamale-website" target="_blank" className="github-reachout">
			GitHub
			<FontAwesomeIcon icon={faGithub} className="icon"/>
		</NavLink>
      </div>
		</>
	);
};

export default Footer;
