'use strict';

// Home controller
var home = angular.module('myApp.home', ['ui.router']);

home.controller('HomeCtrl', function($scope,$http, adivisorAPI,appValues) {
  $scope.cidade={};
  $scope.cidades=[];
  $scope.previsao={};
  $scope.previsao72={};
  $scope.panel = false;
  $scope.error = "Não foi possivel Buscar Cidade ou Estado digitdados";
  $scope.myVar = false;

  $scope.buscarCidade = function () {
    try{
      adivisorAPI.getIdcidade($scope.cidade.name,$scope.cidade.state).then(function successCallback(response) {


        $scope.cidades = response.data;
        $scope.cidade = $scope.cidades[0];
        $scope.buscarPrevisaoAtual();
        $scope.buscarPrevisao72();
        $scope.buscarPrevisao15();
        $scope.panel = true;
        $scope.homeError = false;

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        $scope.homeError = true;
        // called asynchronously if an error occurs
        // or server returns response with an error status.

        console.log(response.data);
        console.log(response.status);
      });
    }
    catch(err){
      $scope.homeError = true;
    }

  };



  $scope.buscarPrevisaoAtual = function () {
    try{
      adivisorAPI.getPrevisaoAtual($scope.cidade.id).then(function successCallback(response) {
        $scope.previsao = response.data;
        $scope.prevAtualicon = 'assets/icons/128px/' + $scope.previsao.data.icon + ".png";

        console.log(response.data);
        console.log(response.status);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.homeError = true;
        $scope.error = "Não foi possivel Buscar Previsão Atual";
        console.log(response.data);
        console.log(response.status);
      });
    }
    catch(err){
      $scope.homeError = true;
    }
  };


  $scope.buscarPrevisao72 = function () {
    try{
      adivisorAPI.getPrevisao72($scope.cidade.id).then(function successCallback(response) {
        $scope.previsao72 = response.data;

        console.log(response.data);
        console.log(response.status);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.homeError = true;
        $scope.error = "Não foi possivel Buscar Previsão para 72H";
        console.log(response.data);
        console.log(response.status);
      });
    }
    catch(err){
      $scope.homeError = true;
    }
  };


  $scope.buscarPrevisao15 = function () {
    try{
      adivisorAPI.getPrevisao15($scope.cidade.id).then(function successCallback(response) {
        $scope.previsao15 = response.data;
        $scope.prev15icon = 'assets/icons/128px/' + $scope.previsao15.data[0].text_icon.icon.dawn + ".png";
        console.log(response.data);
        console.log(response.status);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.homeError = true;
        $scope.error = "Não foi possivel Buscar Previsão para 15 Dias";
        console.log(response.data);
        console.log(response.status);
      });
    }
    catch(err){
      $scope.homeError = true;
    }
  };


});
