const mongoose = require("mongoose");

const empSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      min: 0,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      default: 18,
    },
  },
  { timestamps: true },
);

const employee = new mongoose.model("employee",empSchema)
module.exports = employee