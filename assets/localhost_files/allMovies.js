var app = angular.module('app.allMovies', []);

app.controller('allMoviesCtrl', function($scope, Movies) {
  Movies.getMovies().then(function(movies) {
    $scope.movies = movies.data;
  });
});