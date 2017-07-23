angular.module('filmApp')
.config(function ($routeProvider) {
  $routeProvider
  .when ('/upcomingMovies', {
    templateUrl:  'js/routes/upcoming-movies/template.html' ,
    controller:   'upcomingMoviesController'
  })
})
