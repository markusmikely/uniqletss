HeaderController.$inject = [];
function HeaderController() {

  var vm = this;

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
