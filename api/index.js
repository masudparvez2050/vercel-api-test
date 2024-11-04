const express = require("express");
const app = express();
const port = 3005;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3005`)
);
