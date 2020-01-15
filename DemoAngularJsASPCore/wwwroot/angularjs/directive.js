var myApp = angular.module("MyApp", []);
myApp.controller("myController", MyController);
function MyController($scope,$http) {
    $scope.name = "Xin Chao";
};

//define directive
myApp.directive("welcomeText", function () {
    var html = "<h1>This is my define Directive </h1>";
    return {
        restrict:'A',
        template: html,
       // templateUrl: "/test.html",
    }
});

//'A' - <span ng-sparkline></span>
//'E' - <ng-sparkline></ng-sparkline>
//'C' - <span class="ng-sparkline"></span>
//'M' - < !--directive: ng - sparkline-- >