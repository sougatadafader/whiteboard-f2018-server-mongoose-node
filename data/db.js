module.exports = function () {
  const mongoose = require('mongoose');
  //const databaseName = 'whiteboard-cs5610-fall-2018';
  //var   connectionString = 'mongodb://localhost/';
  //connectionString += databaseName;
    var username = 'admin';
    var password = 'admin123';
    var connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds157667.mlab.com:57667/whiteboard-cs5610-fall-2018';

  mongoose.connect(connectionString,{ useNewUrlParser: true });
};