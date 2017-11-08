
define([
  './../baseModule'
],function(baseModule){
    baseModule.controller("simpleController",['$scope','$log',
    function($scope,$log){
      $scope.companyName = "PopKart";
      $scope.powerdBy = "G.Industry";
      $scope.electronics = [
        {name:"Mobile", productId:"100"},
        {name:"Laptop", productId:"101"},
        {name:"Televison", productId:"102"},
        {name:"Camera", productId:"103"},
      ]
      $log.debug("DEBUG");
      $log.log("LOG");
      $log.warn("WARN");
      $log.info("INFO");

    }]);

    baseModule.controller("nestedController1",['$scope',function($scope){
      $scope.bestPhone = 'Mi';
      $scope.bestTelevistion = 'Vu';
    }]);

    baseModule.controller("nestedController2",['$scope',function($scope){
      $scope.bestPhone = 'Apple';
    }]);

    baseModule.controller("categoryCtrl",['$scope',function($scope){
      $scope.category = ["Electronics","Appliances","Men","Women","Home & Furniture","Cars & Bikes"];
    }]);
  })
