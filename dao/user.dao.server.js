const userModel = require('../models/user.model.server')

createUser = user =>
  userModel.create(user)

findAllUsers = () =>
  userModel.find()

findUserById = userId =>
  userModel.findById(userId)

findUserByUsername = username =>
  userModel.findOne({username: username})

updateUser = (uid, user) =>
  userModel
    .update({_id: uid},
      {$set: user})

deleteUser = userId =>
  userModel
    .remove({_id: userId})


module.exports = {
  createUser,
  deleteUser,
  findUserByUsername,
  findAllUsers,
  updateUser,
  findUserById
}
//db.student.insert({_id:123, FirstName:'Alice', LastName:'Wonderland',Username:'alice',Password:'alice',GradYear:2020,Scholarship:15000})
