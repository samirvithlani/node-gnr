const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
router.get("/users", userController.getAllUserFromDB);
router.get("/users/:uuid",userController.getUserByID)
module.exports = router;
