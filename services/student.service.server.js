const studentDao = require('../dao/student.dao.server')
module.exports = app => {
  createStudent = (req, res) =>
    studentDao.createStudent(req.body).then(data=>res.json(data))
    //res.json(studentDao.createStudent(req.body))

  findAllStudents = (req, res) =>
    {
        /*console.log('Function called')
        studentDao.findAllStudents().then(function(students){
            res.json(students)
        })*/
        studentDao.findAllStudents().then(data=>res.json(data))
    }
  findStudentById = (req, res) =>
    studentDao.findStudentById(req.params['studentId']).then(data=>res.json(data))



  deleteStudent = (req, res) =>
    studentDao.deleteStudent(req.params.studentId).then(data => res.send(data))

  updateStudent = (req, res) =>
    studentDao.updateStudent(req.params.studentId, req.body).then(data => res.send(data))

  app.put('/api/student/:studentId', updateStudent)
  app.delete('/api/student/:studentId', deleteStudent)
  app.get('/api/student/:studentId', findStudentById)
  app.get('/api/student', findAllStudents)
  app.post('/api/student', createStudent)
}