define([
	'./../baseModule'
],function(baseModule){
	baseModule.controller("complaintsCtrl",['$scope','$http',
		function($scope,$http){
			$scope.indiaStateListPath = "./app/dataBank/indiastate.json"
			$http.get($scope.indiaStateListPath).then(function(response){
				$scope.indiaStateList=response.data;
			});

			$scope.complaintCategoryList = {
				1:{name:"Delivery",type:"D"},
				2:{name:"Product",type:"P"},
				3:{name:"Application",type:"A"},
				4:{name:"Customer Care",type:"C"}
			};

			$scope.productCategoryList=[
				{name:"Electronics",value:1},
				{name:"Applicances",value:2},
				{name:"Men",value:3},
				{name:"Women",value:4},
				{name:"Home & furniture",value:5},
				{name:"Cars & Bikes",value:6}
			]
			$scope.complaintFormData={};
			$scope.complaintSubmit = function () {
				console.log("COMPLAINT RAISED");
				console.log($scope.complaintFormData);
			};

			$scope.availedOfferSelectALl = function(){
				if($scope.complaintFormData.availedOffers.all){
					$scope.complaintFormData.availedOffers.bankOffer = true;
					$scope.complaintFormData.availedOffers.festivalOffer = true;
					$scope.complaintFormData.availedOffers.clearenceOffer = true;
					$scope.complaintFormData.availedOffers.promoOffer = true;
				}else{
					$scope.complaintFormData.availedOffers={};
				}
			}
		}
	]);
});
