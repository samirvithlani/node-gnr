const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
router.get("/users", userController.getAllUserFromDB);
router.get("/users/:id",userController.getUserByID)
router.post("/users",userController.addUser)
router.delete("/users/:id",userController.deleteUser)
router.put("/users/:id",userController.updateUser)
router.get("/users/filter/:age",userController.getDataByAgeFilter)
module.exports = router;
