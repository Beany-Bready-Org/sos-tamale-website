import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

const Statistics = ({ teachers, students, nonTeachingStaff }) => {
	const [count, setCount] = useState(0);

	return (
		<section className="statistics">
			<div className="statistics__item">
				<h2>{teachers}</h2>
				<p>Teaching Staff</p>
			</div>
			<div className="statistics__item">
				<h2>{students}</h2>
				<p>Students</p>
			</div>
			<div className="statistics__item">
				<h2>{nonTeachingStaff}</h2>
				<p>Non-Teaching Staff</p>
			</div>
		</section>
	);
};

Statistics.propTypes = {
	teachers: PropTypes.string.isRequired,
	students: PropTypes.string.isRequired,
	nonTeachingStaff: PropTypes.string.isRequired,
};

export default Statistics;
