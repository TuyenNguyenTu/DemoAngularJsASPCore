var myApp = angular.module("scopeDemo", []);
myApp.controller("myController", MyController);
myApp.controller("yourController", YourController);
myApp.controller("mainController", MainController);
//nested Controller
function MyController($scope, $rootScope) {
   // $rootScope.name = "This is application value"

};
//nested Controller
function YourController($scope, $rootScope) {
    $scope.name ="nested Controller YourController"
}
//controller envelop
function MainController($scope, $rootScope) {
    $scope.name = "This is application value";
}