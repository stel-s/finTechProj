


var ref = new Firebase("https://referra.firebaseio.com/");
fb = ref;
/**
 * @param {string} emailAddress
 * @return {Object} the object contains zero or more user records, the keys are the users' ids
 */
function findUsersMatchingEmail( emailAddress, callback ) {
  fb.child('user').orderByChild('emailAddress').equalTo(emailAddress).once('value', function(snap) {
    callback( snap.val() );
  });
}
/**
 * Creates a new user record and also updates the index
 */
function createNewUser( userRecord ) {
  var uid = fb.child('user').push().key();

  // do a multi-path write!
  var mergedData = {};
  mergedData['users/' + uid] = userRecord;
  mergedData['emails_to_ids/'+emailToKey(userRecord.email)] = uid;
  fb.update(mergedData);

  return id;
}

/**
 * Firebase keys cannot have a period (.) in them, so this converts the emails to valid keys
 */
function emailToKey(emailAddress) {
  return emailAddress.replace(/[.]/g, '%20');
}



angular.module('starter.controllers', [])

.controller('DashCtrl',function($scope, $state,$rootScope,$ionicModal,$firebaseArray,$ionicPush , $ionicSlideBoxDelegate) {
    var user = Ionic.User.current();

    if (user.isAuthenticated()) {
      // user is logged in
    } else {
      // user is NOT logged in
    }
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
    //var push = new Ionic.Push();
    //var user = Ionic.User.current();
    //
    //var callback = function(pushToken) {
    //  console.log('Registered token:', pushToken.token);
    //  user.addPushToken(pushToken);
    //  user.save(); // you NEED to call a save after you add the token
    //}
    //
    //push.register(callback);


    //$ionicPush.init({
    //  "debug": true,
    //  "onNotification": function(notification) {
    //    var payload = notification.payload;
    //    console.log(notification, payload);
    //  },
    //  "onRegister": function(data) {
    //    console.log(data.token);
    //  },
    //  "pluginConfig": {
    //    "ios": {
    //      "badge": true,
    //      "sound": true
    //    },
    //    "android": {
    //      "iconColor": "#343434"
    //    }
    //  }
    //});
    //$ionicPush.register();

    $scope.data = $firebaseArray(ref);
    // The obj variable will appear to be empty here and won't contain any remote data,
    // because the request to the server has not returned when we reach this line.
    console.log($scope.data);
    var user = Ionic.User.current()
    console.log(user.data.details)
    var myData = {
      user:{
        "$user" : {
          userId:11212,
          myReferralsCategories : [{id:12,name:"Technology",brands:['nokia','sony']}],
          myRefferals:[{id:1,categoryId:12,contact:"",discount:12}]
        }
      }

    }
    $scope.data.$add(myData);
    $scope.data.$save();

    $scope.logindetails = {
      email : "",
      password : ""
    }
    if(Ionic.User.current()){
      //$state.go('tab.home');
    }
    var authSuccess = function(user) {
      // user was authenticated, you can get the authenticated user
      // with
      $ionicModal.fromTemplateUrl('templates/modal-signup.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal1 = modal;
        $scope.modal1.show();
      });

      console.log("fff")
      $state.go('tabs.home')
    };
    var authFailure = function(errors) {
      for (var err in errors) {
        console.log(err);
        // check the error and provide an appropriate message
        // for your application
      }
    };
  $scope.loginClick = function () {
   var authProvider = 'basic';
   var authSettings = { 'remember': true };
   var loginDetails = {
      'email': $scope.logindetails.email,
      'password': $scope.logindetails.password
    };

    Ionic.Auth.login(authProvider, authSettings, loginDetails)
      .then(authSuccess, authFailure);
  };
    $scope.signUpModal = function () {
      var details = {
        'email': $scope.userInput.email,
        'password': $scope.userInput.password
      };
      var signupSuccess = function(user) {
        // user was authenticated, you can get the authenticated user
        // with Ionic.User.current();
      };
      var signupFailure = function(errors) {
        for (var err in errors) {
          // check the error and provide an appropriate message
          // for your application
        }
      };
      // optionally pass a username
      // details.username = 'ionitron';
      Ionic.Auth.signup(details).then(signupSuccess, signupSuccess);
    }
    $scope.userInput = {
      email:"",
      password: ""
    }
    $scope.signUp = function () {
     $ionicModal.fromTemplateUrl('templates/modal-signup.html', {
       scope: $scope,
       animation: 'slide-in-up'
     }).then(function(modal) {
       $scope.modal1 = modal;
       $scope.modal1.show();
     });

   }







})
  .controller('ChatsCtrl', function($scope, Categories) {
    $scope.chats = Categories.getAll();
    $scope.referals = Categories.getReferals();
    console.log("df")

  })
.controller('PhotoCtrl', function($scope, Categories,$ionicModal,$rootScope) {
  //// With the new view caching in Ionic, Controllers are only called
  //// when they are recreated or on app start, instead of every page change.
  //// To listen for when this page is active (for example, to refresh data),
  //// listen for the $ionicView.enter event:
  ////
  $scope.$on('$ionicView.enter', function(e) {
    console.log("df")
  });


    var s = $scope.getPhoto = function (e) {
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
    $rootScope.getPhoto = s;
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


  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Categories) {
  $scope.referals = Categories.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
    console.log($scope.referals)
})

.controller('HomeCtrl', function($scope, $stateParams, Categories,$state,$window) {

    //var interval = null;
    //$scope.pollData = [];
    //$scope.remainingTime = 0;
    //$scope.$watch("currentPolls", function (n, o) {
    //  if (n != o) {
    //    $scope.$evalAsync(function () {
    //      _.forEach($scope.currentPolls, function (i) {
    //        var interval = $interval(function () {
    //          if (i.remainingTime <= 0) {
    //            $interval.cancel(intervals[intervals.indexOf(interval)]);
    //          }
    //          i.remainingTime -= 100;
    //        }, 100)
    //        intervals.push(interval);
    //      });
    //    });
    //    console.log(intervals)
    //  }
    //})
  $scope.chat = Categories.get($stateParams.chatId);

    $scope.goTo = function (section) {
      $state.go('tabs.needs')

    }

})
.controller('ReferalsCtrl', function($scope, $stateParams, Referals) {

  //$scope.referals = Referals.all();


})
  .controller('NeedsCtrl', function($scope,Categories,$stateParams, Referals) {
    $scope.chats = Categories.getAll();
    $scope.referals = Categories.getReferals();
    console.log("df")
    //$scope.referals = Referals.all();


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
