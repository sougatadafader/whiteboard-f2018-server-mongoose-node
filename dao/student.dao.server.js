const studentModel = require('../models/student.model.server')

createStudent = student =>
  studentModel.create(student)

findAllStudents = () =>
  studentModel.find()

findStudentById = studentId =>
  studentModel.findById(studentId)

updateStudent = (studentId, student) =>
  studentModel.update({_id: studentId}, {$set: student})

deleteStudent = studentId =>
  studentModel.remove({_id: studentId})

module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  updateStudent,
  deleteStudent
}