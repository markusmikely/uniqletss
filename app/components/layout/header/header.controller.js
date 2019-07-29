HeaderController.$inject = ['$state'];
function HeaderController($state) {

  var vm = this;

  vm.state = $state;
  vm.menu = false;
  vm.toggleMenu =  toggleMenu;

  // Init
  (function initController() {
    vm.menu = false;
  });

  function toggleMenu() {
    vm.menu = !vm.menu;
  }
};
