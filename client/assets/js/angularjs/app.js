// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('tgApp', ['ngRoute'])

  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  })

  // .config(function($routeProvider) {
 
  // $routeProvider
  //   .when('/portfolio', {
  //     controller:'CreativesController',
  //     templateUrl:'portfolio.html'
  //   })
  //   .when('/list', {
  //     controller:'CreativesController',
  //     templateUrl:'portfolio.html'
  //   })
  //   .otherwise({
  //     redirectTo:'/'
  //   });
  // })

  .controller('CreativesController', function($scope){
    var listObject = [
      {
        ID: 1,
        Name: 'COURTNEY BRAGG',
        Desc: 'Studies Bachelor of Design at Massey University, Wellington.',
        Path: 'creatives/courtneybragg/projects/TheMaoriNewYear/1.jpg',
        Url: 'creatives/courtneybragg/index.html'
        // Url: 'creatives/courtneybragg/index.html'
      }
      ,{
        ID: 2,
        Name: 'DAYNA MCC',
        Desc: 'Her inspiration comes from the beauty that is found within all things.',
        Path: 'creatives/daynamcc/front/3.jpg',
        Url: 'creatives/daynamcc/index.html'
        // Url: 'creatives/daynamcc/index.html'
      }

    ];

    $scope.dataholder = listObject;
  })

  .controller('PortfolioController', function($scope, $rootScope){
  
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
  });
