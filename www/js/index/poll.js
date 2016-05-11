starter.directive("poll", [ "$interval", "$location",
  function ( $interval, $location) {
  return {
    scope: {
      pollData: "="
    },
    restrict: "EA",
    replace: false,
    templateUrl: "./js/index/poll.html",
    controller: ["$scope", pollCtrl]
  };
  //  <div class="row">
  //    <div  class="poll-image">
  //    <img  class="poll-image-dim" ng-src="{{display.imgUrl}}" />
  //    </div>
  //    <div class="poll-cta">
  //    <div class="poll-cta-owner">Vote {{display.owner}}'s poll</div>
  //  <div class="poll-cta-timer">
  //    <i class="icn timelapse pulse pull-left"></i>
  //    {{remainingTime}}
  //</div>
  //</div>
  //</div>

  function pollCtrl($scope) {

    var interval = null;
    $scope.pollData = [];
    $scope.remainingTime = 0;

    var data = [];


        var endDate = new Date();
        var startDate = new Date();
        endDate.setMinutes(startDate.getMinutes()+1);
        $scope.pollData = [{
          id:"1",
          owner: "Mark",
          startDate: startDate,
          endDate: endDate,
          remainingTime: 2,
          imgUrl: "../Content/tempImages/temp1.jpg"
        },
          {
            id: "2",
            owner: "Maria",
            startDate: new Date(),
            endDate: endDate,
            remainingTime: 3,
            imgUrl: "../Content/tempImages/temp2.jpg"
          }];

      $scope.remainingTime = 2;

    interval = $interval(function () {
      if ($scope.pollData && $scope.pollData.length > 0) {
        if ($scope.remainingTime <= 0 && data.length<=$scope.pollData.length) {
          var remainingData = _.difference($scope.pollData, data)
          if (remainingData.length == 0) {
            $interval.cancel(interval);
          }
          $scope.display = _.first(remainingData);
          data.push($scope.display);
          $scope.remainingTime = $scope.display.endDate - $scope.display.startDate;
        }
        $scope.remainingTime -= 100;
      }
    }, 100);

    $scope.goToPoll = function (pollId) {
      $location.url('/poll/' + pollId);
    }


    $scope.$watch("pollData", function (n, o) {
      if (n != o) {
        interval = $interval(function () {
          if ($scope.pollData && $scope.pollData.length > 0) {
            if ($scope.remainingTime <= 0 && data.length<=$scope.pollData.length) {
              var remainingData = _.difference($scope.pollData, data)
              if (remainingData.length == 0) {
                $interval.cancel(interval);
              }
              $scope.display = _.first(remainingData);
              data.push($scope.display);
              $scope.remainingTime = $scope.display.endDate - $scope.display.startDate;
            }
            $scope.remainingTime -= 100;
          }
        }, 100);
      }
    })
  }
}])
