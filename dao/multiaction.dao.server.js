const studentModel = require('../models/student.model.server')
const questionModel = require('../models/question.model.server')
const answerModel = require('../models/answer.model.server')

populateDatabase = () => {
    const students = [{"_id":"234","firstName":"Bob","lastName":"Hope","username":"bob","password":"bob","gradYear":2021,"scholarship":12000},{"_id":"123","firstName":"Alice","lastName":"Wonderland","username":"alice","password":"alice","gradYear":2020,"scholarship":15000}];
    const questions = [{"_id":"321","question":"Is the following schema valid","points":10,"type":"TRUE_FALSE","isTrue":"false"},{"_id":"432","question":"DAO stands for Dynamic Access Object","points":10,"type":"TRUE_FALSE","isTrue":"false"},{"_id":"543","question":"What does JPA stands for?","points":10,"type":"MULTIPLE_CHOICE","choices":"Java Persistence API,Java Persisted Application, Javascript Persistence API, JSON Persistent Associations","correct":1},{"_id":"654","question":"What does ORM stand for?","points":10,"type":"MULTIPLE_CHOICE","choices":"Object Relational Model,Object Relative Markup,Object Reflexive Model, Object Relational Mapping","correct":1}];
    const answers = [{"_id":"123","trueFalseAnswer":"true","student":"123","question":"321"},
        {"_id":"234","trueFalseAnswer":"false","student":"123","question":"432"},
        {"_id":"345","student":"123","question":"543","multipleChoiceAnswer":1},
        {"_id":"456","student":"123","question":"654","multipleChoiceAnswer":2},
        {"_id":"567","trueFalseAnswer":"false","student":"234","question":"321"},
        {"_id":"678","trueFalseAnswer":"true","student":"234","question":"432"},
        {"_id":"789","student":"234","question":"543","multipleChoiceAnswer":3},
        {"_id":"890","student":"234","question":"654","multipleChoiceAnswer":4}];

    for(let i=0;i<students.length;i++)
    {
        studentModel.create(students[i])
    }
    for(let i=0;i<questions.length;i++)
    {
        questionModel.create(questions[i])
    }
    for(let i=0;i<answers.length;i++)
    {
        answerModel.create(answers[i])
    }
}

truncateDatabase = () =>
{
    studentModel.remove().exec()
    questionModel.remove().exec()
    answerModel.remove().exec()
    console.log('Function was phoned')
}

module.exports = {
    populateDatabase,
    truncateDatabase
}