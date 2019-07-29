PropertyController.$inject = ['PropertyService', '$stateParams'];
function PropertyController(PropertyService, $stateParams) {

  var vm = this;

  vm.getProperty = getProperty;

  console.log('oo');
  // Init
  (function initController() {
    console.log('params', $stateParams);

    vm.getProperty();
  })();

  function getProperty() {
    var id = $stateParams.id;
    PropertyService.GetProperty(id).then(function(response) {
      console.log('property',response.data[0]);
      vm.property = response.data[0];
    });
    vm.property = {
      'id':1,
      'title':'Property Title',
      'images': [],
      'description': '',
      'features': []
    };
    // PropertyService.getProperty('id')
  }
};
