var app = angular.module("filterAngular", []);
app.controller("myController", ['$scope', function ($scope) {

    var listLanguage = [
        { Name: "C#", Like: 1100000, DisLike: 1320, DateBirth: new Date('7/27/1998'), Status: true },
        { Name: "Java", Like: 100000, DisLike: 1311, DateBirth: new Date('7/10/1998'), Status: false},
        { Name: "Python", Like: 2100000, DisLike: 3000, DateBirth: new Date('1/17/1998'), Status: true},
        { Name: "F#", Like: 80000, DisLike: 5313, DateBirth: new Date('7/7/1998'), Status: true },
        { Name: "Ruby", Like: 11000, DisLike: 2121, DateBirth: new Date('5/15/1998'), Status: false },
        { Name: "AngularJs", Like: 130000, DisLike: 21252, DateBirth: new Date('3/14/1998'), Status: true}
    ]
    $scope.listLanguages = listLanguage;
    //$scope.sortColumn = 'Name';
}]);


//Define filter
app.filter("boolStatus", function () {
    return function (input) {
        return input == true ? "Active" : "Block";
    }
});
 