const questionDao = require('../dao/question.dao.server')
module.exports = app => {
    createQuestion = (req, res) =>
    questionDao.createQuestion(req.body).then(data=>res.json(data))
    //res.json(questionDao.createquestion(req.body))

    findAllQuestions = (req, res) =>
    {
        /*console.log('Function called')
        questionDao.findAllquestions().then(function(questions){
            res.json(questions)
        })*/
        questionDao.findAllQuestions().then(data=>res.json(data))
    }
    findQuestionById = (req, res) =>
    questionDao.findQuestionById(req.params['questionId']).then(data=>res.json(data))



    deleteQuestion = (req, res) =>
    questionDao.deleteQuestion(req.params.questionId).then(data => res.send(data))

    updateQuestion = (req, res) =>
    questionDao.updateQuestion(req.params.questionId, req.body).then(data => res.send(data))

    app.put('/api/question/:questionId', updateQuestion)
    app.delete('/api/question/:questionId', deleteQuestion)
    app.get('/api/question/:questionId', findQuestionById)
    app.get('/api/question', findAllQuestions)
    app.post('/api/question', createQuestion)
}