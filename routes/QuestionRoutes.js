const router = require('express').Router();
const questionController = require('../controllers/QuestionController');
router.post('/question', questionController.createQuestion);
module.exports = router;