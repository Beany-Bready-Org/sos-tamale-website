import React from "react";
import SuccessCard from "./SuccesCard";

const SuccessSection = () => {
	return (
		<section className="success-section">
			<h2 className="success-section__header section-header">
				Our Success stories
			</h2>
			<p className="success-section__description section-description">
				See a few of our success stories over the past academic years
			</p>
            <div className="success-section__cards">
                <SuccessCard />
                <SuccessCard />
            </div>
		</section>
	);

};

export default SuccessSection;
