const examController = require('../controllers/ExamController');
const router = require('express').Router();
router.post('/exam', examController.createExam);
router.get('/exam', examController.getAllExams);
module.exports = router;