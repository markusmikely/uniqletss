ContactController.$inject = ['ContactService'];
function ContactController(ContactService) {

  var vm = this;

  vm.sendMessage = sendMessage;
  vm.initContactForm = initContactForm;
  // Init
  (function initController() {
    vm.initContactForm();
  });

  function sendMessage(form) {
    vm.dataLoading = true;
    vm.message= "";
    ContactService.SendMessage(vm.contact).then(function(response) {
      vm.dataLoading = false;
      vm.message = response.data;
      vm.initContactForm();
      form.$setUntouched();
    });
  }
  function initContactForm() {
    vm.contact = {
      'name':'',
      'email':'',
      'phone':'',
      'message':'',
      'source':'Word of mouth',
      'mailing':'no',
      'marketing':'no',
    };
  }
};
