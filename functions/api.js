// const express = require("express");
// const serverless = require("serverless-http");

// const app = express();
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.use("/", router);
// // app.listen(port, () => console.log("Running"));

// module.exports.handler = serverless(app);

const express = require("express");
const serverless = require("serverless-http");
const tourists = require("../routes/tourists");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = express.Router();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/tourists", tourists);

router.get("/", (req, res) => {
  res.send("Welcome to our todos api");
});

app.use("/", router);
const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}...`);
// });

mongoose.connect(connection_string);
// .then(() => console.log("MongDB connection established..."))
// .catch((error) => console.error("MongDB connection failed:", error.message));

module.exports.handler = serverless(app);
