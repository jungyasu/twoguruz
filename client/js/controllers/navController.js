tgApp.controller('navController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    }

    $location.onload = function() {
        $location.reload();
    }
}])