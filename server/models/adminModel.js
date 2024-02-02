const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		accessToken: {
			type: String,
			required: false,
		},
		avatar: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
