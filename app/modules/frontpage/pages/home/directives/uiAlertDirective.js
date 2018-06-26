home.directive("uiAlert", function(){
      return {
            templateUrl: "app/modules/frontpage/components/alert/ui-alert.html",
            replace: true,
            restrict: 'E',
            scope:{
              title: "@"
            },transclude: true
      };


});
