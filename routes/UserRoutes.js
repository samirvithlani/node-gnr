const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const authMiddleware = require("../middleware/AuthMiddleware");
const zodMiddleware = require("../middleware/ZodMiddleware");
const userValidationSchema = require("../util/UserValidationSchema");
const tokenUtil = require("../util/TokenUtil");

// router.get("/users", authMiddleware.authMiddleware("123456"),userController.getAllUserFromDB);
router.get("/users",tokenUtil.verifyToken,userController.getAllUserFromDB);
router.get("/users/:id",userController.getUserByID)
router.post("/users",zodMiddleware.validateSchema(userValidationSchema),userController.addUser)
router.delete("/users/:id",userController.deleteUser)
router.put("/users/:id",userController.updateUser)
router.get("/users/filter/:age",userController.getDataByAgeFilter)
router.post("/login",userController.loginUser)
router.post("/upload",userController.uploadFile)
router.post("/verifyuser",userController.verifyUser)
module.exports = router;
