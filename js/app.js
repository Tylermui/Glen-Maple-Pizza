var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl:'views/home.html',
        controller: 'HomeController'
    })
    .when('/about',{
        templateUrl:'views/about.html',
    })
    .when('/menu',{
        templateUrl:'views/menu.html',
        controller: 'MenuController'
    })
    .when('/order',{
        templateUrl:'views/order.html',
        controller: 'OrderController'
    })
    .when('/contact',{
        templateUrl:'views/contact.html',
    })
    .otherwise({
        redirectTo:'/home'
    });
}]);

myApp.controller('MenuController', function ($scope) {
    // Implement logic for filtering and displaying menu items
    $scope.sections = sections;
    $scope.show = true;
    $scope.category = ""

    $scope.getSection = function(section) {
        $scope.show = false;
        $scope.category = section
    };
});
  
myApp.controller('OrderController', function ($scope) {
    // Implement order form logic
    $scope.toppings = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Extra cheese', 'Black olives', 'Green peppers', 'Pineapple', 'Spinach'];
    $scope.order={};
    $scope.submitOrder = function() {
        // Perform form submission logic here
        if ($scope.orderForm.$valid) {
            // Form is valid, proceed with submission
            alert('Order submitted successfully');
        }else {
            // Form is invalid, display an error message
            alert('Invalid Order submission. Please correct the errors.');
        }
    };
});
myApp.controller('HomeController', function($scope){
    $scope.specials = specials;
});