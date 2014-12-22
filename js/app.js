angular.module('HttpPost', []);

angular.module('HttpPost').controller('MainCtrl', function($scope, $http) {
    'use strict';

    $scope.songs = [];

    $scope.uploadSongNoForm = function() {
      console.log("hi");
      var params = {
        song : {
          url: "http://www.song.com",
          title: "Smells Like Teen Spirit",
          author: "Nirvana",
          album: "Nevermind",
          pitch: 0,
          volume: 0,
          fade_start_time: 0,
          fade_stop_time: 0,
          controller: "songs",
          action: "create"
        }
      };

      $http.post('http://localhost:3000/songs', params).success(function(response) {
          console.log(response);
          $scope.songs.push(response);
      });
    };

    $scope.uploadSongWithForm = function() {
      console.log("inside form");
      var params = {
        song : {
          url: $scope.song.url,
          title: $scope.song.title,
          author: $scope.song.author,
          album: "Nevermind",
          pitch: 0,
          volume: 0,
          fade_start_time: 0,
          fade_stop_time: 0,
          controller: "songs",
          action: "create"
        }
      };

      $http.post('http://localhost:3000/songs', params).success(function(response) {
          console.log(response);
          $scope.songs.push(response);
      });
    };

});
