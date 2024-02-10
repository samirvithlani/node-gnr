const router = require("express").Router()
const employeeController = require("../controllers/EmployeeController")

router.post("/employee",employeeController.createEmployee)
router.get("/employee",employeeController.getAllEmployee)

module.exports = router
