var app = angular.module("MyApp", []);
app.controller("myController", MyController);
MyController.$inject = ['$scope'];
function MyController($scope) {

}

app.controller('myControl', ['$scope', function ($scope) {
    var listItem = [
        { Name: "C#", Like: 1100000, DisLike: 1320, DateBirth: new Date('7/27/1998'), Status: true },
        { Name: "Java", Like: 100000, DisLike: 1311, DateBirth: new Date('7/10/1998'), Status: false },
        { Name: "Python", Like: 2100000, DisLike: 3000, DateBirth: new Date('1/17/1998'), Status: true },
        { Name: "F#", Like: 80000, DisLike: 5313, DateBirth: new Date('7/7/1998'), Status: true },
        { Name: "Ruby", Like: 11000, DisLike: 2121, DateBirth: new Date('5/15/1998'), Status: false },
        { Name: "AngularJs", Like: 130000, DisLike: 21252, DateBirth: new Date('3/14/1998'), Status: true }
    ]
    $scope.mes = listItem;
    $scope.sortColumn = 'Name';
    $scope.reverse = false;
    $scope.increaseLike = function (mes) {
        mes.Like++;
    };
    $scope.increaseDisLike = function(mes){
        mes.DisLike++;
    };
    //sắp xếp
    $scope.sortData = function (columnName) {
        if ($scope.sortColumn == columnName)
        {
            $scope.reverse = (!$scope.reverse);
        }
        else
        {
            $scope.reverse = false;
        }
        $scope.sortColumn = columnName;
    }
    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column)
        {
            return $scope.reverse == true ? "up" : "down";
        }
        return '';
    }

}]);
app.filter("setActive", function () {
    return function (input) {
        return input == true ? "Active" : "Block";
    };

});