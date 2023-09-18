import React from "react";
import PropTypes from "prop-types";

const EnrollInput = ({ type, placeholder, ref, className }) => {
	switch (type) {
		case "text":
			return <input type={type} placeholder={placeholder} ref={ref} className={className}/>;
		case "email":
			return <input type={type} placeholder={placeholder} ref={ref} className={className}/>;
		case "tel":
			return <input type={type} placeholder={placeholder} ref={ref} className={className}/>;
		default:
			return <input type={type} placeholder={placeholder} ref={ref} className={className}/>;
	}
};

EnrollInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default EnrollInput;
