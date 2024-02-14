const express = require("express");
const { registerAccount, loginUser, logoutUser, validateToken } = require("../controllers/adminController");
// Export
const router = express.Router();

router.post("/register", registerAccount);
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/validate-token", validateToken)

module.exports = router;
