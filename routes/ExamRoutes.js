const examController = require('../controllers/ExamController');
const router = require('express').Router();
router.post('/exam', examController.createExam);
router.get('/exam', examController.getAllExams);
router.put('/exam/:examId/question/:questionId', examController.addQuestionToExam);
module.exports = router;