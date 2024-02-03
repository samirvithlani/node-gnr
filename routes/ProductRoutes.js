const productController = require("../controllers/ProductController");
const router = require("express").Router();
router.post("/product", productController.createProduct);
router.get("/product", productController.getAllProducts);

module.exports = router; //exporting router to use in server.js
