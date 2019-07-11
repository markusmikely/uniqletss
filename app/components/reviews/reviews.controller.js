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
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 2,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 5,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 3,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 1,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 5,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 4,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 2,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 4,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 4,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 5,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 1,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 2,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 5,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 4,
    }, {
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 5,
    },{
      'username': 'John Doe',
      'date': '18/10/1984',
      'review': 'I have been contacting letting agents in Camden and was aware it would be difficult to find a property that allows pets. I had experienced rude letting agents in other businesses when I mentioned dog friendly property so was nervous calling up Foxtons in case the response was the same. Narada took the call when I phoned and was extremely professional, unbiased and non-judgemental, he made me aware that flats with dogs are few and far between but was extremely helpful and made me feel at ease. He deserves to be commended for his great customer service and going above and beyond, explaining things clearly and trying his best to help me out. Although I am still in the very early stages of looking for a property, this experience gave me confidence that there may be a chance I can get the property I am looking for with the help of Foxtons.',
      'rating': 3,
    }];
  }
};
