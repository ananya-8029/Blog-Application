const db = require("../db");

exports.getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
exports.getPost = (req, res) => {
  const q = req.params.id ? "SELECT * FROM posts WHERE UID=?" : "";

  if (q.length === 0) return res.json("Not Available");
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
exports.addPost = (req, res) => {
  res.json("from controller");
};
exports.deletePost = (req, res) => {
  res.json("from controller");
};
exports.updatePost = (req, res) => {
  res.json("from controller");
};
