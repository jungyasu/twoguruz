tgApp.controller('galleryController', ['$scope', '$routeParams', function($scope, $routeParams){

  $scope.authorname = $routeParams.authorname;
  $scope.projecttitle = $routeParams.projecttitle;
  $scope.projectnum = $routeParams.projectnum;


  var workObject = [{
      authorname: 'courtneybragg',
      author:'COURTNEY BRAGG',
      desc: 'Studies Bachelor of Design at Massey University, Wellington.',
      portfolio:[{
                  title: 'SALT',
                  desc: 'A publication celebrating the coastline of Wellington, New Zealand. This book follows the coastline around Wellington, with photographs and story.',
                  url: '/gallery/courtneybragg/0#/',
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
                  desc: '@duskanddawnstore Photography - Evangeline Davis Hair/Make Up - Victoria Nunns Model - Kirvil @ Kirsty Bunny',
                  url: '/gallery/courtneybragg/1#/',
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
                  desc: 'A publication called F*CK, containing stories and theories of how the modern swear word "fuck" originated. The book was made digitally and by hand using letterpress and spray painting techniques.',
                  url: '/gallery/courtneybragg/2#/',
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
                  desc: 'A book themed around the typographic symbol the dagger.',
                  url: '/gallery/courtneybragg/3#/',
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
                  desc: 'Redesign of Ralph Hotere: Black Light the publication and art catalogue to accompany his exhibition.',
                  url: '/gallery/courtneybragg/4#/',
                  imgs: [{src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/1.jpg'},
                        {src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/2.jpg'},
                        {src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/3.jpg'},
                        {src:'/creatives/courtneybragg/projects/RalphHotereBlackLight/4.jpg'}]
                },{
                  title: 'The Māori New Year',
                  desc: 'A calendar celebrating the Māori new year, Matariki.',
                  url: '/gallery/courtneybragg/5#/',
                  imgs: [{src:'/creatives/courtneybragg/projects/TheMaoriNewYear/1.jpg'}]
                }
              ]},{
      authorname: 'daynamcc',
      author:'DAYNA MCC',
      desc: 'Her inspiration comes from the beauty that is found within all things.',
      portfolio:[{
              title: 'Ariel',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/0#/',
              imgs: [{src:'/creatives/daynamcc/projects/arielfinal.jpg'}]
            },{
              title: 'Audrey',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/1#/',
              imgs: [{src:'/creatives/daynamcc/projects/audrey.jpg'}]
            },{
              title: 'Cara',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/2#/',
              imgs: [{src:'/creatives/daynamcc/projects/cara.jpg'}]
            },{
              title: 'Cranberry',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/3#/',
              imgs: [{src:'/creatives/daynamcc/projects/cranberry.jpg'}]
            },{
              title: 'Jade',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/4#/',
              imgs: [{src:'/creatives/daynamcc/projects/jade.jpg'}]
            },{
              title: 'Mr. Carter',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/5#/',
              imgs: [{src:'/creatives/daynamcc/projects/mrcarter.jpg'}]
            },{
              title: 'Symba',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/6#/',
              imgs: [{src:'/creatives/daynamcc/projects/symba.jpg'}]
            },{
              title: 'Muhammad',
              desc: 'Egestas adipiscing purus elementum risus turpis tincidunt',
              url: '/gallery/daynamcc/7#/',
              imgs: [{src:'/creatives/daynamcc/projects/muhammad.jpg'}]
            }]}

    ]

    $scope.workholder = workObject;


}]);
