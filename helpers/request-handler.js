var Movie = require('../db/config');
var request = require('request');

module.exports.handleAdd = function(req, res) {
  var val = req.body.title;
  console.log(val);
  Movie.findOne({title: {$regex: new RegExp(val, 'i')}}).exec(function(err, movie) {
    if (movie) {
      return res.status(200).send(movie);
    } else {
      var url = "http://www.myapifilms.com/imdb?title=" + val + "k&format=JSON&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=1&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0";

      request(url, function(err, resp, body) {
        body = JSON.parse(body);

        if (!body[0]) {res.send(null);}
        var movie = new Movie({
          title: body[0].title,
          location: body[0].filmingLocations,
          plot: body[0].simplePlot,
          rating: body[0].rated,
          IMDBurl: body[0].urlIMDB,
          posterUrl: body[0].urlPoster
        }).save(function(err, movie) {
          res.status(200).send(movie);
        });
      });
    }
  });
};

module.exports.handleGetOne = function(req, res) {
  var title = req.body.title;
  Movie.findOne({title: {$regex: new RegExp(title, 'i')}}).exec(function(err, movie) {
    if (movie) {
      return res.status(200).send(movie);
    } else {
      return res.send(null);
    }
  });
};

module.exports.handleGetAll = function(req, res) {
  Movie.find({}).exec(function(err, movies) {
    console.log(movies);
    res.status(200).send(movies);
  });
};