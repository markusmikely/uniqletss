HomeController.$inject = ['PageService', 'PropertyService',  'WishlistService','$mdDialog'];
function HomeController(PageService, PropertyService, WishlistService, $mdDialog) {

  var vm = this;

  vm.initFilter = initFilter;
  vm.getHome = getHome;
  vm.search = search;
  vm.toggleWishlist = toggleWishlist;
  vm.inWishlist = inWishlist;

  // Init
  (function initController() {
    vm.getHome();
    vm.initFilter();
  })();

  function initFilter() {
    vm.sales = {
      'type':'sales',
      'location':undefined,
      'distance': 1,
      'min_price':0,
      'max_price':100,
      'min_beds':1
    };
    vm.lettings = {
      'type':'lettings',
      'location':undefined,
      'distance': 1,
      'min_price':0,
      'max_price':100,
      'min_beds':1
    }
    vm.filter = {
      'options': {
        'type': [
          {
            'label':'Sales',
            'value':'sales'
          }, {
            'label':'Lettings',
            'value':'lettings'
          }
        ],
        'miles': {
          "1": "1 mile",
          "5": "5 miles",
          "10": "10 miles",
          "25": "25 miles",
          "50": "50 miles",
          "100": "100 miles+"
        },
        "beds": {
          "1":"1",
          "2":"2",
          "3":"3",
          "4":"4",
          "5":"5",
          "6":"6",
          "7":"7",
          "8":"8",
          "9":"9",
          "10+":"10+"
        }
      }
    };
  };
  function getHome() {
    vm.loading = true;
    PageService.GetPage('home').then(function(response) {
      vm.home = response;
      vm.features = vm.home.features.lettings;
      for(var i = 0; i < vm.home.features.sales.length - 1; i++) {
        vm.inWishlist(vm.home.features.sales[i]);
      }
      for(var i = 0; i < vm.home.features.lettings.length - 1; i++) {
        vm.inWishlist(vm.home.features.sales[i]);
      }
      vm.loading = false;
    });
    // vm.home = PageService.GetPage('home').then(respins);
  };
  function search(filters) {
    PropertyService.Search(filters);
  }
  function toggleWishlist(ev, property) {
    if(property.inWishlist) {
      WishlistService.RemoveFromWishList(property);
      property.inWishlist = false;
    } else {
      WishlistService.AddToWishList(property);
      property.inWishlist = true;
    }
    $mdDialog.show({
      controller: WishlistController,
      templateUrl: 'app/components/wishlist/wishlist.view.htm',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      vm.status = 'You said the information was "' + answer + '".';
    }, function() {
      vm.status = 'You cancelled the dialog.';
    });
  }
  function inWishlist(property) {
    // property.inWishlist = WishlistService.InWishlist(property);
  }
};
