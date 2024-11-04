const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

module.exports = app;
