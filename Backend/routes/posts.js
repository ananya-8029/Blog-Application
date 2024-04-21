const express = require("express");
const router = express.Router();

const postsController = require("../Controllers/postsController.js");

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPost);
router.post("/", postsController.addPost);
router.delete("/:id",postsController.deletePost);
router.put("/:id", postsController.updatePost);

module.exports = router;
