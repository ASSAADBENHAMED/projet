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
    const newEtudiant = await Person.create({
      NOM,
      Email,
      password: hashedPw,
      PRENOM,
    });
    const token = jwt.sign({ id: newEtudiant._id }, process.env.JWT_SECRET);
    res.json({ newEtudiant, token });
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
    const existEtudiant = await Person.findOne({ Email });
    if (!existEtudiant)
      return res.status(400).json({ msg: "you should register first." });
    const checkPw = await bcrypt.compare(password, existEtudiant.password);
    if (!checkPw)
      return res.status(400).json({ msg: "Wrong password , try again." });
    const token = jwt.sign({ id: existEtudiant._id }, process.env.jwt_SECRET, {
      expiresIn: "7d",
    });
    return res.json({ existEtudiant, token });
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
