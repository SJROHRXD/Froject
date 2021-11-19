// Adding Required Dependencies
const express = require("express");
const path = require('path');
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }))

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/", require("./routes/api"));
app.use("/", require("./routes/api"));
app.use("/", require("./routes/api"));
app.use("/", require("./routes/api"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () = console.log(`Server started on port ${PORT}`));