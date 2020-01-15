//CREATE 1 MODULE
var myApp = angular.module("MyModule", [])
    .controller("myController2", function ($scope) {
        $scope.xinchao = "Xin chào"
    });

//CREATE 1 CONTROLLER

myApp.controller("myController", MyController);

function MyController($scope) {
    $scope.message = "Xin chào Tuyên Nguyễn Tự đây là message"
    var myInfo = {
        firstName: 'Nguyễn Tự',
        lastName: 'Tuyên',
        age: '22',
        gender:'Male'
    }
    $scope.myInfo = myInfo;
}