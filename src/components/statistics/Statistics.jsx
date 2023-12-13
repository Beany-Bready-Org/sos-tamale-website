import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const Statistics = ({ teachers, students, nonTeachingStaff }) => {
	const [numteachers, setNumTeachers] = useState(0);
	const [numStudents, setNumStudents] = useState(0);
	const [numNonTeaching, setNumNonTeaching] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (numteachers !== teachers) {
				setNumTeachers((prevNumber) => prevNumber + 1);
			} else {
				return () => clearInterval(intervalId)
			}
			
		}, numteachers/1000);

		return () => clearInterval(intervalId)


	}, [numteachers, teachers]);

	return (
		<section className="statistics">
			<div className="statistics__item">
				<h2>{numteachers} +</h2>
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
	teachers: PropTypes.number.isRequired,
	students: PropTypes.number.isRequired,
	nonTeachingStaff: PropTypes.number.isRequired,
};

export default Statistics;
