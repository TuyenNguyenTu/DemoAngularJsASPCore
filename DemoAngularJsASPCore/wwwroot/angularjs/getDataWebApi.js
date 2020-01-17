var app = angular.module("MyApp", []);
app.controller("myController", MyController);
MyController.$inject = ['$scope', '$http'];

function MyController($scope, $http) {
    $http({
        method: 'GET',
        url:'/api/employeeapi'
    }).then(function (response) {

        $scope.listEmp = response.data;
    });
}
app.filter("boolStatus", function () {
    return function (input) {
        return input == true ? "Active" : "Block";
    }
})