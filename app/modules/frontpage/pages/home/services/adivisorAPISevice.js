home.factory("adivisorAPI", function($http){
    var _getIdcidade = function(name,state){
    return  $http({
          method: 'GET',
          url: 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?',
          params: {
              "name":name,
              "state":state,
              "token":"9612814012618a1ff330afef395aad92"
          }

      });

    };


    var _getPrevisaoAtual = function(id){
    return   $http({
          method: 'GET',
          url: 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/'+id+'/current?',
          params: {
              "token":"9612814012618a1ff330afef395aad92"
          }

      });

    };

    var _getPrevisao72 = function(id){
    return  $http({
        method: 'GET',
        url: 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/'+id+'/hours/72?',
        params: {
            "token":"9612814012618a1ff330afef395aad92"
        }

    });

    };



    var _getPrevisao15 = function(id){
    return  $http({
        method: 'GET',
        url: 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/'+id+'/days/15?',
        params: {
            "token":"9612814012618a1ff330afef395aad92"
        }

    });

    };

    return {
    getIdcidade:  _getIdcidade,
    getPrevisaoAtual: _getPrevisaoAtual,
    getPrevisao72: _getPrevisao72,
    getPrevisao15: _getPrevisao15
  };

});
