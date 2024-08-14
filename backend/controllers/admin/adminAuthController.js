const { generatetoken } = require("../../helper/generateToken");
const { emailValidation } = require("../../helper/validation");
const adminModel = require('../../models/admin/admin');

const bcrypt = require("bcrypt");
const adminRegister = async (req, res) => {
  try {
    const { name, staffnumber, email, password, department } = req.body;
    
    if (!emailValidation(email)) {
      return res.status(400).send({ msg: "Bitsathy is only allowed" });
    }
    const bcryptPassword = await bcrypt.hash(password, 10);
    const user = new adminModel({
      name,
      staffnumber,
      email,
      password: bcryptPassword,
      department,
    });
    await user.save();
    const token = generatetoken({ id: user._id.toString() }, "7d");
    return res.send({
      token: token,
      name: user.name,
      staffnumber: user.rollnumber,
      picture: user.picture,
      email: user.email,
      department:user.department,
      msg: "Register success",
    });
  } catch (error) {
    res.status(500).json({ msg: "user not created", error: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: " No user found" });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res
        .status(400)
        .send({ msg: "Invalid credentials.Please try again." });
    }
    const token = generatetoken({ id: user._id.toString() }, "7d");
    return res.status(200).send({
      token: token,
      name: user.name,
      Staffnumber: user.rollnumber,
      picture: user.picture,
      email: user.email,
      department:user.department,
      msg: "login success",
    });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  adminRegister,
  adminLogin,
};
