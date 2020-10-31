const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("../HTML/mainpage.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("Mainpage is listening at localhost:3000");
});
