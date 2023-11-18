const express = require("express");
const router = express.Router();

const postsController = require("../Controllers/postsController.js")

router.get("/test", postsController.addPost);

module.exports = router;