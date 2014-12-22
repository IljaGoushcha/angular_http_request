angular.module('HttpPost', []);

angular.module('HttpPost').controller('MainCtrl', function($scope, $http) {
    'use strict';

    var songs = [];

    $scope.uploadSongNoForm = function() {
      var params = {
        url: "http://www.song.com",
        title: "Smells Like Teen Spirit",
        author: "Nirvana",
        album: "Nevermind",
        pitch: 0,
        volume: 0,
        fade_start_time: 0,
        fade_stop_time: 0
      };

      $http.post('http://localhost:3000/users', params).success(function(response) {
            $scope.songs.push(response);
      });
    };

});
