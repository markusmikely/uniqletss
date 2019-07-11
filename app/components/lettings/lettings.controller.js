LettingsController.$inject = ['PropertyService', '$stateParams', '$mdDialog','WishlistService'];
function LettingsController(PropertyService, $stateParams, $mdDialog, WishlistService) {

  var vm = this;

  vm.loading = true;
  vm.getLettings = getLettings;
  vm.search = search;
  vm.getQueryString = getQueryString;
  vm.activate = activate;
  vm.toggleWishlist = toggleWishlist;
  vm.filter = {};

  vm.processFilters = processFilters;
  // Init
  (function initController() {
    vm.filter = $stateParams.filters;

    vm.properties = [];
    vm.data = [];
    vm.pager =  {
        page: 1,
        take: 10,
        maxSize: 11,
        activate: activate
    };
    vm.getLettings(vm.processFilters());
  })();

  function processFilters() {
    if(vm.filter) {
      return {
        'longtitude': (vm.filter.location) ? vm.filter.location.lng : undefined,
        'latitude': (vm.filter.location) ? vm.filter.location.lat : undefined,
        'distance': (vm.filter.distance) ? vm.filter.distance : undefined,
        'min_price': (vm.filter.min_price) ? vm.filter.min_price : undefined,
        'max_price': (vm.filter.max_price) ? vm.filter.max_price : undefined,
        'property_type': (vm.filter.property_type) ? vm.filter.property_type : undefined,
        'type': 'lettings',
        'bedrooms': (vm.filter.min_beds) ? vm.filter.min_beds : 0,
      }
    } else {
      return {
        'type': 'lettings'
      };
    }
  }
  function getLettings(filters) {
    vm.loading = true;

    var queryString = this.getQueryString(filters);

    PropertyService.GetListings(queryString).then(function(response) {
      vm.data = response.data;
      vm.loading = false;
    });
  }
  function toggleWishlist(ev, property) {
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
  function getQueryString(filters) {

    if(filters) {
      var queryString = '?';
      for (var property in filters) {
          if (filters.hasOwnProperty(property)) {
              queryString += (queryString == '?') ? property+'='+filters[property] : '&'+property+'='+filters[property];
          }
      }
    } else {
      queryString = '?type=lettings';
    }

    return queryString;
  }
  function search() {
    var filters = {
      'longtitude': vm.filter.location.lng,
      'latitude': vm.filter.location.lat,
      'distance': vm.filter.distance,
      'min_price': vm.filter.price.min,
      'max_price': vm.filter.price.max,
      'property_type': vm.filter.property_type,
      'type': 'lettings',
      'bedrooms': vm.filter.rooms,
    }
    this.getLettings(filters);
  }
  function activate(page, take) {
    vm.pager.page = page;
    vm.properties = [];
    for (var i = (page - 1) * take; i < page * take; i++) {
      if(vm.data[i]) {
        vm.properties.push(vm.data[i]);
      }
    }
  }
};
