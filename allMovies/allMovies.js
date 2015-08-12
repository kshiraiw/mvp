var app = angular.module('app.allMovies', []);

app.controller('allMoviesCtrl', function($scope, Movies, $location) {
  Movies.getMovies().then(function(movies) {
    $scope.movies = movies.data;
    $scope.query = {};
    $scope.sendMovie = function() {
      $scope.isSaving = true;
      Movies.addMovie($scope.query).then(function(movie) {
        $scope.isSaving = false;
        $location.path('/movie/' + movie.data.title);
      });
    };

    $scope.reroute = function(title) {
      $location.path('/movie/' + title);
    };
  });
});