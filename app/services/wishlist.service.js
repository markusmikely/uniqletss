WishlistService.$inject = ['ipCookie', '$rootScope'];
function WishlistService(ipCookie, $rootScope) {
  var wishlist = {};

  wishlist.AddToWishList = AddToWishList;
  wishlist.RemoveFromWishList = RemoveFromWishList;
  wishlist.InWishlist = InWishlist;
  wishlist.InitWishlist = InitWishlist;

  return wishlist;

  function InitWishlist() {

    var wishlist = ipCookie('uniqlets-wishlist');

    if(wishlist != undefined) {
      $rootScope.wishlist = ipCookie('uniqlets-wishlist').toString().split(',');
    } else {
      $rootScope.wishlist = [];
      ipCookie('uniqlets-wishlist', $rootScope.wishlist.toString());
    }
  }
  function AddToWishList(property) {

    if($rootScope.wishlist == undefined) {
      wishlist.InitWishlist();
    }
    if($rootScope.wishlist.indexOf(property.id == -1)) {
      $rootScope.wishlist.push(property.id);
    }

    ipCookie('uniqlets-wishlist', $rootScope.wishlist.toString());

  };
  function RemoveFromWishList(property) {

    if($rootScope.wishlist.indexOf(property.id) != -1) {
      $rootScope.wishlist.splice($rootScope.wishlist.indexOf(property.id), 1);
    }

    ipCookie('uniqlets-wishlist', wishlist.toString());
  };
  function InWishlist(property) {


    if(ipCookie('uniqlets-wishlist') != undefined) {
      var wishlist = ipCookie('uniqlets-wishlist').toString().split(',');
      console.log(property.id, wishlist);
      if(wishlist.indexOf(property.id) != -1) {
        return true;
      }
    }
    return false;
  }
};
