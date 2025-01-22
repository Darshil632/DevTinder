const express = require("express");
const { adminAuth, userauth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);
app.get("/admin/getAllUser", (req, res) => {
  res.send("All data Sent!");
});
app.get("/admin/deleteuser", (req, res) => {
  res.send("All data deleted!");
});
app.get("/user/login", (req, res) => {
  res.send("User logged in successfully");
});
app.use("/user", userauth, (req, res) => {
  res.send("User data sent");
});

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Route Handler 1!!");
//     next();
//     // res.send("1st  response");
//   },
//   (req, res, next) => {
//     console.log("Route Handler 2!!");
//     // res.send("2nd  response");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Route Handler 3!!");
//     // res.send("3rd  response");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Route Handler 4!!");
//     res.send("4th  response");
//     next();
//   }
// );

// app.get(/a/, (req, res) => {
//   res.send({ firstnmae: "Darshil", lastname: "Vijay" });
// });
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
