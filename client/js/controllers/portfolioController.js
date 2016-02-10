tgApp.controller('portfolioController', ['$scope', '$rootScope', function($scope, $rootScope){
	$rootScope.index_num = 0;

  $scope.changeIndex = function(num){
    $rootScope.index_num = num;
    // $rootScope.$apply(index_num);
  };

  $scope.selectedWork = {};

  $scope.selectedTitle = '';


  var workObject = [{
      author: 'COURTNEY BRAGG',
      title: 'SALT',
      desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
      imgs: [{src:'projects/SALT/1.jpg'},
            {src:'projects/SALT/2.jpg'},
            {src:'projects/SALT/3.jpg'},
            {src:'projects/SALT/4.jpg'},
            {src:'projects/SALT/5.jpg'},
            {src:'projects/SALT/6.jpg'},
            {src:'projects/SALT/7.jpg'},
            {src:'projects/SALT/8.jpg'},
            {src:'projects/SALT/9.jpg'},
            {src:'projects/SALT/10.jpg'},
            {src:'projects/SALT/11.jpg'}]
    },{
      author: 'COURTNEY BRAGG',
      title: 'DUSK & DAWN LOOKBOOK 2016',
      desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
      imgs: [{src:'projects/DuskAndDawn/1.jpg'},
            {src:'projects/DuskAndDawn/2.jpg'},
            {src:'projects/DuskAndDawn/3.jpg'},
            {src:'projects/DuskAndDawn/4.jpg'},
            {src:'projects/DuskAndDawn/5.jpg'},
            {src:'projects/DuskAndDawn/6.jpg'},
            {src:'projects/DuskAndDawn/7.jpg'},
            {src:'projects/DuskAndDawn/8.jpg'}]
    },{
      author: 'COURTNEY BRAGG',
      title: 'F*CK',
      desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
      imgs: [{src:'projects/F_CK/1.jpg'},
            {src:'projects/F_CK/2.jpg'},
            {src:'projects/F_CK/3.jpg'},
            {src:'projects/F_CK/4.jpg'},
            {src:'projects/F_CK/5.jpg'},
            {src:'projects/F_CK/6.jpg'},
            {src:'projects/F_CK/7.jpg'},
            {src:'projects/F_CK/8.jpg'},
            {src:'projects/F_CK/9.jpg'}]
    },{
      author: 'COURTNEY BRAGG',
      title: 'Death By Dagger',
      desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
      imgs: [{src:'projects/DeathByDagger/1.jpg'},
            {src:'projects/DeathByDagger/2.jpg'},
            {src:'projects/DeathByDagger/3.jpg'},
            {src:'projects/DeathByDagger/4.jpg'},
            {src:'projects/DeathByDagger/5.jpg'},
            {src:'projects/DeathByDagger/6.jpg'},
            {src:'projects/DeathByDagger/7.jpg'},
            {src:'projects/DeathByDagger/8.jpg'}]
    },{
      author: 'COURTNEY BRAGG',
      title: 'Ralph Hotere Black Light',
      desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
      imgs: [{src:'projects/RalphHotereBlackLight/1.jpg'},
            {src:'projects/RalphHotereBlackLight/2.jpg'},
            {src:'projects/RalphHotereBlackLight/3.jpg'},
            {src:'projects/RalphHotereBlackLight/4.jpg'}]
    },{
      author: 'COURTNEY BRAGG',
      title: 'The Māori New Year',
      desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
      imgs: [{src:'projects/TheMaoriNewYear/1.jpg'}]
    }]

    $scope.workholder = workObject;
}]);
