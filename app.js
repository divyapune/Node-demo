const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is a devops-project page! for CI/CD Pipeline");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
