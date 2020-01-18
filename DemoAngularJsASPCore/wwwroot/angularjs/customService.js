var app = angular.module("MyApp", []);
app.controller("myController", MyController);
MyController.$inject = ['$scope', 'stringService'];
function MyController($scope, stringService) {
    $scope.transFormString = function (input) {
        $scope.output = stringService.transFormString(input);

    };
    $scope.toLower = function (input) {
        $scope.output = stringService.toLower(input);
    }
    
}
