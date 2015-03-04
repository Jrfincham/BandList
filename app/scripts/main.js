;(function() {
  "use strict";

  angular.module('FaveBands', ['ngRoute'])

  .constant('PARSE',{

    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
          'X-Parse-Application-Id' : 'NFvg7B0BGuGM6GOjTxoWW4R4nE2Hpk1jKtDEMqkr',
          'X-Parse-REST-API-Key' : 'peAT0JC3ZIRhPIUYv11mHvjc97vVZ0xQ7hPVD3Yv'
      }

    }

  })

  .config(['$routeProvider', function($routeProvider){

    $routeProvider

    .when('/', {
      templateUrl: 'scripts/lists/lists.home.temp.html',
      controller: 'ListController'
    });

    

  }]);

}());
