const express = require("express");
const { registerAccount, loginUser, logoutUser } = require("../controllers/adminController");
// Export
const router = express.Router();

router.post("/register", registerAccount);
router.post("/login", loginUser)
router.post("/logout", logoutUser)

module.exports = router;
