const express = require("express");
const { registerAccount } = require("../controllers/adminController");
// Export
const router = express.Router();

router.get("/", registerAccount);

module.exports = router;
