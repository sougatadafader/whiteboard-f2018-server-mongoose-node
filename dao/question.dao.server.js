const questionModel = require('../models/question.model.server')

createQuestion = question =>
questionModel.create(question)

findAllQuestions = () =>
questionModel.find()

findQuestionById = questionId =>
questionModel.findById(questionId)

updateQuestion = (questionId, question) =>
questionModel.update({_id: questionId}, {$set: question})

deleteQuestion = questionId =>
questionModel.remove({_id: questionId})

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}
// db.question.insert({_id:654,Question:'What does ORM stand for?', Points:10,Type:'MULTIPLE_CHOICE',Choices:'Object Relational Model,Object Relative Markup,Object Reflexive Model, Object Relational Mapping',Correct:1})
//db.question.insert({_id:543,Question:'What does JPA stands for?', Points:10,Type:'MULTIPLE_CHOICE',Choices:'Java Persistence API,Java Persisted Application, Javascript Persistence API, JSON Persistent Associations',Correct:1})
