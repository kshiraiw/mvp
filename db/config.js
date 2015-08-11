var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseConnection = process.env.MONGOLAB_URI || 'mongodb://localhost/movies';
mongoose.connect(mongooseConnection);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongoose");
});

var movieSchema = new Schema({
  title: {type: String, index: {unique: true}},
  location: String,
  plot: String,
  rating: String,
  IMDBurl: String,
  posterUrl: String
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('movies', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// var Movie = sequelize.define('Movie', {
//   title: { type: Sequelize.STRING, allowNull:false, unique: true},
//   location: Sequelize.STRING,
//   rating: Sequelize.STRING,
//   plot: Sequelize.STRING,
//   IMDBurl: Sequelize.STRING,
//   posterUrl: Sequelize.STRING
// });

// Movie.sync();

// module.exports = Movie;