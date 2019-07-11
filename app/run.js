    run.$inject = ['$rootScope', 'WishlistService'];
    function run($rootScope, WishlistService) {

      $rootScope.api = 'http://www.uniqletts.com/api/web/api/';

      WishlistService.InitWishlist();

      $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
      });


    // $rootScope.$on('$stateChangeSuccess',
    //         function(event, toState, toParams, fromState, fromParams){
    //             $("#page-loading").addClass("hidden");
    //     });

    }
