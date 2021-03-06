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
        $scope.path = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAwqL6FCYuo7JgbYtKlZ-QKBVTh5SWIc7A&q=" + $scope.movie.location;
        $scope.url = $sce.trustAsResourceUrl($scope.path);
      }
  }).then(function () {
    Movies.searchTrailer($scope.movie.title).then(function(trailers) {
      if (!trailers.data) {return;}
      $scope.trailer = trailers.data.items[0].id.videoId;
      $scope.trailerUrl = "http://youtube.com/embed/" + $scope.trailer;
      $scope.trailerUrl = $sce.trustAsResourceUrl($scope.trailerUrl);
    });
  });
});