angular.module('filmApp')
.controller('popularMoviesController', function ($scope, DataService ) {

  $scope.titlePage = "Popular movies"

  DataService.getPopularMovies()
  .then (function (oResponse) {
    $scope.films = oResponse.data.results
  })
})
