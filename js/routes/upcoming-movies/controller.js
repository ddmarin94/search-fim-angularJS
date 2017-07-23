angular.module('filmApp')
.controller('upcomingMoviesController', function ($scope, DataService ) {

  $scope.titlePage = "Upcoming Movies"

  DataService.getUpcomingMovies()
  .then (function (oResponse) {
    $scope.upcomingFilms = oResponse.data.results
    console.log(oResponse.data.results)
  })
})
