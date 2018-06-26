'use strict';



var app = angular.module('myApp', ['ui.router','myApp.home']);


app.controller('header', function($scope,appValues) {

   $scope.estado = appValues.appEstado;
   $scope.cidade = appValues.appCidade;
   $scope.separacao = 'do.';


});


app.config( function($stateProvider,$urlRouterProvider) {

   $urlRouterProvider.otherwise('/home');


   var states = [
   { name: 'home', url: '/home', templateUrl: 'app/modules/frontpage/pages/home/home.html' , controller: 'HomeCtrl' },
   { name: 'about', url: '/about',templateUrl: 'app/modules/frontpage/pages/sobre/sobre.html'},
 ]


   states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
