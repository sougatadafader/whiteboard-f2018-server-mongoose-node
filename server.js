var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

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


//const sectionDao = require('./dao/section.dao.server');
//const enrollmentDao = require('./dao/enrollment.dao.server')
// enrollmentDao.
//   enrollStudentIntoSection('5bf34e0a0eada8ea44044b05', '5bf35ff7fa839540015cf0bd')
//   .then(e => console.log(e))

//enrollmentDao.studentEnrollments('5bf34e0a0eada8ea44044b05')
//  .then(e => console.log(e))

/*studentDao.createStudent({
    username: "Sougata",
    password: "1234",
    firstName: "sougata",
    lastName: "dafader",
    gradYear: "2019",
    scholarship: 9000,
}).then( student => console.log(student))*/

//studentDao.findStudentById('5c006fe8e59ee955489214b2').then(student=>console.log(student))

//studentDao.updateStudent('5c006fe8e59ee955489214b2',{username:"Dafader"}).then(student=> console.log(student))

//studentDao.deleteStudent('5c006fe8e59ee955489214b2').then(console.log("success"))

/*questionDao.createQuestion({
    question:"Is the following schema valid?",
    points: 10,
    type:"TRUE_FALSE",
    isTrue: "false",
    choices:""
}).then(question => console.log(question))*/

//questionDao.findAllQuestions().then(ques => console.log(ques))
//questionDao.findQuestionById('5c00759cfdcbe710c01ce786').then(resp => console.log(resp))

//questionDao.updateQuestion('5c00759cfdcbe710c01ce786',{points : "9"}).then(response => console.log(response))
//questionDao.deleteQuestion('5c00759cfdcbe710c01ce786').then(console.log("success"))

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

sayHello = (req, res) => {
  const user = req.params['user']
  const message = req.query['message']
  res.send({user: user, message: message})
}

createCourse = (req, res) => {
  console.log(req.body)
  res.json(req.body)
}

app.post('/api/course', createCourse)
app.get('/hello/:user', sayHello)
app.listen(3000);