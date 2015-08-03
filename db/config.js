var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseConnection = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/movies';
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