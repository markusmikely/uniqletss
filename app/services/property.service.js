PropertyService.$inject = ['ApiService', '$state'];
function PropertyService(ApiService, $state) {

    var property = {};

    property.GetListings = GetListings;
    property.GetProperty = GetProperty;
    property.Search = Search;
    property.FilterListing = FilterListing;

    return property;

    function GetListings(queryString) {
      var url = 'http://localhost/uniqletss/api/web/api/property/'+queryString;
      return ApiService.Get(url);
    };
    function GetProperty(property_id) {
      var url = 'http://localhost/uniqletss/api/web/api/property/?id='+property_id;
      return ApiService.Get(url);
    };
    function Search(filters) {
      $state.go(filters.type, {filters:filters});
    }
    function FilterListing(filters) {
      var url = 'http://localhost/uniqletss/api/web/api/property/?longtitude='+filters.longitude+'&latitude='+filters.latitude+'&distance='+filters.distance+'&min_price='+filters.min_price+'&max_price='+filters.max_price+'&bedrooms='+filters.bedrooms+'&property_type='+filters.property_type+'&type='+filters.type;
      return ApiService.Get(url);
    }
};
