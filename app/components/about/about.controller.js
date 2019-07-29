AboutController.$inject = ['PageService'];
function AboutController(PageService) {

  var vm = this;

  vm.getPage = getPage;
  // Init
  (function initController() {
    vm.getPage();
  });

  function getPage() {
    vm.page = 'About';
    console.log('page', vm.page);
  }
};
