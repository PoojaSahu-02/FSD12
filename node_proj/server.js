const express = require("express");
const app = express();
const mongoose = require("mongoose");
let connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FSD18DB");
    console.log("mongoDB connected successfully");
  } catch (err) {
    console.log("Connection Failed");
    process.exit(1);
  }
};
connectDB();
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
