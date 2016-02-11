var tgApp = angular.module('tgApp', [
    'ngRoute']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        //typical routes... when someone navigates to a given directory, load the partial, and use the controller
        $routeProvider.when('/', {templateUrl: '/partials/home.html', controller: 'homeController'});
        $routeProvider.when('/service', {templateUrl: '/partials/service.html', controller: 'serviceController'});
        $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'contactController'});
        $routeProvider.when('/client', {templateUrl: '/partials/client.html', controller: 'clientController'});
        $routeProvider.when('/creative', {templateUrl: '/partials/creative.html', controller: 'creativeController'});
        $routeProvider.when('/portfolio', {templateUrl: '/partials/portfolio.html', controller: 'portfolioController as work'});
        // $routeProvider.when('/projects', {templateUrl: '/partials/projects.html', controller: 'projectsController'});
        // $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiController'});
        // $routeProvider.when('/projects/chat', {templateUrl: '/partials/projects/chat.html', controller: 'chatController'});
        
        //if no valid routes are found, redirect to /home
        $routeProvider.otherwise({redirectTo: '/'});
        
        //reload refresh once
        
        //new comment
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }])
    .filter('startFrom', function(){
        return function(data, start){
            return data.slice(start);
        }
    })
    .controller('MainCtrl', function($scope) {
      $scope.items1 = [
            'img/logos/google_analytics.png',
            'img/logos/google_adwords.png',
            'img/logos/google_seo.png',
            'img/logos/instagram.png',
            'img/logos/pinterest.png',
            'img/logos/polyvore.png',
            'img/logos/shopify.png',
            'img/logos/snapchat.png',
            'img/logos/twitter.png',
            'img/logos/youtube.png',
            'img/logos/facebook.png',
            'img/logos/facebook-ads.png',
            'img/logos/facebook-powereditor.png'
        ];
      $scope.items2 = [1,2,3,4,5,6,7,8,9,10];
    }).directive("owlCarousel", function() {
        return {
            restrict: 'E',
            transclude: false,
            link: function (scope) {
                scope.initCarousel = function(element) {
                  // provide any default options you want
                    var defaultOptions = {
                    };
                    var customOptions = scope.$eval($(element).attr('data-options'));
                    // combine the two options objects
                    for(var key in customOptions) {
                        defaultOptions[key] = customOptions[key];
                    }
                    // init carousel
                    $(element).owlCarousel(defaultOptions);
                };
            }
        };
    })
    .directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
              // wait for the last item in the ng-repeat then call init
                if(scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }]);
    