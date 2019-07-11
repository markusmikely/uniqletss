CookiesController.$inject = ['PageService'];
function CookiesController(PageService) {

  var vm = this;

  vm.getPage = getPage;
  // Init
  (function initController() {
    vm.getPage();
  });

  function getPage() {
    vm.page = PageService.GetPage('cookies');
    console.log('page', vm.page);
  }
};
