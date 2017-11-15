define([
	'./../employeeModule',
	'./../baseModule'
],function(employeeModule,baseModule){
	employeeModule.controller("employeeCtrl",['$scope','$http','$log','$rootScope',
		function($scope,$http,$log,$rootScope){
			var employeeListPath = "./app/dataBank/employeedetails.json";
			$http.get(employeeListPath).then(function(response){
				$scope.employeesDetails = response.data;
			})
			$scope.resetemployeeSearch = function(){
				if(!$scope.employeeAdvanceSearch){
					$scope.employeeSearch="";
				}else{
					$scope.employeeSearch={};
				}
			}
		}
	]);
	baseModule.filter("employmentTypeFilter",function (){
		return function(employmentType){
				switch(employmentType){
					case 1:return("Full-Time");
					case 2:return("Part-Time");
					case 3:return("Not disclosed");
				}
			}
	});
	baseModule.filter("genderFilter",function (){
		return function(gender){
				switch(gender){
					case 1:return("Male");
					case 2:return("Female");
					case 3:return("Not disclosed");
				}
			}
	})
});
