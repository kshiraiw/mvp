var app = angular.module('app.services', []);

app.factory('Movies', function($http) {
  var addMovie = function(movie) {
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/addMovie',
      data: movie
    }).then(function(response) {
      return response;
    });
  };

  var getMovies = function() {
    return $http.get('http://localhost:8080/getMovies')
    .then(function(response) {
      return response;
    });
  };

  var getMovie = function(title) {
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/getMovie',
      data: {title: title}
    }).then(function(response) {
      return response;
    });
  };

  return {
    addMovie: addMovie,
    getMovies: getMovies,
    getMovie: getMovie
  };
});