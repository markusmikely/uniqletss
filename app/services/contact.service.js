ContactService.$inject = ['ApiService'];
function ContactService(ApiService) {

    var contact = {};

    contact.SendMessage = SendMessage;

    return contact;

    function SendMessage(contact) {

      var queryString = '?name='+contact.name+'&email='+contact.email+'&phone='+contact.phone+'&message='+contact.message+'&mailing='+contact.mailing+'&marketing='+contact.marketing;

      var url = 'http://www.uniqletts.com/api/web/api/contact/'+queryString;

      return ApiService.Get(url);
    };

};
