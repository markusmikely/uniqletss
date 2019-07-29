ReviewsController.$inject = [];
function ReviewsController() {

  var vm = this;

  vm.getReviews = getReviews;

  // Init
  (function initController() {
    vm.getReviews();
  })();

  function getReviews() {
    vm.reviews = [{
      'username': 'Virag Lorincz',
      'date': '2 months ago',
      'review': 'Excellent service reasonably priced. Cut out ‘The middle man’<br>As landlords we have used Uniqletts agents since we first started in 2012. We have never been disappointed with their service, always excellent and great value for money. Like that there is a choice of how much you want them to do, can chose from basic to gold standard depending on how much you want to pay.',
      'rating': 5,
    },{
      'username': 'MD MUKTAR ALI',
      'date': '2 months ago',
      'review': 'Great Service at a very low cost<br>Very cheap alternative to brick and online estate agents. Easy to use. Staff friendly and helpful. Requests dealt with promptly and pleasantly. Excellent service. I would recommend to anyone and use again without hesitation.',
      'rating': 5,
    }, {
      'username': 'Markus Mikely',
      'date': '6 months ago',
      'review': 'Friendly and welcoming staff, with great local knowledge and property expertise. They were very quick and efficient with my property needs. Uniqletts helped moving home be a smooth and easy experience. Will be definitely recommending them to friends and family',
      'rating': 3,
    }];
  }
};
