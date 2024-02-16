const mongoose = require("mongoose");

const establishDbConnection = (connectionString = "", port = 0, app) => {
	// Start mongoose database connection
	mongoose.connect(connectionString, {}).then(() => {
		app.listen(port, () => console.log(`Server running on ${port}`));
	});

	const connection = mongoose.connection;

	connection.once("open", () => {
		console.log("MongoDB just the fun!!!!");
	});

	return connection;
};

module.exports = establishDbConnection;
