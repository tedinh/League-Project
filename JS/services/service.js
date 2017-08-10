angular.module("league").service("mainServ", function($http) {
  this.getFeatData = function() {
    return $http
      .get(
        "https://euw1.api.riotgames.com/lol/spectator/v3/featured-games?api_key=RGAPI-02408561-a872-4317-a707-d4d62ea341cc"
      )
      .then(function(response) {
        console.log(response.data.gameList);
        var gameMode = response.data.gameList;
        var tempArray = [];

        for (var i = 0; i < gameMode.length; i++) {
          var tempObj = {
            gameMode: gameMode[i].gameMode,
            participants: gameMode[i].participants.map(function(participant) {
              return participant.summonerName;
            })
          };
          tempArray.push(tempObj);
        }
        console.log(tempArray);
        return tempArray;
      });
  };
});
