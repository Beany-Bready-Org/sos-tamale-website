const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
            type: String,
            required: false
        },
		file: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);
