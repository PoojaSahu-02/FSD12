const auth = require("../modal/authModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    let { name, email, contact, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    let data = await auth.create({
      name,
      email,
      contact,
      password: hashedPassword,
    });

    let token = jwt.sign(
      {
        id: data._id,
        name: data.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(201).json({
      success: true,
      message: "user signup successfully",
      user: data,
      token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const login = async (req, res) => {
  try {
     let {email,password } = req.body;
    let user = await auth.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
   
    let isValidPassword = await bcrypt.compare(password,user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "User password doesn't match",
      });
    }
    let token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    res.status(201).json({
      success: true,
      message: "user login successfully",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { signup, login };
