angular.module('filmApp')
.config(function ($routeProvider) {
  $routeProvider
  .when ('/searchMovie', {
    templateUrl:  'js/routes/searchOneFilm/template.html' ,
    controller:   'searchOneFilmController'
  })
})
