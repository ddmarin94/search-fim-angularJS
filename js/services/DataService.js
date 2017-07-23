

angular.module('filmApp')
.factory('DataService', function($http){
  var apiKey = 'bdc009b1768deb8a342cb7a355b4d5d3'


  //First route folder.
  function getNowPlayingMovies() {
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1'
    return $http.get(url)
  }
  //Second route folder.
  function getPopularMovies() {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1'
    return $http.get(url)
  }
  //Third route folder.
  function getRatedMovies() {
    var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1'
    return $http.get(url)
  }
  //Fourth route folder.
  function getUpcomingMovies() {
    var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1'
    return $http.get(url)
  }

  //Fifth route folder.
  function getOneFilm(filmName) {
    var url = 'https://api.themoviedb.org/3/search/movie?api_key='+ apiKey + '&query=' + filmName
    return $http.get(url)
    console.log(filmName)
  }

  return {
    getNowPlayingMovies: getNowPlayingMovies,
    getPopularMovies: getPopularMovies,
    getRatedMovies: getRatedMovies,
    getUpcomingMovies: getUpcomingMovies,
    getOneFilm: getOneFilm
  }
})
