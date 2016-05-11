// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ngCordova','ionic','ionic.service.core', 'starter.controllers', 'starter.services','ui.router','firebase','ionic.service.core', 'ionic.service.push'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }




    var push = new Ionic.Push({
      "debug": true,
      "onNotification": function(notification) {
      var payload = notification.payload;
        console.log(notification, payload);
      },
      "onRegister": function(data) {
        console.log(data.token);
      }
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {



  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  //$stateProvider


  // setup an abstract state for the tabs directive
  //  .state('tab', {
  //  url: '/tab',
  //  abstract: true,
  //  templateUrl: 'templates/tabs.html'
  //})
  //








  // Each tab has its own nav history stack:
  //
  //.state('tab.dash', {
  //  url: '/dash',
  //  views: {
  //    'tab-dash': {
  //      templateUrl: 'templates/tab-home.html',
  //      controller: 'HomeCtrl'
  //    }
  //  }
  //})
  //

  //  .state('tab.chat-detail', {
  //    url: '/chats/:chatId',
  //    views: {
  //      'tab-chats': {
  //        templateUrl: 'templates/chat-detail.html',
  //        controller: 'ChatDetailCtrl'
  //      }
  //    }
  //  })
  //
  //
  //  .state('tab.home', {
  //    url: '/dash',
  //    views: {
  //      'tab-account': {
  //        templateUrl: 'templates/tab-dash.html',
  //        controller: 'DashCtrl'
  //      }
  //    }
  //  })
  //  .state('tab.referals', {
  //    url: '/referals',
  //    views: {
  //      'tab-referals': {
  //        templateUrl: 'templates/tab-referals.html',
  //        controller: 'ReferalsCtrl'
  //      }
  //    }
  //  })
  //  .state('tab.referals-detail', {
  //    url: '/referals/:referalId',
  //    views: {
  //      'tab-referals': {
  //        templateUrl: 'templates/referal-detail.html',
  //        controller: 'ReferalsDetailCtrl'
  //      }
  //    }
  //  })
  //
  //  .state('tab.brands', {
  //    url: '/brands',
  //    views: {
  //      'tab-chats': {
  //        templateUrl: 'templates/tab-brands.html',
  //        controller: 'BrandsCtrl'
  //      }
  //    }
  //  })
  //  .state('tab.brands-detail', {
  //    url: '/brands/:brandsId',
  //    views: {
  //      'tab-chats': {
  //        templateUrl: 'templates/brand-detail.html',
  //        controller: 'BrandDetailCtrl'
  //      }
  //    }
  //  })
  /// setup an abstract state for the tabs directive
  //      .state('tab', {
  //      url: '/tab',
  //      abstract: true,
  //      templateUrl: 'templates/tabs.html'
  //    })
  //  .state('tab.chats', {
  //      url: '/chats',
  //      views: {
  //        'tab-chats': {
  //          templateUrl: 'templates/tab-chats.html',
  //          controller: 'ChatsCtrl'
  //        }
  //      }
  //    })

  //
  //  .state('photo', {
  //    url: '/photo',
  //    views: {
  //      'tab-account': {
  //        templateUrl: '/templates/tab-photo.html',
  //       // controller: 'PhotoCtrl'
  //      }
  //    }


    $stateProvider
      .state('tabs', {
        url: "/tabs",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "templates/tab-home.html",
            controller: 'HomeCtrl'
          }
        }
      })
     .state('tabs.login', {
        url: '/login',

        views: {
          'login-tab': {
            templateUrl: "templates/tab-dash.html",
            controller: 'DashCtrl'
          }
        }
      })
      .state('tabs.photo', {
        url: '/photo',
        views: {
          'photo-tab': {
            templateUrl: "templates/tab-photo.html",
            controller: 'PhotoCtrl'
          }
        }
     })
      .state('tabs.send', {
        url: '/send',
        views: {
          'photo-tab': {
            templateUrl: "templates/tab-send.html",
            //controller: 'PhotoCtrl'
          }
        }
      })
      .state('tabs.needs', {
        url: '/needs',
        views: {
          'home-tab': {
            templateUrl: "templates/tab-needs.html",
            controller: 'NeedsCtrl'
          }
        }
      })
      .state('tabs.explore', {
          url: '/explore/',
          views: {
            'tab-explore': {
              templateUrl: 'templates/tab-explore.html',
              controller: 'ExploreCtrl'
            }
          }
        })
      .state('tabs.explore-detail', {
        url: '/explore/:chatId',
        views: {
          'tab-explore': {
            templateUrl: 'templates/chat-detail.html',
             controller: 'ExploreDetailCtrl'
          }
        }
     })
      .state('tabs.play', {
        url: '/play',
        views: {
          'home-tab': {
            templateUrl: "templates/tab-play.html",
            controller: 'PlayCtrl'
          }
        }
      })
      //.state('tabs.facts', {
      //  url: "/facts",
      //  views: {
      //    'home-tab': {
      //      templateUrl: "templates/facts.html"
      //    }
      //  }
      //})
      //.state('tabs.facts2', {
      //  url: "/facts2",
      //  views: {
      //    'home-tab': {
      //      templateUrl: "templates/facts2.html"
      //    }
      //  }
      //})
      //.state('tabs.about', {
      //  url: "/about",
      //  views: {
      //    'about-tab': {
      //      templateUrl: "templates/about.html"
      //    }
      //  }
      //})
      //.state('tabs.navstack', {
      //  url: "/navstack",
      //  views: {
      //    'about-tab': {
      //      templateUrl: "templates/nav-stack.html"
      //    }
      //  }
      //})
      //.state('tabs.contact', {
      //  url: "/contact",
      //  views: {
      //    'contact-tab': {
      //      templateUrl: "templates/contact.html"
      //    }
      //  }
      //});


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/home');

});
