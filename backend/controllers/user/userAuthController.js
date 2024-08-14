const { generatetoken } = require("../../helper/generateToken");
const {
  rollnumberValidation,
  emailValidation,
} = require("../../helper/validation");
const model = require("../../models/user/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  try {
    const { name, rollnumber, email, password, department,batch } = req.body;
    if (!rollnumberValidation(rollnumber)) {
      return res
        .status(400)
        .send({ msg: "Length of the rollnumber must be 12" });
    }
    if (!emailValidation(email)) {
      return res.status(400).send({ msg: "Bitsathy is only allowed" });
    }
    const bcryptPassword = await bcrypt.hash(password,10);
    const user = new model({
      name,
      rollnumber,
      email,
      password: bcryptPassword,
      department,
      batch
    });
    await user.save();
    const token = generatetoken({id:user._id.toString()},"7d")
    return res.send({
        id:token,
        name:user.name,
        rollnumber:user.rollnumber,
        year:user.batch,
        picture:user.picture,
        email:user.email,
        msg:"Register success"
    })
  } catch (error) {
    res.status(500).json({ msg: "user not created", error: error.message });
  }
};

const login = async(req,res) =>{
    try {
        const { email, password } = req.body;
        const user = await model.findOne({ email });
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
        return res.send({
            id:token,
            name:user.name,
            rollnumber:user.rollnumber,
            year:user.batch,
            picture:user.picture,
            email:user.email,
            msg:"Login success"
        });
      } catch (error) {
        res.status(500).send({ err: error });
      }
}

module.exports = {
  register,
  login
};
