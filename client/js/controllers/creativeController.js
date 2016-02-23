tgApp.controller('creativeController', ['$scope', function($scope){

    var listObject = [
      {
        ID: 1,
        Name: 'COURTNEY BRAGG',
        Desc: 'Studies Bachelor of Design at Massey University, Wellington.',
        Path: 'creatives/courtneybragg/projects/TheMaoriNewYear/1.jpg',
        Url: '/creative/courtneybragg/'
      }
      ,{
        ID: 2,
        Name: 'DAYNA MCC',
        Desc: 'Her inspiration comes from the beauty that is found within all things.',
        Path: 'creatives/daynamcc/front/3.jpg',
        Url: '/creative/daynamcc/'
      }
    ];

    $scope.dataholder = listObject;

}]);