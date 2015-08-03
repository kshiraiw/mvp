var app = angular.module("app", ['ui.router', 'app.services', 'app.addMovie', 'app.allMovies', 'app.movie']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('addMovie', {
      url: "/addMovie",
      templateUrl: 'addMovie/addMovie.html',
      controller: 'addMovieCtrl'
    })
    .state('allMovies', {
      url: '/allMovies',
      templateUrl: 'allMovies/allMovies.html',
      controller: 'allMoviesCtrl'
    })
    .state('movie', {
      url: '/movie/:title',
      templateUrl: 'movie/movie.html',
      controller: 'movieCtrl'
    });

  $urlRouterProvider.otherwise('/allMovies');
});