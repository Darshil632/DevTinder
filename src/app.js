const express = require("express");
const app = express();

app.get(/a/, (req, res) => {
  res.send({ firstnmae: "Darshil", lastname: "Vijay" });
});
// app.delete("/user", (req, res) => {
//   res.send("Deeleted Successfully!");
// });
// app.use("/home", (req, res) => {
//   res.send("Hello from the home");
// });
// app.use("/", (req, res) => {
//   res.send("Hello from the server");
// });
app.listen(3000, () => {
  console.log("Server is starting........");
});
