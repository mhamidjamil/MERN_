const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
app.get("/page1", (req, res) => res.send("Hello rom page 1!"));

const port = process.env.PORT || 8082;
// const output = "Server is running at : ";
const output = `Server is running at : `;

app.listen(port, () => console.log(`${output} port ${port}`));
// app.listen(8085, () => console.log(`Server running on port ${port}`));
