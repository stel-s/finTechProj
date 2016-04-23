angular.module('starter.services', [])

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

   // Some fake testing data
  var refCategories = [{
      id: 0,
      name: 'Technology',
      referrals: 12,
      img: 'img/techonology.png',
      icons:"img/technology.jpg"
    },
    {
      id: 1,
      name: 'Food & Drinks',
      referrals: [{company:"Adiddas",picture:"img/Untitled.png",user:"1235465644"}],
      icons: 'img/food.png'
    }, {
      id: 2,
      name: 'Fashion',
      referrals: 1,
      icons: 'img/clothes.jpg'
    }, {
      id: 3,
      name: 'Travel',
      referrals: 0,
      icons: 'img/air.jpg'
    }, {
      id: 4,
      name: 'Cosmetics',
      referrals: 0,
      icons: 'img/insurance.jpg'
    }];

    var user = {
      referals: refCategories
    };


  //var product = [{
  //  id: 0,
  //  name: '',
  //  refMessage:'',
  //  price:10.0,
  //  discount: '10%',
  //  imag: 'img/ben.png',
  //  from: {
  //          name: 'Georgia',
  //          message: 'Hey Dimitri!...',
  //          imag: 'img/ben.png',
  //          referralCode:''
  //        },
  //},
  //{
  //  id: 1,
  //  name: '',
  //  refMessage:'',
  //  imag: 'img/max.png',
  //  from: {
  //      name: 'Georgia',
  //      message: 'Hey Dimitri!...',
  //      imag: 'img/ben.png',
  //      referralCode:''
  //  },
  //},
  //{
  //  id: 2,
  //  name: '',
  //  refMessage:'',
  //  imag: 'img/adam.jpg',
  //  from: {
  //      name: 'Georgia',
  //      message: 'Hey Dimitri!...',
  //      imag: 'img/ben.png',
  //      referralCode:''
  //    },
  //},
  //{
  //  id: 3,
  //  name: '',
  //  refMessage:'',
  //  imag: 'img/perry.png'
  //},
  //{
  //  id: 4,
  //  name: '',
  //  refMessage:'',
  //  imag: 'img/mike.png',
  //  from: {
  //      name: 'Georgia',
  //      message: 'Hey Dimitri!...',
  //      imag: 'img/ben.png',
  //      referralCode:''
  //    },
  //}];

  // Some fake testing data
  //var chats = [{
  //  id: 0,
  //  name: 'Ben Sparrow',
  //  lastText: 'You on your way?',
  //  face: 'img/ben.png'
  //}, {
  //  id: 1,
  //  name: 'Max Lynx',
  //  lastText: 'Hey, it\'s me',
  //  face: 'img/max.png'
  //}, {
  //  id: 2,
  //  name: 'Adam Bradleyson',
  //  lastText: 'I should buy a boat',
  //  face: 'img/adam.jpg'
  //}, {
  //  id: 3,
  //  name: 'Perry Governor',
  //  lastText: 'Look at my mukluks!',
  //  face: 'img/perry.png'
  //}, {
  //  id: 4,
  //  name: 'Mike Harrington',
  //  lastText: 'This is wicked good ice cream.',
  //  face: 'img/mike.png'
  //}];

  return {
    getReferals: function() {
      return user.referals;
    },
    all: function() {
      return refCategories;
    },
    remove: function(chat) {
      refCategories.splice(refCategories.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < refCategories.length; i++) {
        if (refCategories[i].id === parseInt(chatId)) {
          return refCategories[i];
        }
      }
      return null;
    }
  };
})

.factory('Referals',function(){
  var refCategories = [{
      id: 0,
      name: 'Technolodgy',
      referrals: 12,
      imag: 'img/ben.png'
    },
    {
      id: 1,
      name: 'Food & Drinks',
      referrals: 10,
      imag: 'img/max.png'
    }, {
      id: 2,
      name: 'Fashion',
      referrals: 1,
      imag: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Travel',
      referrals: 0,
      imag: 'img/perry.png'
    }, {
      id: 4,
      name: 'Cosmetics',
      referrals: 0,
      imag: 'img/mike.png'
    }];
    var user = {
      referals: refCategories
    };

  return {
    getReferals: function() {
      return user.referals;
    }
  }
})
