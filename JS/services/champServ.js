angular.module("league").service("champServ", function($http) {
  this.getChampData = function() {
    return $http
      .get(
        "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-02408561-a872-4317-a707-d4d62ea341cc"
      )
      .then(function(result) {
        var arr = [];

        for (var key in result.data.data) {
          arr.push(result.data.data[key]);
        }
        console.log(arr);
        return arr;
      });
  };
});
