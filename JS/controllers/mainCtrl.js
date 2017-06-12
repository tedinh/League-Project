angular.module('league').controller('mainCtrl', function($scope, mainServ){

mainServ.getFeatData().then(function(response){
  $scope.features = response;

})



})
