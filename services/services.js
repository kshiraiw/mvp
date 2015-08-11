var app = angular.module('app.services', []);

app.factory('Movies', function($http) {
  var addMovie = function(movie) {
    return $http({
      method: 'POST',
      url: 'api/movies/addMovie',
      data: movie
    }).then(function(response) {
      return response;
    });
  };

  var getMovies = function() {
    return $http.get('api/movies/getMovies')
    .then(function(response) {
      return response;
    });
  };

  var getMovie = function(title) {
    return $http({
      method: 'POST',
      url: 'api/movies/getMovie',
      data: {title: title}
    }).then(function(response) {
      return response;
    });
  };

  var searchTrailer = function(title) {
    return $http({
      method: 'POST',
      url: 'api/movies/searchTrailer',
      data: {title: title}
    }).then(function(response) {
      return response;
    });
  };
  return {
    addMovie: addMovie,
    getMovies: getMovies,
    getMovie: getMovie,
    searchTrailer: searchTrailer
  };
});