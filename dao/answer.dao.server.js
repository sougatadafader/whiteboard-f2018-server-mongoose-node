const answerModel = require('../models/answer.model.server')

createAnswer = answer =>
answerModel.create(answer)

findAllAnswers = () =>
answerModel.find().populate('student','username').populate('question','question').exec()

findAnswerById = answerId =>
answerModel.findById(answerId).populate('student').populate('question').exec()

findAnswerBySidQid = (studentId, questionId) =>
answerModel.find({student : studentId}).find({question : questionId}).populate('answer')

findAnswerByQidSid = ( questionId,studentId) =>
answerModel.find({question : questionId}).find({student : studentId}).populate('answer')

module.exports = {
    createAnswer,
    findAllAnswers,
    findAnswerById,
    findAnswerBySidQid,
    findAnswerByQidSid
}