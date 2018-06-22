'use strict';

// Home controller
var home = angular.module('myApp.home', ['ui.router']);

home.controller('HomeCtrl', function($scope, $http) {
  $scope.cidade={};
  $scope.cidades=[];
  $scope.previsao={};
  $scope.previsao72={};

    $scope.recebeEstado = function (estado) {
     $scope.cidade.state = estado;

   };
    $scope.buscarCidade = function () {

        $http({
            method: 'GET',
            url: 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?',
            params: {
                "name":$scope.cidade.name,
                "state":$scope.cidade.state,
                "token":"9612814012618a1ff330afef395aad92"
            }

        }).then(function successCallback(response) {
            $scope.cidades = response.data;
            $scope.cidade = $scope.cidades[0];
            $scope.buscarPrevisaoAtual();
            $scope.buscarPrevisao72();
            $scope.buscarPrevisao15();

            console.log(response.data);
            console.log(response.status);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response.data);
            console.log(response.status);
        });
    };



    $scope.buscarPrevisaoAtual = function () {

        $http({
            method: 'GET',
            url: 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/'+$scope.cidade.id+'/current?',
            params: {
                "token":"9612814012618a1ff330afef395aad92"
            }

        }).then(function successCallback(response) {
            $scope.previsao = response.data;
            $scope.prevAtualicon = 'assets/icons/128px/' + $scope.previsao.data.icon + ".png";

            console.log(response.data);
            console.log(response.status);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response.data);
            console.log(response.status);
        });
    };


    $scope.buscarPrevisao72 = function () {

        $http({
            method: 'GET',
            url: 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/'+$scope.cidade.id+'/hours/72?',
            params: {
                "token":"9612814012618a1ff330afef395aad92"
            }

        }).then(function successCallback(response) {
            $scope.previsao72 = response.data;

            console.log(response.data);
            console.log(response.status);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response.data);
            console.log(response.status);
        });
    };


    $scope.buscarPrevisao15 = function () {

        $http({
            method: 'GET',
            url: 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/'+$scope.cidade.id+'/days/15?',
            params: {
                "token":"9612814012618a1ff330afef395aad92"
            }

        }).then(function successCallback(response) {
            $scope.previsao15 = response.data;
              $scope.prev15icon = 'assets/icons/128px/' + $scope.previsao15.data[0].text_icon.icon.dawn + ".png";
            console.log(response.data);
            console.log(response.status);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response.data);
            console.log(response.status);
        });
    };


});
