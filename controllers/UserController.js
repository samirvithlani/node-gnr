const userModel = require("../models/UserModel");
const encrypt = require("../util/encrypt");
const tokenUtil = require("../util/TokenUtil");
const cloudinaryController = require("./CloudnaryController");
const mailUtil = require("../util/MailUtil");

const multer = require("multer");

const getAllUserFromDB = async (req, res) => {
  const users = await userModel.find();

  res.status(200).json({
    message: "success",
    data: users,
  });
};

const getUserByID = async (req, res) => {
  //params
  const id = req.params.id; // req {params {id }}
  console.log("id....", id);
  console.log("req.params", req.params);

  //const user = await userModel.find({_id:id}) //array
  const user = await userModel.findById(id);
  res.status(200).json({
    message: "success",
    data: user,
  });
};

const addUser = async (req, res) => {
  const hashedPassword = encrypt.encryptPassword(req.body.password);
  // const userObjectTosubmit = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: hashedPassword,
  //   age: req.body.age,
  // }
  const userObjectTosubmit = Object.assign(req.body, {
    password: hashedPassword,
  });
  console.log("userObjectTosubmit", userObjectTosubmit);

  //  const savedUser = await userModel.create(req.body); //whatever data coming from cline tin req.body objecy it will save in db
  const savedUser = await userModel.create(userObjectTosubmit); //whatever data coming from cline tin req.body objecy it will save in db
  
  //optmodel : mail otp mail otp
  //otp
  const opt = Math.floor(1000 + Math.random() * 9000);
  const otpObj = {
    email : savedUser.email,
    opt:opt
  }
  await otpSchema.create(otpObj)
  await mailUtil.sendMail(savedUser.email, "otp", `Your OTP is ${opt}`)

  res.status(201).json({
    message: "success verify otp",
    data: savedUser,

  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id; //params.id
  const deletedUser = await userModel.findByIdAndDelete(id);
  console.log("deletedUser", deletedUser);

  if (deleteUser && deletedUser != null) {
    res.status(200).json({
      message: "User Deleted Successfully",
      data: deletedUser,
    });
  } else {
    res.status(400).json({
      message: "User Not Found",
    });
  }
};

const updateUser = async (req, res) => {
  //update tablename set ?,? where id = ?
  const id = req.params.id;
  const userData = req.body;

  const updatedUser = await userModel.findByIdAndUpdate(id, userData);
  res.status(200).json({
    message: "User Updated Successfully",
    data: updatedUser, //old data
  });
};
const getDataByAgeFilter = async (req, res) => {
  const age = req.params.age;

  const users = await userModel.find({ age: { $gte: age } });
  if (users && users.length > 0) {
    res.status(200).json({
      message: "success",
      data: users,
    });
  } else {
    res.status(400).json({
      message: "No Data Found",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password; //plain text
    console.log("email", email);
    console.log("password", password);

    const emailFromUser = await userModel.findOne({ email: email });
    //{userObject}
    if (emailFromUser) {
      const isPasswordMatched = encrypt.comparePassword(
        password,
        emailFromUser.password
      );
      if (isPasswordMatched == true) {
        //TOKEN GENERATION

        const token = tokenUtil.generateToken(emailFromUser.toObject());

        res.status(200).json({
          message: "Login Success",
          data: token,
        });
      } else {
        res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      res.status(404).json({
        message: "User Not Found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

//storage... name..
const storage = multer.diskStorage({
  //destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {

    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
      cb(null, true);
    }
    else{
      //cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }



  }

}).single("file");

const uploadFile = async (req, res) => {
  try {
    upload(req, res, async(err) => {
      if (err) {
        res.status(500).json({
          message: err.message
        });
      } else {
        if (req.file) {

          const result = await cloudinaryController.uploadFile(req.file);

          //upload file...
          res.status(200).json({
            message: "File Uploaded Successfully",
            data: req.file,
            cloudinaryData: result
          });

        } else {
          res.status(400).json({
            message: "File Not Found",
          });
        }
      }
    });
  } catch (err) {
    res.status(500).json({
      message: err,
      error: err,
    });
  }
};

module.exports = {
  getAllUserFromDB,
  getUserByID,
  addUser,
  deleteUser,
  updateUser,
  getDataByAgeFilter,
  loginUser,
  uploadFile
};
