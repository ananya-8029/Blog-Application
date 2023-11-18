const db = require("../db");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    // checking for an existing user
    const user = "SELECT * FROM users WHERE EMAIL = ? OR USERNAME = ?";

    const userData = await db.query(userQuery, [req.body.email, req.body.name]);

    if (userData.length) return res.status(409).json("User already exists!");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const insertData =
      "INSERT INTO users(`USERNAME`, `EMAIL`, `PASSWORD` VALUES (?,?,?)";

    const values = [req.body.username, req.body.email, hashPassword];

    db.query(insertData, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has beed created");
    });
    
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json("Internal Server Error");
  }
};

exports.login = (req, res) => {};

exports.logout = (req, res) => {};
