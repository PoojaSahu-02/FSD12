const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const auth = new mongoose.model("auth",authSchema);

module.exports = auth

