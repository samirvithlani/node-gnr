const questionModel = require("../models/QuestionModel");

const createQuestion = async (req, res) => {
  try {
    const savedQuestion = await questionModel.create(req.body);
    if (savedQuestion) {
      res.status(201).json({
        message: "Question created successfully",
        data: savedQuestion,
      });
    } else {
      res.status(500).json({
        message: "error while saveing question",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error while saving question",
      error: err,
    });
  }
};

module.exports = {
    createQuestion,
}
