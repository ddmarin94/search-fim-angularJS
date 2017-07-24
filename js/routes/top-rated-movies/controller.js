angular.module('filmApp')
.controller('ratedMoviesController', function ($scope, DataService ) {
  $scope.titlePage = "Top rated movies"
  DataService.getRatedMovies()
  .then (function (oResponse) {
    $scope.ratedFilms = oResponse.data.results
  })
})
