TermsController.$inject = ['PageService'];
function TermsController(PageService) {

  var vm = this;

  vm.getPage = getPage;
  // Init
  (function initController() {
    vm.getPage();
  });

  function getPage() {
    vm.page = PageService.GetPage('terms');
    console.log('page', vm.page);
  }
};
