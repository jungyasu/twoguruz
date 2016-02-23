// tgApp.controller('portfolioController', function($scope) {
//       $scope.items1 = [
//             'img/logos/google_analytics.png',
//             'img/logos/google_adwords.png',
//             'img/logos/google_seo.png',
//             'img/logos/instagram.png',
//             'img/logos/pinterest.png',
//             'img/logos/polyvore.png',
//             'img/logos/shopify.png',
//             'img/logos/snapchat.png',
//             'img/logos/twitter.png',
//             'img/logos/youtube.png',
//             'img/logos/facebook.png',
//             'img/logos/facebook-ads.png',
//             'img/logos/facebook-powereditor.png'
//         ];
//       $scope.items2 = [1,2,3,4,5,6,7,8,9,10];
//     }).directive("owlCarousel", function() {
//         return {
//             restrict: 'E',
//             transclude: false,
//             link: function (scope) {
//                 scope.initCarousel = function(element) {
//                   // provide any default options you want
//                     var defaultOptions = {
//                       items : 10, //10 items above 1000px browser width
//                       itemsDesktop : [1000,10], //5 items between 1000px and 901px
//                       itemsDesktopSmall : [900,4], // betweem 900px and 601px
//                       itemsTablet: [600,3], //2 items between 600 and 0
//                       itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
//                     };
//                     var customOptions = scope.$eval($(element).attr('data-options'));
//                     // combine the two options objects
//                     for(var key in customOptions) {
//                         defaultOptions[key] = customOptions[key];
//                     }
//                     // init carousel
//                     $(element).owlCarousel(defaultOptions);
//                 };
//             }
//         };
//     })
//     .directive('owlCarouselItem', [function() {
//         return {
//             restrict: 'A',
//             transclude: false,
//             link: function(scope, element) {
//               // wait for the last item in the ng-repeat then call init
//                 if(scope.$last) {
//                     scope.initCarousel(element.parent());
//                 }
//             }
//         };
//     }]);
tgApp.controller('portfolioController', ['$scope', '$routeParams', function($scope, $routeParams){

  $scope.authorname = $routeParams.authorname;
  $scope.projecttitle = $routeParams.projecttitle;
  $scope.projectnum = $routeParams.projectnum;


  var workObject = [{
      authorname: 'courtneybragg',
      author:'COURTNEY BRAGG',
      facebook:'https://www.facebook.com/courtney.bragg1/',
      twitter:'https://twitter.com/courtneybragg_',
      instagram:'https://www.instagram.com/courtney_bragg/',
      pinterest:'https://www.pinterest.com/courtneybragg2/',
      linkedin:'https://www.linkedin.com',
      desc: 'Studies Bachelor of Design at Massey University, Wellington.',
      portfolio:[{
                  title: 'SALT',
                  desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
                  url: '/gallery/courtneybragg/0/',
                  imgs: [{src:'/creatives/courtneybragg/projects/SALT/1.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/2.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/3.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/4.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/5.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/6.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/7.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/8.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/9.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/10.jpg'},
                        {src:'/creatives/courtneybragg/projects/SALT/11.jpg'}]
                },{
                  title: 'DUSK & DAWN LOOKBOOK 2016',
                  desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
                  url: '/gallery/courtneybragg/1/',
                  imgs: [{src:'/creatives/courtneybragg/projects/DuskAndDawn/1.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/2.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/3.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/4.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/5.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/6.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/7.jpg'},
                        {src:'/creatives/courtneybragg/projects/DuskAndDawn/8.jpg'}]
                },{
                  title: 'F*CK',
                  desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
                  url: '/gallery/courtneybragg/2/',
                  imgs: [{src:'/creatives/courtneybragg/projects/F_CK/1.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/2.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/3.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/4.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/5.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/6.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/7.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/8.jpg'},
                        {src:'/creatives/courtneybragg/projects/F_CK/9.jpg'}]
                },{
                  title: 'Death By Dagger',
                  desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
                  url: '/gallery/courtneybragg/3/',
                  imgs: [{src:'/creatives/courtneybragg/projects/DeathByDagger/1.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/2.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/3.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/4.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/5.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/6.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/7.jpg'},
                        {src:'/creatives/courtneybragg/projects/DeathByDagger/8.jpg'}]
                },{
                  title: 'Ralph Hotere Black Light',
                  desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
                  url: '/gallery/courtneybragg/4/',
                  imgs: [{src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/1.jpg'},
                        {src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/2.jpg'},
                        {src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/3.jpg'},
                        {src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/4.jpg'}]
                },{
                  title: 'The Māori New Year',
                  desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
                  url: '/gallery/courtneybragg/5/',
                  imgs: [{src:'/creatives/courtneybragg/projects/TheMaoriNewYear/1.jpg'}]
                }
              ]},{
      authorname: 'daynamcc',
      author:'DAYNA MCC',
      facebook:'https://www.facebook.com/daynamccuaigart/',
      twitter:'https://twitter.com/',
      instagram:'https://www.instagram.com/daynamcc_art/',
      pinterest:'https://www.pinterest.com/',
      linkedin:'https://www.linkedin.com/',
      desc: 'Dayna is Visual Artist living in Vancouver, originally from Orillia, Ontario. \n\n She is self-taught primarily doing watercolour, coloured pencil, and pencil portraits. She couples basic images with vibrant abstract colours and vivid detailing. \n\nThe results of her art are emotional life-like human portraits, as well as other subjects.\n\n Her synesthetic response to colour allows her to capture the emotional power behind each subject. Her inspiration comes from the beauty that is found within all things.',
      portfolio:[{
              title: 'Ariel',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/0/',
              imgs: [{src:'/creatives/daynamcc/projects/arielfinal.jpg'}]
            },{
              title: 'Audrey',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/1/',
              imgs: [{src:'/creatives/daynamcc/projects/audrey.jpg'}]
            },{
              title: 'Cara',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/2/',
              imgs: [{src:'/creatives/daynamcc/projects/cara.jpg'}]
            },{
              title: 'Cranberry',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/3/',
              imgs: [{src:'/creatives/daynamcc/projects/cranberry.jpg'}]
            },{
              title: 'Jade',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/4/',
              imgs: [{src:'/creatives/daynamcc/projects/jade.jpg'}]
            },{
              title: 'Mr. Carter',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/5/',
              imgs: [{src:'/creatives/daynamcc/projects/mrcarter.jpg'}]
            },{
              title: 'Symba',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/6/',
              imgs: [{src:'/creatives/daynamcc/projects/symba.jpg'}]
            },{
              title: 'Muhammad',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/7/',
              imgs: [{src:'/creatives/daynamcc/projects/muhammad.jpg'}]
            }]}

    ]

    $scope.workholder = workObject;


}]);
