angular.module('filmApp')
.controller('playingMoviesController', function ($scope, DataService ) {

  $scope.titlePage = "Now playing movies"

  DataService.getNowPlayingMovies()
  .then (function (oResponse) {
    $scope.playingFilms = oResponse.data.results
  })
})
