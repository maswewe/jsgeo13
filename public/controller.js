
function NodewsosCtrl($scope, $log, $http, $injector) {
	var mapService = $injector.get('az.services.layers');


	$scope.findPark = function() {
		$log.log("I see this mapLayers " + mapService.getMapLayers());
		
	}

	$scope.mapClick = function(e) {
		$log.log("Map click event at " + e.latlng);

		$http.get('/ws/parks/near?lat=' + e.latlng.lat + '&lon=' + e.latlng.lng)
			.success(function(response) {
				$log.log("Got this response: " + angular.toJson(response));
				L.marker([-105.68962, 40.414]).addTo(mapService.getMap());
			});
	}
}

