import React from "react";
import PropTypes from "prop-types";

const EnrollInput = ({ type, placeholder, ref }) => {
	switch (type) {
		case "text":
			return <input type={type} placeholder={placeholder} ref={ref}/>;
		case "email":
			return <input type={type} placeholder={placeholder} ref={ref}/>;
		case "tel":
			return <input type={type} placeholder={placeholder} ref={ref}/>;
		default:
			return <input type={type} placeholder={placeholder} ref={ref}/>;
	}
};

EnrollInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default EnrollInput;
