const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});
app.use("/home", (req, res) => {
  res.send("Hello from the home");
});
app.listen(3000, () => {
  console.log("Server is starting........");
});
