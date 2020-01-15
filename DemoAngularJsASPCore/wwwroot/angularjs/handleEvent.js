var myApp = angular.module("handleEvent", []);
//myApp.controller("myController", MyController);
//MyController.$inject = ['$scope'];
//function MyController($scope) {

//};
myApp.controller('myController', ['$scope', function ($scope) {
    var listLanguage = [
        {Name:"C#",Like:11,DisLike:0},
        {Name:"Java",Like:10,DisLike:1},
        {Name:"Python",Like:21,DisLike:3},
        {Name:"F#",Like:8,DisLike:5},
        {Name:"Ruby",Like:11,DisLike:2},
        {Name:"AngularJs",Like:13,DisLike:2}
    ]
    $scope.techLang = listLanguage;
    $scope.IncreaseLike = function (tech) {
        tech.Like++;
    }
    $scope.IncreaseDisLike = function (tech) {
        tech.DisLike++;
    }
}]);