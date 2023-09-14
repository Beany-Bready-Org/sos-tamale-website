import React from "react";
import { Link } from "react-router-dom";
import Staff from "./Staff";

const StaffSection = () => {
	return (
		<section className="staff-section">
			<h2 className="staff-section__header section-header">Meet Our Staff</h2>
			<p className="staff-section__description section-description">
				Meet our noble staff members who have greatly helped in the success of
				our school
			</p>
			<div className="staff-section__staff">
				<Staff />
			</div>
			<Link className="--cta">
				See All Staff
			</Link>
		</section>
	);
};

export default StaffSection;
