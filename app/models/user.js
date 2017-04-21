var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose')

db.userSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password), null, null).bind(this)
  .then(function(hash) {
    this.password = hash;
    next();
  });
})

db.userSchema.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if (err) {
      callback(err)
    } else {
    callback(null, isMatch);
  });
};

var userModel = mongoose.model('user', db.userSchema);
//

//var User = userModel;
  //tableName: 'users',
  //hasTimestamps: true,


module.exports = userModel;
