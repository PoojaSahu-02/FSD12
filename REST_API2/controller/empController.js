const employee = require("../modal/empModal");

const createEmp = async (req, res) => {
  try {
    let data = await employee.create(req.body);
    res.status(201).json({
      success: true,
      message: "employee created successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};
const getAllEmp = async (req, res) => {
  try {
    let data = await employee.find();
    res.status(200).json({
      success: true,
      message: "employee fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};
const getEmpById = async (req, res) => {
  try {
    let data = await employee.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "employee fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};
const upadteEmp = async (req, res) => {
  try {
    let data = await employee.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      success: true,
      message: "employee updated successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};
const deleteEmp = async (req, res) => {
  try {
    let data = await employee.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "employee deleted successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};
module.exports = { createEmp, getAllEmp, getEmpById, upadteEmp, deleteEmp };
