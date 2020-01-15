var myApp = angular.module("MyApp", []);
myApp.controller("repeatController", RepeatController);
RepeatController.$inject = ['$scope'];
function RepeatController($scope) {
    var listEmp = [
        { id: '1', firstName: "Tuyên", lastName: "Nguyễn Tự", age: 22 },
        { id: '2', firstName: "Việt", lastName: "Lê Văn", age: 22 },
        { id: '3', firstName: "Hạnh", lastName: "Lưu Thị", age: 22 },
        { id: '4', firstName: "Minh", lastName: "Ngô Công", age: 22 }
    ];
    $scope.listEmp = listEmp;

}
myApp.controller("nestedRepeatController", function ($scope) {

    var country = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Birmingham" },
                { name: "Manchester" },
            ]

        },
        {
            name: "VN",
            cities: [
                { name: "Ha Noi" },
                { name: "Da Nang" },
                { name: "TP HCM" },
            ]

        },
        {
            name: "China",
            cities: [
                { name: "Benjing" },
                { name: "Macow" },
                { name: "Thượng Hải" },
            ]

        }
    ]
    $scope.countries = country;
});
myApp.directive("space", function () {
    var html = "_________________________________";
    return {
        restrict: 'E',
        template: html
    }
})

//(function () {
//    var app = angular.module("app", []);
//    angular.controller('nameController',['$scope', function () {

//    }]);
//})();