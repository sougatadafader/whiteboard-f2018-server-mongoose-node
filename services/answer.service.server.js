const answerDao = require('../dao/Answer.dao.server')
module.exports = app => {
    createAnswer = (req, res) =>
    answerDao.createAnswer(req.body).then(data=>res.json(data))
    //res.json(AnswerDao.createAnswer(req.body))

    findAllAnswers = (req, res) =>
    {
        /*console.log('Function called')
        AnswerDao.findAllAnswers().then(function(Answers){
            res.json(Answers)
        })*/
        answerDao.findAllAnswers().then(data=>res.json(data))
    }
    findAnswerById = (req, res) =>
    answerDao.findAnswerById(req.params['answerId']).then(data=>res.json(data))



    deleteAnswer = (req, res) =>
    answerDao.deleteAnswer(req.params.answerId).then(data => res.send(data))

    updateAnswer = (req, res) =>
    answerDao.updateAnswer(req.params.answerId, req.body).then(data => res.send(data))

    app.put('/api/answer/:answerId', updateAnswer)
    app.delete('/api/answer/:answerId', deleteAnswer)
    app.get('/api/answer/:answerId', findAnswerById)
    app.get('/api/answer', findAllAnswers)
    app.post('/api/answer', createAnswer)
}