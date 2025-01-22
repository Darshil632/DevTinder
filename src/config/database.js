const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://darshilvijay632:Darshil2025@cluster1.knu2n.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
