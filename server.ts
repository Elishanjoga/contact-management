const express = require("express");
const error_handler = require("./middleware/errorHandler");
const connectDb = require("./configs/dbConnection");
const os = require("http");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 2000;
// connectDb();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use(error_handler);
app.listen(port, console.log("We are listening on port", port));
