const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const upload = require("express-fileupload");
const path = require("path")

dotenv.config();

const app = express();

const port = process.env.PORT || 5003;
// Middleware
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
		optionsSuccessStatus: 200,
	})
);
app.options(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload())
app.use("/uploads", express.static(path.join(__dirname + "/uploads")))

// Admin routes
const adminRoutes = require("./routes/adminRoutes.js");
app.use("/api/admin", adminRoutes);

// Start mongoose database connection
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
	app.listen(port, () => console.log(`Server running on ${port}`));
});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB just the fun!!!!");
});
