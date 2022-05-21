const Person = require("../models/personModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a new Person(def role: Etudiant)
//@params POST /api/person/register
//@acces PUBLIC
exports.register = async (req, res) => {
  try {
    const { NOM, PRENOM, password, Email } = req.body;
    const existEmail = await Person.findOne({ Email });
    if (existEmail)
      return res.status(400).json({ msg: "Email already exist." });
    const saltRounds = 10;
    const genSalt = await bcrypt.genSalt(saltRounds);
    const hashedPw = await bcrypt.hash(password, genSalt);
    console.log(hashedPw);
    const newUser = await Person.create({
      NOM,
      Email,
      password: hashedPw,
      PRENOM,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.json({ newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing went wrong !" });
  }
};

//@desc person login
//@params POST /api/person/login
//@acces PUBLIC
exports.login = async (req, res) => {
  try {
    const { password, Email } = req.body;
    const existUser = await Person.findOne({ Email });
    if (!existUser)
      return res.status(400).json({ msg: "you should register first." });
    const checkPw = await bcrypt.compare(password, existUser.password);
    if (!checkPw)
      return res.status(400).json({ msg: "Wrong password , try again." });
    const token = jwt.sign({ id: existUser._id }, process.env.jwt_SECRET, {
      expiresIn: "7d",
    });
    return res.json({ existUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "something went wrong !" });
  }
};
//@desc get person Info
//@params GET /api/person/
//@acces PUBLIC
exports.getPersonData = async (req, res) => {
  try {
    const personInfo = await Person.findById(req.personId);
    return res.json(personInfo);
  } catch (error) {
    return res.status(500).json({ msg: "something went wrong !" });
  }
};
