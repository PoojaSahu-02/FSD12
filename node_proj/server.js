const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
let connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FSD12DB");
    console.log("Mongodb connected successfully");
  } catch (err) {
    console.log("connection failed");
  }
};
connectDB();
let studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  contact: Number,
});
let student = new mongoose.model("student", studentSchema);
app.use(express.json());

let createStudent = async (req, res) => {
  let data = await student.create(req.body);
  res.json({
    success: true,
    message: "student created successfully",
    data,
  });
};

let getAllstudent = async (req, res) => {
  let data = await student.find();
  res.json({
    success: true,
    message: "student fetched successfully",
    data,
  });
};
let getStudent = async (req, res) => {
  let data = await student.findById(req.params.id);
  res.json({
    success: true,
    message: "student fetched successfully",
    data,
  });
};
let updateStudent = async (req, res) => {
  let data = await student.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    success: true,
    message: "student updated successfully",
    data,
  });
};
let deleteStudent = async (req, res) => {
  let data = await student.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "student deleted successfully",
    data,
  });
};
// http://loclahost:3000//student/createstudent
app.post("/student/createstudent", createStudent);
app.get("/student/getallstudent", getAllstudent);
app.get("/student/getstudent/:id", getStudent);
app.put("/student/updatestudent/:id", updateStudent);
app.delete("/student/deletestudent/:id", deleteStudent);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
