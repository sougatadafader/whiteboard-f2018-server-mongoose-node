const mongoose = require('mongoose');
const answerSchema = mongoose.Schema({
    _id:String,
    trueFalseAnswer: {type:String, enum:["true","false"]},
    multipleChoiceAnswer: Number,
    student: {
        ref: 'StudentModel',
        type: String
    },
    question: {
        ref: 'QuestionModel',
        type: String
    }
}, {collection: 'answer'});
module.exports = answerSchema;
