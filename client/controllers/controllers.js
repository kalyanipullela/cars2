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
	$scope.addCar = function(){
		
		$http.post('/api/cars/', $scope.car).then(function(response){
			
			window.location.href = '/';
		});
	};
	$scope.updateCar = function(){
		var id = $routeParams.id;
		$http.put('/api/cars/'+ id , $scope.car).then(function(response){
			
			window.location.href = '/';
		});
	};
	$scope.deleteCar = function(id){
		var id = id;
		$http.delete('/api/cars/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});

