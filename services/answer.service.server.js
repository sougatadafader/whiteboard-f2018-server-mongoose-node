const answerDao = require('../dao/answer.dao.server')
module.exports = app => {
    createAnswer = (req, res) =>
    {
        let ansObj = req.body
        ansObj['student'] = req.params.sid
        ansObj['question'] = req.params.qid
        answerDao.createAnswer(ansObj).then(data => res.json(data))
    }
    //res.json(AnswerDao.createAnswer(req.body))

    findAllAnswers = (req, res) =>
    {
        answerDao.findAllAnswers().then(data=>res.json(data))
    }

    findAnswerById = (req, res) =>
    answerDao.findAnswerById(req.params['answerId']).then(data=>res.json(data))

    deleteAnswer = (req, res) =>
    answerDao.deleteAnswer(req.params.answerId).then(data => res.send(data))

    updateAnswer = (req, res) =>
    answerDao.updateAnswer(req.params.answerId, req.body).then(data => res.send(data))

    findAnswerByStudentIdAndQuestionId = (req, res) =>
    {
        answerDao.findAnswerByQidSid(req.params.qid, req.params.sid).then(data => res.send(data))
    }

    app.get('/api/student/:sid/question/:qid/answer',findAnswerByStudentIdAndQuestionId)
    app.get('/api/question/:qid/student/:sid/answer',findAnswerByStudentIdAndQuestionId)
    app.put('/api/answer/:answerId', updateAnswer)
    app.delete('/api/answer/:answerId', deleteAnswer)
    app.get('/api/answer/:answerId', findAnswerById)
    app.get('/api/answer', findAllAnswers)
    app.post('/api/student/:sid/question/:qid/answer', createAnswer)
}