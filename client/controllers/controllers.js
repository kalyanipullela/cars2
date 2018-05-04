myApp.controller('carController', function($scope,$route,$routeParams,$http){

$scope.getCars = function(){
		$http.get('/api/cars/').then(function(response){
			$scope.cars = response.data;
		});
	};
    
    $scope.showCar = function(){
		var id = $routeParams.id;
		$http.get('/api/cars/'+ id).then(function(response){
			$scope.car = response.data;
		});
	};
    });