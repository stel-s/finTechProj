angular.module('starter.controllers', [])

.controller('DashCtrl',function($scope, $state,$auth) {
    //$scope.authenticate = function(provider) {
    //  $auth.authenticate(provider)
    //    .then(function() {
    //      $ionicPopup.alert({
    //        title: 'Success',
    //        content: 'You have successfully logged in!'
    //      })
    //    })
    //    .catch(function(response) {
    //      $ionicPopup.alert({
    //        title: 'Error',
    //        content: response.data ? response.data || response.data.message : response
    //      })
    //
    //    });
    //};
    //
    //
    //$scope.logout = function() {
    //  $auth.logout();
    //};
    //
    //$scope.isAuthenticated = function() {
    //  return $auth.isAuthenticated();
    //};
  $scope.loginClick = function () {
    $state.go('tab.chats');
    console.log("sdsds")
  };

})

.controller('ChatsCtrl', function($scope, Categories) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Categories.all();
  $scope.referals = Categories.getReferals();
  //$scope.remove = function(chat) {
  //  Chats.remove(chat);
  //};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Categories) {
  $scope.referals = Categories.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HomeCtrl', function($scope, $stateParams, Categories) {

  $scope.chat = Categories.get($stateParams.chatId);

})
.controller('ReferalsCtrl', function($scope, $stateParams, Referals) {

  //$scope.referals = Referals.all();
  console.log($scope.referals)

})
