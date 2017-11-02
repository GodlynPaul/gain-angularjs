define([
  './../electronicsModule'
],function(electronics){
    electronics.controller("mobilesCtrl",['$scope',function($scope){
      $scope.mobileBrands = ["Apple","Samsung","Appo","MI","OnePlus","Lenovo","Honour","Micromax","ASUS","Motorola","Vivo"];
      $scope.mobileBrandSearch=""

      $scope.apple=["iPhone","iPhone 3G","iPhone 3GS","iPhone 4","iPhone 4S","iPhone 5","iPhone 5c",
        "iPhone 5s","iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone 6s Plus","iPhone SE","iPhone 7",
        "iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone X" ];
      $scope.Samsung=["Samsung Galaxy J","Galaxy Note 3","Galaxy Trend","Samsung Galaxy J2",
        "Samsung Galaxy C8","Samsung Galaxy Note 8","Samsung Galaxy J5 Pro"];
    }]);
})
