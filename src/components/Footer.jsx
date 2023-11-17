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
							<NavLink to="https://web.facebook.com/SOSCVGHANA/?_rdc=1&_rdr">Facebook</NavLink>
						</li>
						<li>
							<NavLink to="https://twitter.com/SOSCVGhana">Twitter</NavLink>
						</li>
						<li>
							<NavLink to="https://gh.linkedin.com/company/sos-children-s-villages-in-ghana">Linkedin</NavLink>
						</li>
						<li>
							<NavLink to="https://www.instagram.com/sos_hgic/?hl=en">Instagram</NavLink>
						</li>
					</ul>
					<ul className="footer-main__links-other-links">
            <h3 className="footer-header">Other Links</h3>
						<li>
							<NavLink to="https://www.sos-childrensvillages.org/where-we-help/africa/ghana">SOS CV Ghana</NavLink>
						</li>
						<li>
							<NavLink to="https://www.soshgic.edu.gh/">SOS HGIC</NavLink>
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
