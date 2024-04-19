const express = require("express");
const router = express.Router();

const authController = require("../Controllers/authController.js");

// Route 1: api/auth/register
router.post("/register", authController.register);

// Route 2: api/auth/login
router.post("/login", authController.login);

// Route 3: api/auth/logout
router.post("/logout", authController.logout);

// Route 4: api/auth/fetchUser
router.get("/fetchUser", authController.fetchUser);

module.exports = router;
