var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();
const PORT = process.env.PORT || 3000;
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./data/db')()

const studentDao = require('./dao/student.dao.server')
const questionDao = require('./dao/question.dao.server')
const answerDao = require('./dao/answer.dao.server')


/*answerDao.createAnswer({
    trueFalseAnswer: "true",
    student: '5c006e8c553b5c06401761e5',
    question: '5c00757f1f89eb5694115558'
}).then(ans => console.log(ans))*/

answerDao.findAllAnswers().then(ans => console.log(ans))
//answerDao.findAnswerBySidQid('5c006e8c553b5c06401761e5','5c00757f1f89eb5694115558').then(ans => console.log(ans))
//answerDao.findAnswerByQidSid('5c00757f1f89eb5694115558','5c006e8c553b5c06401761e5').then(ans =>console.log(ans))
require('./services/session.service.server')(app)

const studentService = require('./services/student.service.server.js')
studentService(app)
const questionService = require('./services/question.service.server.js')
questionService(app)

const multiactionService = require('./services/multiaction.service.server')
multiactionService(app)


createCourse = (req, res) => {
  console.log(req.body)
  res.json(req.body)
}

app.post('/api/course', createCourse)
app.listen(PORT,() => {
  console.log('Server is running on port {PORT}');
});