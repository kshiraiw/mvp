var app = angular.module("app", ['ui.router', 'app.services', 'app.allMovies', 'app.movie', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
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
