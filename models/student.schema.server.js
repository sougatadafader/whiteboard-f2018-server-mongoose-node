const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    _id:String,
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
    gradYear: String,
    scholarship: Number,
}, {collection: 'student'});
module.exports = studentSchema;
