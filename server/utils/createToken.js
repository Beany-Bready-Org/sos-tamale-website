const jwt = require("jsonwebtoken");

const createToken = (res, name, email) => {
	// Create / sign token
	let token = jwt.sign({ name, email }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

	// Set JWT as Http-Only token
	res.cookie("jwt", token, {
		secure: true,
		sameSite: "strict",
		httpOnly: true,
		maxAge: 24 * 30 * 60 * 60 * 1000,
	});

	return token;
};

module.exports = createToken;
