ManagementController.$inject = ['$stateParams'];
function ManagementController($stateParams) {

  var vm = this;

  vm.getLettings = getLettings;
  // Init
  (function initController() {
    vm.getLettings();
  });

  function getLettings() {
    // PropertyService.GetProperties($stateParams.filters).then(function(response) {
    //   vm.properties = response;
    // }, function(error) {
    //   vm.error = error;
    // });
  }
};
