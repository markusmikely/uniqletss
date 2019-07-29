WishlistController.$inject = ['WishlistService', '$rootScope', 'ContactService'];
function WishlistController(WishlistService, $rootScope, ContactService) {

  var vm = this;

  vm.getWishlistItems = getWishlistItems;
  vm.sendMessage = sendMessage;
  vm.initForm = initForm;
  // Init
  (function initController() {
    vm.getWishlistItems();
    vm.message= "";
    vm.initForm();
  });
  function sendMessage(form) {
    vm.dataLoading = true;
    // vm.message= "";

    vm.contact.message = '<h3>New Viewing Request</h3><p><b>Occupation:</b> '+vm.contact.occupation+'</p><p><b>No. of People:</b> '+vm.contact.people+'</p><p><b>Viewing Date:</b> '+vm.contact.viewing+'</p><p><b>Move In Date:</b> '+vm.contact.move+'</p>';

    ContactService.SendMessage(vm.contact).then(function(response) {
      vm.dataLoading = false;
      console.log('Response', response);
      vm.message = response.data;
      vm.showMessage = true;
      vm.initForm();
      form.$setUntouched();
    });
  }
  function getWishlistItems() {
    console.log('wishlist', $rootScope.wishlist);
  }
  function initForm() {
    vm.contact = {
      'name':'',
      'email':'',
      'phone':'',
      'occupation':'',
      'people':1,
      'viewing': '',
      'move':'',
      'message':'',
      'source':'Website',
      'mailing':'no',
      'marketing':'no',
    };
  }
};
