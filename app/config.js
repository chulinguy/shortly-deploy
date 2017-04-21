
var mongoose = require('mongoose')
var db = {};

mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('error', console.error.bind(console,'There is a connection error'));

mongoose.connection.once('open', function() {
  console.log('Mongo connected');

  var urlsSchema = mongoose.Schema({

    url: {type: String, required: true},
    baseUrl: String,
    code: String,
    title: String,
    visits: Number,
    created_at: Date
  })

  db.urlsSchema = urlsSchema;

  var userSchema = mongoose.Schema({
    //_id: {type: mongoose.Schema.Types.ObjectId, ref: 'urlsSchema'},
    //username: {type: String, unique: true},
    username: { type: String, index: {unique: true}},
    password: String
  })

  db.userSchema = userSchema;

})
// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });
//
// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = db;
