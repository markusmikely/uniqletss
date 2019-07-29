function config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $sceDelegateProvider) {
//   $mdThemingProvider.definePalette('amazingPaletteName', {
//   '50': '0072be',
//   '100': 'ffcdd2',
//   '200': 'ef9a9a',
//   '300': 'e57373',
//   '400': 'ef5350',
//   '500': 'f44336',
//   '600': 'e53935',
//   '700': 'd32f2f',
//   '800': 'c62828',
//   '900': 'b71c1c',
//   'A100': 'ff8a80',
//   'A200': 'ff5252',
//   'A400': 'ff1744',
//   'A700': 'd50000',
//   'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
//                                       // on this palette should be dark or light
//
//   'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
//    '200', '300', '400', 'A100'],
//   'contrastLightColors': undefined    // could also specify this if default was 'dark'
// });
//
// $mdThemingProvider.theme('default')
//   .primaryPalette('amazingPaletteName')
$mdThemingProvider
  .theme('default')
  .primaryPalette('blue')
  .accentPalette('teal')
  .warnPalette('red')
  .backgroundPalette('grey');

  $sceDelegateProvider.resourceUrlWhitelist([
   'self',
   'http://maps.googleapis.com/**',
   'https://maps.googleapis.com/**'
 ]);
  $urlRouterProvider.otherwise('/');

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'app/components/home/home.view.htm',
    controller: 'HomeController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'home'
    }
  };
  var salesState = {
    name: 'sales',
    url: '/sales',
    templateUrl: 'app/components/sales/sales.view.htm',
    controller: 'SalesController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'sales'
    },
    params: {
        filters: null
    }
  };
  var lettingsState = {
    name: 'lettings',
    url: '/lettings',
    params: {filters: null},
    templateUrl: 'app/components/lettings/lettings.view.htm',
    data : {
      cssClassnames : 'lettings'
    }
  };
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'app/components/about/about.view.htm',
    controller: 'AboutController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'about'
    }
  };
  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'app/components/contact/contact.view.htm',
    controller: 'ContactController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'contact'
    }
  };
  var managementState = {
    name: 'management',
    url: '/management',
    templateUrl: 'app/components/management/management.view.htm',
    controller: 'ManagementController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'management'
    }
  };
  var propertyValuationState = {
    name: 'property-valuation',
    url: '/property-valuation',
    templateUrl: 'app/components/property-valuation/property-valuation.view.htm',
    controller: 'PropertyValuationController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'property-valuation'
    }
  };
  var propertyAlertsState = {
    name: 'property-alerts',
    url: '/property-alerts',
    templateUrl: 'app/components/property-alerts/property-alerts.view.htm',
    controller: 'PropertyAlertsController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'property-alerts'
    }
  };
  var reviewState = {
    name: 'reviews',
    url: '/reviews',
    templateUrl: 'app/components/reviews/reviews.view.htm',
    controller: 'ReviewsController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'reviews'
    }
  };

  var termsState = {
    name: 'terms',
    url: '/terms-and-conditions',
    templateUrl: 'app/components/terms/terms.view.htm',
    controller: 'TermsController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'terms'
    }
  };
  var privacyState = {
    name: 'privacy',
    url: '/privacy-policy',
    templateUrl: 'app/components/privacy/privacy.view.htm',
    controller: 'PrivacyController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'privacy'
    }
  };
  var cookiesState = {
    name: 'cookies',
    url: '/cookies',
    templateUrl: 'app/components/cookies/cookies.view.htm',
    controller: 'CookiesController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'cookies'
    }
  };

  var propertyState = {
    name: 'property',
    url: '/property/:id',
    templateUrl: 'app/components/property/property.view.htm',
    controller: 'PropertyController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'property'
    }
  };
  var wishlistState = {
    name: 'wishlist',
    url: '/wishlit',
    templateUrl: 'app/components/wishlist/wishlist.view.htm',
    controller: 'WishlistController',
    controllerAs: 'vm',
    data : {
      cssClassnames : 'wishlist'
    }
  };
  var blockState = {
    name: 'block-management',
    url: '/block-management',
    templateUrl: 'app/components/block-management/block-management.view.htm',
    data : {
      cssClassnames : 'block-management'
    }
  };
  $stateProvider.state(blockState);
  $stateProvider.state(homeState);
  $stateProvider.state(salesState);
  $stateProvider.state(lettingsState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contactState);
  $stateProvider.state(propertyValuationState);
  $stateProvider.state(propertyAlertsState);
  $stateProvider.state(reviewState);
  $stateProvider.state(termsState);
  $stateProvider.state(privacyState);
  $stateProvider.state(cookiesState);
  $stateProvider.state(propertyState);
  $stateProvider.state(managementState);

  $locationProvider.html5Mode(true);
};
