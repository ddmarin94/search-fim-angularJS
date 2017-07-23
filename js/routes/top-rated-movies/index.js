angular.module('filmApp')
.config(function ($routeProvider) {
  $routeProvider
  .when ('/ratedMovies', {
    templateUrl:  'js/routes/top-rated-movies/template.html' ,
    controller:   'ratedMoviesController'
  })
})
