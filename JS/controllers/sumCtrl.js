angular.module('league').controller('sumCtrl', function($scope, sumServ) {
  $scope.summit1g = {
    'background-color': 'blue',
    'display': 'none',
  }

  $scope.sumSearch = function(summonerName) {
    sumServ.getSumData(summonerName).then(function(response) {
      $scope.summonerData = response;
      console.log(response);
      for (var i = 0; i < response.length; ++i) {
        if (response[i].playerStatSummaryType === "RankedSolo5x5") {
          $scope.rankedsolo5s = response[i];
          $scope.summit1g = {
            'display': 'inline-block'
          }
        }
        if (response[i].playerStatSummaryType === "RankedFlexSR") {
          $scope.rankedFlexSR = response[i];
          $scope.summit1g = {
            'display': 'inline-block'
          }
        }
        if (response[i].playerStatSummaryType === "Unranked") {
          $scope.unRanked = response[i];
          $scope.summit1g = {
            'display': 'inline-block'
          }
        }
        if (response[i].playerStatSummaryType === "AramUnranked5x5") {
          $scope.aaram = response[i];
          $scope.summit1g = {
            'display': 'inline-block'
          }
        }
      }
    })
  }


})
