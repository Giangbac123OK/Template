const app = angular.module("myApp", ["ngRoute"]);

      app.config(($routeProvider) => {
        $routeProvider
        .when("/", {
            templateUrl: "./Views/home.html"
        })
        .when("/quanlysanpham", {
            templateUrl: "./Views/quanlysanpham.html"
        })
        .when("/addsanpham", {
            templateUrl: "./Views/addsanpham.html"
        })
        .when("/login", {
            templateUrl: "./Views/login.html"
        })
        .when("/loginotp", {
            templateUrl: "./Views/loginotp.html"
        })
        .when("/quenmatkhau", {
            templateUrl: "./Views/quenmatkhau.html"
        })
        .otherwise({
            redirectTo: "/"
        });
      });