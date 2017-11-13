define([
	'./pkRootModule'
],function(popKartRootModule){
	'use strict'
	popKartRootModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider){
			$routeProvider
				.when('/mobiles',{
					controller:'mobilesCtrl',
					templateUrl:'./app/views/mobiles.html',
				})
				.when('/complaints',{
					controller:'complaintsCtrl',
					templateUrl:'./app/views/complaints.html'
				})
				.when('/customers',{
					controller:'',
					templateUrl:'./app/views/customers.html'
				})
 				.otherwise({redirectTo:'/customers'})
  		// $locationProvider.html5Mode(false);
	  	$locationProvider.hashPrefix('');
			$locationProvider.html5Mode({enabled: true, requireBase: true, rewriteLinks: true});
		}]);
	return popKartRootModule;
})
