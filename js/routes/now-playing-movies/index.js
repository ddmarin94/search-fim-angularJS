angular.module('filmApp')
.config(function ($routeProvider) {
  $routeProvider
  .when ('/playingMovies', {
    templateUrl:  'js/routes/now-playing-movies/template.html' ,
    controller:   'playingMoviesController'
  })
})
