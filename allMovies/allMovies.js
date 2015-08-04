var app = angular.module('app.allMovies', []);

app.controller('allMoviesCtrl', function($scope, Movies) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  Movies.getMovies().then(function(movies) {
    $scope.movies = movies.data;
  });
});