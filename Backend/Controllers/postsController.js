const db = require("../db");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/auth");
const { data } = require("autoprefixer");
require("dotenv").config({ path: ".env.local" });
const secretKey = process.env.JWT_SECRET;

exports.getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

exports.getPost = (req, res) => {
  const q =
    "SELECT `USERNAME` , `TITLE`, `DESCRIPTION` ,`USERIMAGE`, `IMAGE` , `cat` , `DATE` FROM users u JOIN posts p ON u.ID = p.UID WHERE p.UID=?";

  if (q.length === 0) return res.json("Not Available");
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};
exports.addPost = (req, res) => {
  res.json("from controller");
};

exports.deletePost = (req, res) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json("Not Authenticated");

  jwt.verify(token, secretKey, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;
    const q = "SELECT FROM posts WHERE `POST_ID` = ? AND `UID`= ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) res.status(401).json("You can delete only your post");

      return res.json("Post has been deleted!");
    });
  });
};

exports.updatePost = (req, res) => {
  res.json("from controller");
};
