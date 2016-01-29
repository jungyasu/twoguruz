angular.module('starter.controllers', [])

// .controller('TestCtrl',function($scope, $location, $state) {

//     $scope.testMove = function(scope, location, state) {
//         console.log("Button was pressed!");
//         state.go('/tab.home');
//     }
// })

.controller('DashCtrl', function($scope, $state) {
	$scope.goto = function(state){
		$state.go(state);
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
