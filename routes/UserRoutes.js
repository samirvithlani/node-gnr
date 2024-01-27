const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
router.get("/users", userController.getAllUserFromDB);
router.get("/users/:id",userController.getUserByID)
router.post("/users",userController.addUser)
module.exports = router;
