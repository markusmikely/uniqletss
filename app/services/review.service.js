ReviewService.$inject = [];
function ReviewService() {
  var review = {};

  review.GetReviews = GetReviews;
  review.WriteReviews = WriteReviews;

  return review;

  function GetReviews() {
    var url = '';

    ApiService.Get(url).then(function(response) {

    });
  };
  function WriteReviews(review) {
    var url = '';
    var data = '';

    ApiService.Post(url, data).then(function(response) {

    });
  };
};
