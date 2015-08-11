var express = require('express');
var cors = require('cors');
var helpers = require('./helpers/request-handler');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('api/movies/addMovie', helpers.handleAdd);
app.post('api/movies/getMovie', helpers.handleGetOne);
app.post('api/movies/searchTrailer', helpers.searchTrailer);
app.get('api/movies/getMovies', helpers.handleGetAll);

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Server is listening on port ', port);
});