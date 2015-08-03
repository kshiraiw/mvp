var app = angular.module("app.addMovie", []);

app.controller('addMovieCtrl', function($scope, $sce, Movies) {
  $scope.movie = {};
  $scope.sendMovie = function() {
    $scope.movie.isLoaded = null;
    $scope.isSaving = true;
    $scope.movieForm.$setPristine();
    Movies.addMovie($scope.movie).then(function(movie) {
      $scope.isSaving = false;
      $scope.movie = movie.data;
      if (!$scope.movie) {
        $scope.movieError = true;
        return;
      }
      $scope.movie.isLoaded = true;
      if ($scope.movie.location) {
        $scope.path = "https://www.google.com/maps/embed/v1/place?key=" + window.key + "&q=" + $scope.movie.location;
        $scope.url = $sce.trustAsResourceUrl($scope.path);
      }
    });
  };
});

