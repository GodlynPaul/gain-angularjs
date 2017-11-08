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
