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
					controller:'customerCtrl',
					templateUrl:'./app/views/customers.html'
				})
				.when('/employee',{
					controller:'employeeCtrl',
					templateUrl:'./app/views/employee.html'
				})
				.otherwise({redirectTo:'/employee'})
				// $locationProvider.html5Mode(false);
			$locationProvider.hashPrefix('');
			$locationProvider.html5Mode({enabled: true, requireBase: true, rewriteLinks: true});
		}]);
	return popKartRootModule;
})
