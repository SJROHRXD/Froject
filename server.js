// Adding Required Dependencies
const express = require("express");
const path = require('path');
const mongoose = require("mongoose");

const app = express();

// Connect Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zapplicant", {
  useNewUrlParser: true,
});

// Initialize Middleware
app.use(express.json({ extended: false }))

// routes
app.get("/", (req, res) => res.send("API Running"));
app.get("/schedule", (req, res) => res.send("API Running"));
app.get("/comment", (req, res) => res.send("API Running"));


// TODO: add more routes as we need them here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));