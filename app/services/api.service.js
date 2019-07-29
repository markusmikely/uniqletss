ApiService.$inject = ['$http'];
function ApiService($http) {

    var api = {};

    api.Post = Post;
    api.Get = Get;
    api.Patch = Patch;

    return api;

    function Post(url, data) {

    };
    function Get(url) {
      return $http.get(url).then(function(response) {
        if(response.status == 200) {
          return response.data;
        }
      });
    };
    function Patch(url, data) {

    };

};
