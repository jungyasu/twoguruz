tgApp.controller('navController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
    window.onload = function() {
        if( window.localStorage )
          {
            if( !localStorage.getItem( 'firstLoad' ) )
            {
              localStorage[ 'firstLoad' ] = true;
              window.location.reload();
            }  
            else
              localStorage.removeItem( 'firstLoad' );
          }
    }
}])