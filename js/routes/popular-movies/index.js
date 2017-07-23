angular.module('filmApp')
.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl:  'js/routes/popular-movies/template.html' ,
    controller:   'popularMoviesController'
  })
})
