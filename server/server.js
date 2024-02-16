const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const upload = require("express-fileupload");
const path = require("path");
// Configure dotenv
dotenv.config();
const establishDbConnection = require("./utils/connectDB.js")

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
app.use(upload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Admin routes
const adminRoutes = require("./routes/adminRoutes.js");
app.use("/api/admin", adminRoutes);

// ESatablish MongoDB database connection
establishDbConnection(process.env.CONNECTION_STRING, port, app)
