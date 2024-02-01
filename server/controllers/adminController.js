const asyncHandler = require("../middleware/asyncHandler");
const Admin = require("../models/adminModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const createToken = require("../utils/createToken");

// @route /api/admin/register
// @desc Register admin account
// @access private
const registerAccount = asyncHandler(async (req, res, next) => {
	res.status(200).json({ message: "Create an account" });
	const { name, email, password, token } = req.body;

	if ((!name, !email, !password, !token)) {
		return next(res.status(427).json({ message: "Invalid credentials" }));
	}

	try {
		// Check if user already exists
		const userExists = Admin.findOne({ email });

		if (userExists) {
			return next(
				res
					.status(401)
					.json({ message: "Account already exists, use different email." })
			);
		}

		// Validate token
		if (token !== process.env.ADMIN_TOKEN) {
			return next(res.status(401).json({ message: "Invalid access token" }));
		}

		// Secure user password
		// Create a salt
		const salt = bcrypt.genSalt();
		const hashedPassword = bcrypt.hash(password, salt);

		// Create new user
		const newUser = new Admin({
			name,
			email,
			token,
			password: hashedPassword,
		});

		// Save new user
		await newUser.save();
		// Generate token for user
		let token = createToken(res, newUser?.name, newUser?.email);

		if (newUser) {
			res.status(200).json({ user: await newUser.select("-password"), token });
		}
	} catch (error) {
		res.status(500).json({ message: "An error occured on our end" });
	}
});

const loginUser = asyncHandler(async (req, res, next) => {});

module.exports = { registerAccount };
