const Admin = require("../models/adminSchema");
const Student = require("../models/studentSchema");

exports.userRegister = async (req, res, next) => {
  try {
    if (req.body.userType === "STUD") {
      const newStudent = new Student(req.body);
      const user = await Student.findOne({ ...req.body });
      if (user) {
        res.send("STUDENT ALREADY REGISTERD");
      } else {
        const user = await newStudent.save();
        res.send("STUDENT REGISTERD");
      }
    } else {
      const newAdmin = new Admin(req.body);
      const user = await Admin.findOne({ ...req.body });
      if (user) {
        res.send("ADMIN ALREADY REGISTERD");
      } else {
        const user = await newAdmin.save();
        res.send("ADMIN REGISTERD");
      }
    }
    return res.status(200).json({ message: user });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    if (req.body.userType === "STUD") {
      const { email, password } = req.body;
      const user = await Student.findOne({ email: email, password: password });
      if (user) {
        res.send(user);
      } else {
        return res.status(400).json({ message: "STUDENT LOGIN FAILED" });
      }
    } else {
      const { email, password } = req.body;
      const user = await Admin.findOne({ email: email, password: password });
      if (user) {
        res.send(user);
      } else {
        return res.status(400).json({ message: "ADMIN LOGIN FAILED" });
      }
    }
    return res.status(200).json({ message: user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
