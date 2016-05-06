app.service("pollDataHttp", ["$http", function ($http) {

  return {
    getCurrentPolls: function (req) {
      return $http.post("api/referraApi/getCurrentPolls", req);
    },
    getMyFriendsPolls: function (req) {
      return $http.post("api/referraApi/getMyFriendsPolls", req);
    },
    getNeedDetails: function (req) {
      return $http.post("api/referraApi/getNeedDetails", req);
    },
    giveThumbsDown: function (req) {
      return $http.post("api/referraApi/giveThumbsDown", req);
    },
    giveThumbsUp: function (req) {
      return $http.post("api/referraApi/giveThumbsUp", req);
    },
    addToWishList: function (req) {
      return $http.post("api/referraApi/addToWishList", req);
    }
  };
}])
