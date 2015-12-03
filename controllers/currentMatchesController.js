app.controller("currentMatchesController", ["$http", function($http){
	var vm = this;
	vm.matches = [];
	$http.get("http://synd.cricbuzz.com/cricbuzz/livecricketscore/chrome-details.json")
		.then(function(response){
			vm.matches = response.data;
			console.log(vm.matches);
		}, function(error){
			console.log(error);
		});
}]);