const app = angular.module("myApp", ["ngRoute"]);

      app.config(($routeProvider) => {
        $routeProvider
        .when("/", {
            templateUrl: "./Views/home.html"
        })
        .when("/quanlysanpham", {
            templateUrl: "./Views/quanlysanpham.html"
        })
        .otherwise({
            redirectTo: "/"
        });
      });