const answerModel = require('../models/answer.model.server')

createAnswer = answer =>
answerModel.create(answer)

findAllAnswers = () =>
answerModel.find().populate('student','username').populate('question','question').exec()

findAnswerById = answerId =>
answerModel.findById(answerId).populate('student').populate('question').exec()

findAnswerByQidSid = (questionId,studentId) =>
answerModel.find({student: studentId}).find({question: questionId}).populate('student','username').populate('question','question').exec()


module.exports = {
    createAnswer,
    findAllAnswers,
    findAnswerById,
    findAnswerByQidSid
}