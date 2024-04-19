const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env.local" });
const secretKey = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    // checking for an existing user
    const userQuery = "SELECT * FROM users WHERE EMAIL = ? OR USERNAME = ?";

    db.query(
      userQuery,
      [req.body.email, req.body.userName],
      async (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const insertData =
          "INSERT INTO users(`USERNAME`, `EMAIL`, `PASSWORD`) VALUES (?)";

        const values = [req.body.userName, req.body.email, hashPassword];

        db.query(insertData, [values], (err, data) => {
          if (err) return res.json(err);
          return res.status(200).json("User has beed created");
        });
      }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json("Internal Server Error");
  }
};

exports.login = (req, res) => {
  // Check User
  const userQuery = "SELECT * FROM users WHERE email=?";
  db.query(userQuery, [req.body.email], async (err, data) => {
    if (err) return res.json(err);
    if (data.length == 0) return res.status(404).json("User Not Found");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].PASSWORD
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Please provide correct user credentials");

    const userData = {
      user: {
        id: data[0].ID,
        userName: data[0].USERNAME,
        email: data[0].EMAIL,
      },
    };

    const signinToken = jwt.sign(userData, secretKey);
    const { PASSWORD, ...other } = data[0];

    res
      .cookie("access_token", signinToken, {
        httpOnly: true,
      })
      .status(200)
      .json({ access_token: signinToken, ...other });
  });
};

exports.logout = (req, res) => {
  res
    .clearCookie("access_token", { sameSite: "none", secure: true })
    .status(200)
    .json("User has been logged out successfully");
};

exports.fetchUser = (req, res) => {
  const access_token = req.header("Authorization");

  try {
    if (!access_token) {
      res
        .status(401)
        .json({ error: "Please authenticate using a valid tokenn" });
    } else {
      const data = jwt.verify(access_token, secretKey);
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(401).json({ error: "Please authenticate using a valid token" });
  }
};
