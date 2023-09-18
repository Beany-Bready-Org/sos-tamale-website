import React from "react";
import PropTypes from "prop-types";

const EnrollInput = ({ type, placeholder, ref, className, name }) => {
	switch (type) {
		case "text":
			return (
				<input
					type={type}
					placeholder={placeholder}
					ref={ref}
					className={className}
					name={name}
				/>
			);
		case "email":
			return (
				<input
					type={type}
					placeholder={placeholder}
					ref={ref}
					className={className}
					name={name}
				/>
			);
		case "tel":
			return (
				<input
					type={type}
					placeholder={placeholder}
					ref={ref}
					className={className}
					name={name}
				/>
			);
		default:
			return (
				<input
					type={type}
					placeholder={placeholder}
					ref={ref}
					className={className}
					name={name}
				/>
			);
	}
};

EnrollInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default EnrollInput;
