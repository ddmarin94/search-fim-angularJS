angular.module('filmApp')
.controller('searchOneFilmController', function ($scope, $rootScope, DataService ) {
  $scope.titlePage = "Search a film"
  $scope.getNamefilm = function(){
    var filmName = $scope.filmName;
    $rootScope.$broadcast('theFilmNameIsReady', { filmName: filmName });
    console.log(filmName)
  }
  $scope.$on('theFilmNameIsReady', function(e, data) {
    DataService.getOneFilm(data.filmName)
    .then (function (oResponse) {
      $scope.getFilms = oResponse.data.results
      console.log(oResponse)
    })
  })
})
