PageService.$inject = ['ApiService', '$rootScope'];
function PageService(ApiService, $rootScope) {

  var page = {};

  page.GetPage = GetPage;

  return page;

  function GetPage(page) {

    switch(page) {
      case 'home':
        var url = $rootScope.api+'page/?page=home';
        return ApiService.Get(url).then(function(response) {
          var result = response.data;

          console.log('results home', result);

          return result;
        });
      break;
      case 'about':
        var result = {
          'title': 'About',
          'html': 'Content',
        };
        break;
      case 'terms':
        var result = {
          'title': 'Terms & Conditions',
          'html': 'Content',
        };
        break;
      case 'privacy':
        var result = {
          'title': 'Privacy Policy',
          'html': 'Content',
        };
        break;
      case 'cookies':
        var result = {
          'title': 'Cookies Policy',
          'html': 'Content',
        };
        break;
      default:
        var result = {
          'title': '404 Page Not Found',
          'html': 'The requested page could not be fpund. please try again',
        };
        break;
    }
    return result;
  };
};
