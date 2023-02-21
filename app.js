const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
app.get("/page2", (req, res) => res.send("Hello world from page 2!"));

const port = process.env.PORT || 8082;
const output = "Server is running at : ";

app.listen(port, () => console.log(`${output} port ${port}`));
// app.listen(8085, () => console.log(`Server running on port ${port}`));
