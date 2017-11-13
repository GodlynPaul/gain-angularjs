define([
	'./../baseModule'
],function(baseModule){
	baseModule.controller("customerCtrl",['$scope','$http','$log','$rootScope','uiGridConstants',
		function($scope,$http,$log,$rootScope,uiGridConstants){
			var customerListPath = "./app/dataBank/customerdetails.json";
			$scope.gridOptionsCustomer = {};
			$http.get(customerListPath).then(function(response){
				$scope.gridOptionsCustomer.data = response.data;
			})
			$scope.gridOptionsCustomer = {
				enableSorting: true,
				enableColumnResizing: true,
				enableFiltering: true,
				columnDefs: [
					{	field: 'id',
						displayName: 'Id',
						minWidth:75,
						maxWidth:300,
						width: '5%',
						enableColumnResizing: false,
						sort:{
							direction:uiGridConstants.ASC,
							priority:0
						}
					},
					{	field: 'firstname',
						displayName: 'Name',
						minWidth:100,
						suppressRemoveSort:true
					},
					{	field: 'lastname',
						displayName: 'LName',
						minWidth:100,
						enableCellEdit:true,
						sort:{
							direction:uiGridConstants.ASC,
							priority:1
						}
					},
					{	field: 'gender',
						displayName: 'Gender',
						minWidth:75,
						width: '7%'
					},
					{	field: 'phone',
						displayName: 'Phone',
						minWidth:150,
						enableSorting: false
					},
					{	field: 'membership',
						displayName: 'Membership',
						minWidth:120
					},
					{	field: 'email',
						displayName: 'Email',
						minWidth:250
					},
					{	field: 'nameaddress',
						displayName: 'Address',
						minWidth:200
					},
					{	field: 'cityaddress',
						displayName: 'City',
						minWidth:150
					},
					{	field: 'zipaddress',
						displayName: 'ZIP',
						minWidth:100,
						visible: true
					},
					{	field: 'stateaddress',
						displayName: 'State',
						minWidth:100
					}
				]
			};
	}])
})
// enableSorting: true - default globally
// visible: true - default globally
// width: '*' - * means auto
// suppressRemoveSort:false - When enabled and once sort is applied prevents users from manually removing the sort
