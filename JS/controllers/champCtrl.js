angular.module('league').controller('champCtrl', function($scope, champServ){

champServ.getChampData().then(function(response){
  $scope.champ = response;
  console.log(response);
})


})
