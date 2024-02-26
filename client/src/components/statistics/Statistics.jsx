import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const Statistics = ({ teachers, students, nonTeachingStaff }) => {
	const [numTeachers, setNumTeachers] = useState(0);
	const [numStudents, setNumStudents] = useState(0);
	const [numNonTeaching, setNumNonTeaching] = useState(0);

	// Incrementor for fact figures
	let incrementor = 0;

	if (teachers <= 10 || students <= 10 || nonTeachingStaff <= 10) {
		incrementor = 1;
	} else if (teachers >= 100 || students >= 100 || nonTeachingStaff >= 100) {
		incrementor = 10;
	} else {
		incrementor = 2;
	}

	let incrementSpeed = 75

	// for teachers
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (numTeachers !== teachers) {
				setNumTeachers((prevNumber) => prevNumber + incrementor);
			} else {
				return () => clearInterval(intervalId);
			}
		}, incrementSpeed);

		return () => clearInterval(intervalId);
	}, [numTeachers]);

	// for students
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (numStudents !== students) {
				setNumStudents((prevNumber) => prevNumber + incrementor);
			} else {
				return () => clearInterval(intervalId);
			}
		}, incrementSpeed);

		return () => clearInterval(intervalId);
	}, [numStudents]);

	// for non-teaching staff
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (numNonTeaching !== nonTeachingStaff) {
				setNumNonTeaching((prevNumber) => prevNumber + incrementor);
			} else {
				return () => clearInterval(intervalId);
			}
		}, incrementSpeed + 100);

		return () => clearInterval(intervalId);
	}, [numNonTeaching]);

	return (
		<section className="statistics">
			<div className="statistics__item">
				<h2>{numTeachers} +</h2>
				<p>Teaching Staff</p>
			</div>
			<div className="statistics__item">
				<h2>{numStudents} +</h2>
				<p>Students</p>
			</div>
			<div className="statistics__item">
				<h2>{numNonTeaching} +</h2>
				<p>Non-Teaching Staff</p>
			</div>
		</section>
	);
};

// Prop type specifications
Statistics.propTypes = {
	teachers: PropTypes.number.isRequired,
	students: PropTypes.number.isRequired,
	nonTeachingStaff: PropTypes.number.isRequired,
};

export default Statistics;
