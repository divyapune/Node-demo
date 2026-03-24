const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "This is a simple Node.js application running in a Docker container.",
  );
});

app.listen(3000, () => console.log("Server is running on port 3000"));
