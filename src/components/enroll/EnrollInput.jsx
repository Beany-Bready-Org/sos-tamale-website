import React from "react";
import PropTypes from "prop-types";

const EnrollInput = ({ type, placeholder, inputRef, className, nameValue }) => {
	switch (type) {
		case "text":
		case "email":
		case "tel":
			return (
				<input
					type={type}
					placeholder={placeholder}
					ref={inputRef}
					className={className}
					name={nameValue}
				/>
			);
		default:
			return (
				<input
					type={type}
					placeholder={placeholder}
					ref={inputRef}
					className={className}
					name={nameValue}
				/>
			);
	}
};

EnrollInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	nameValue: PropTypes.string.isRequired,
};

export default EnrollInput;
