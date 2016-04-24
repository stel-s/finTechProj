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
    $state.go('tab.home');
    console.log("sdsds")
  };

})

.controller('ChatsCtrl', function($scope, Categories,$ionicModal) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    $scope.getPhoto = function (e) {
      if(!navigator.camera){
        $ionicModal.fromTemplateUrl('templates/modal-photo.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          console.log($scope.picture)
          $scope.modal = modal;
          $scope.modal.show();
        });
      }else {
        var options = {
          quality: 45,
          targetWidth: 200,
          targetHeight: 200,
          destinationType: Camera.DestinationType.DATA_URL,
          encodingType: Camera.EncodingType.JPEG,
          sourceType: Camera.PictureSourceType.CAMERA
        };
        navigator.camera.getPicture(function (imageData) {
          console.log(imageData);
          //$scope.picture = imageData;
          $scope.picture = "data:image/jpeg;base64," + imageData;
          $ionicModal.fromTemplateUrl('templates/modal-photo.html', {
            scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            console.log($scope.picture)
            $scope.modal = modal;
            $scope.modal.show();
          });
        }, function (message) {
          console.log("on fail" + message);
        }, options);

      }

      return false;

      $scope.openModal = function() {
        $scope.modal.show();
      };

      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
    };

    $scope.send = function () {
      $scope.modal.hide();
      $ionicModal.fromTemplateUrl('templates/modal-send.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        console.log($scope.picture)
        $scope.sendModal = modal;
        $scope.sendModal.show();
      });
    }
    $scope.searchToSendModalClose = function(form) {
      $scope.searchToSendModal.hide();


    };

    $scope.chats = Categories.getAll();
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
  .controller('BrandsCtrl', function($scope, Categories) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.brands = Categories.getAll();
    console.log($scope.brands);
    //$scope.referals = Categories.getReferals();
    //$scope.remove = function(chat) {
    //  Chats.remove(chat);
    //};
  })

  .controller('BrandDetailCtrl', function($scope, $stateParams, Brands) {
    $scope.brandDetail = Brands.get($stateParams.brandsId);
    console.log($scope.brandDetail)


  })
