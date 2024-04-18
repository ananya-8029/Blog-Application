const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")

const app = express();
const port = 8800;

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/posts", require("./routes/posts"))
app.use("/api/users", require("./routes/users"))

const listener = app.listen(port,() => {
    console.log("Blog app listening on port " + listener.address().port);
})