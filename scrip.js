// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider)
{
    $routeProvider
        .when('/',
        {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/l1',
        {
            templateUrl : 'pages/lab1.html',
            controller  : '1Controller'
        })
        .when('/l2',
        {
            templateUrl : 'pages/lab2.html',
            controller  : '2Controller'
        })
        .when('/l3',
        {
            templateUrl : 'pages/lab3.html',
            controller  : '3Controller'
        })
        .when('/l4',
        {
            templateUrl : 'pages/lab4.html',
            controller  : '4Controller'
        })
        .when('/l5',
        {
            templateUrl : 'pages/lab5.html',
            controller  : '5Controller'
        });
});
myApp.controller('mainController', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});

myApp.controller('1Controller', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});

myApp.controller('2Controller', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});

myApp.controller('3Controller', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});

myApp.controller('4Controller', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});

myApp.controller('5Controller', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});

