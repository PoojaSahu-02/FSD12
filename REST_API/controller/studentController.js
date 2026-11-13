const student = require("../modal/studentModal");
let createStudent = async (req, res) => {
  try {
    let data = await student.create(req.body);
    res.status(201).json({
      success: true,
      message: "student created successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
let getAllStudent = async (req, res) => {
  try {
    let data = await student.find();
    res.status(200).json({
      success: true,
      message: "student fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

let getStudent = async (req, res) => {
  try {
    let data = await student.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "student fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

let updateStudent = async (req, res) => {
  try {
    let data = await student.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      success: true,
      message: "student updated successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

let deleteStudent = async (req, res) => {
  try {
    let data = await student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "student deleted successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
module.exports ={createStudent,getAllStudent,getStudent,updateStudent,deleteStudent}

