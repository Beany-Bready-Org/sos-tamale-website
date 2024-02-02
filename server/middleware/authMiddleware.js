const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
	const Authorizatinon = req.headers.Authorization || req.headers.authorization;

	if (Authorizatinon && Authorizatinon.startsWith("Bearer")) {
		const token = Authorizatinon.split(" ")[1];

		jwt.verify(
			token,
			process.env.JWT_SECRET,
			(error,
			(info) => {
				if (error) {
					return next(res.status(401).json({ message: error.message }));
				}

				req.user = info;
				next();
			})
		);
	} else {
		return next(
			res
				.status(401)
				.json({ message: "Token not found, failed to authenticate" })
		);
	}
};

export default authenticate;
