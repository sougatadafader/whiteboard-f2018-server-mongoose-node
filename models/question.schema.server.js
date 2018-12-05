const mongoose = require('mongoose');
const questionSchema = mongoose.Schema({
    _id:String,
    question:{type: String, required:true},
    points: Number,
    type:{type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE']},
    isTrue: {type: String, enum: ['true', 'false']},
    choices:String,
    correct: Number
}, {collection: 'question'});
module.exports = questionSchema;
