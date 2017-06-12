angular.module("league", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/")
  $stateProvider
  .state('home', {
    url:"/",
    templateUrl:"Views/home.html",
    controller: "mainCtrl"
  })
  .state('summoner',{
    url: "/summonerView",
    templateUrl: "Views/sumView.html",
    controller: "sumCtrl"
  })
  .state('champion',{
    url: "/champion",
    templateUrl: "Views/champView.html",
    controller: "champCtrl"
  })
})
