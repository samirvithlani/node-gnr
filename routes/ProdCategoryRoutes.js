const router = require('express').Router();
const categoryController = require('../controllers/CategoryController');
router.post('/category', categoryController.createCategory);
module.exports = router; //exporting router to use in server.js



