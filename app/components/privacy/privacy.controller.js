PrivacyController.$inject = ['PageService'];
function PrivacyController(PageService) {

  var vm = this;

  vm.getPage = getPage;
  // Init
  (function initController() {
    vm.getPage();
  });

  function getPage() {
    vm.page = PageService.GetPage('privacy');
    console.log('page', vm.page);
  }
};
