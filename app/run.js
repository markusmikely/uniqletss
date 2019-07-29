    run.$inject = ['$rootScope', 'WishlistService'];
    function run($rootScope, WishlistService) {

      $rootScope.api = 'http://localhost/uniqletss/api/web/api/';

      WishlistService.InitWishlist();

      $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        window.scrollTo(0, 0);
      });


    // $rootScope.$on('$stateChangeSuccess',
    //         function(event, toState, toParams, fromState, fromParams){
    //             $("#page-loading").addClass("hidden");
    //     });

    }
