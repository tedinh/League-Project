angular.module('league').service('sumServ', function($http) {

      this.getSumData = function(summonerName) {
        return $http.get("https://na1.api.riotgames.com/lol/summoners/v3/summoners/by-name/" + summonerName + "?api_key=RGAPI-1559633c-3399-42ef-ad5f-3aaa45f185af").then(function(response) {
          var idNum = response.data.id;
          return response.data.id;
        })
        .then(function(idNum){
          return $http.get("https://na.api.riotgames.com/api/lol/NA/v1.3/stats/by-summoner/" + idNum + "/summary?season=SEASON2017&api_key=RGAPI-1559633c-3399-42ef-ad5f-3aaa45f185af")
          .then(function(response){
            var sumArr = response.data.playerStatSummaries.map(function(cur, ind, arr){
              return Object.assign({playerStatSummaryType: cur.playerStatSummaryType, wins: cur.wins}, cur.aggregatedStats )
            })
            // console.log(sumArr);

            // var sumArray = [];
            //
            // for(var i = 0; i < sumObj.length; i++){
            //   var sumNewObj = {
            //     gameType: sumObj[i].playerStatSummaryType,
            //     wins: sumObj[i].wins,
            //     aggregatedStats: sumObj[i].aggregatedStats.map(function(stats){
            //      var stats = {
            //         totalChampsKilled: aggregatedStats[i].totalChampionKills,
            //         totalAssists: aggregatedStats[i].totalAssists,
            //         totalTurretsKilled: aggregatedStats[i].totalTurretsKilled
            //       }
            //     })
            //   }
            //   sumArray.push(sumNewObj);
            // }
            // console.log(sumArray)
          return sumArr;
          })
        })
      }
      })
