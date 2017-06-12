angular.module('league').service('champServ', function($http){

  this.getChampData = function(){
    return $http.get("https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=RGAPI-190c3364-af58-4499-a132-e2e70aef644f").then(function(result){

      var arr = [];

      for (var key in result.data.data){
        arr.push(result.data.data[key]);
      }
      console.log(arr);
      return arr;
    })
}


})
