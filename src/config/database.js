const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "MongoDB_URL"
  );
};
module.exports = connectDB;
