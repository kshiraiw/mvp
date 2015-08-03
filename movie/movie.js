var app = angular.module('app.movie', []);

app.controller('movieCtrl', function($scope, $sce, $stateParams, Movies) {
  $scope.isLoaded = false;
  Movies.getMovie($stateParams.title).then(function(movie) {
    $scope.movie = movie.data;
    if (!$scope.movie) {
      $scope.movieError = true;
    }
    $scope.isLoaded = true;
    if ($scope.movie.location) {
        $scope.path = "https://www.google.com/maps/embed/v1/place?key=" + window.key + "&q=" + $scope.movie.location;
        $scope.url = $sce.trustAsResourceUrl($scope.path);
      }
  });
});