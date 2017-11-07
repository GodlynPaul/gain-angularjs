define([
	'./pkRootModule'
],function(popKartRootModule){
	'use strict'
	popKartRootModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider){
			$routeProvider
				.when('/mobiles',{
					controller:'',
					templateUrl:'./app/views/mobiles.html'
				})
				.when('/view2',{
					controller:'',
					templateUrl:'./app/views/view2.html'
				})
				.when('/view3',{
					controller:'',
					templateUrl:'./app/views/view3.html'
				})
 				.otherwise({redirectTo:'/mobiles'})
  		// $locationProvider.html5Mode(false);
	  	$locationProvider.hashPrefix('');
			$locationProvider.html5Mode({enabled: true, requireBase: true, rewriteLinks: true});
		}]);
	return popKartRootModule;
})
