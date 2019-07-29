(function () {
    'use strict';
    angular
        .module('uniqlettsApp', ['ng-pagination', 'ui.router', 'ipCookie', 'ng-responsive-image', 'ngMaterial', 'ngMessages', 'ngPicturefill', 'ngAutocomplete'])
        .config(config)
        .run(run)
        .factory('PageService', PageService)
        .factory('ApiService', ApiService)
        .factory('ContactService', ContactService)
        .factory('PropertyService', PropertyService)
        .factory('ReviewService', ReviewService)
        .factory('WishlistService', WishlistService)
        .controller('HeaderController', HeaderController)
        .controller('HomeController', HomeController)
        .controller('SalesController', SalesController)
        .controller('LettingsController', LettingsController)
        .controller('AboutController', AboutController)
        .controller('TermsController', TermsController)
        .controller('PrivacyController', PrivacyController)
        .controller('CookiesController', CookiesController)
        .controller('ContactController', ContactController)
        .controller('WishlistController', WishlistController)
        .controller('PropertyValuationController', PropertyValuationController)
        .controller('PropertyAlertsController', PropertyAlertsController)
        .controller('ReviewsController', ReviewsController)
        .controller('PropertyController', PropertyController)
        .controller('ManagementController', ManagementController)
        .filter('unsafe', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        });
      })();
