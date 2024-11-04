const app = angular.module("myApp", ["ngRoute"]);

      app.config(($routeProvider) => {
        $routeProvider
        .when("/", {
            templateUrl: "./Views/home.html"
        })
        .when("/quanlysanpham", {
            templateUrl: "./Views/quanlysanpham.html",
            css: "css/quanlysanpham.css"
        }).when("/quanlyhoadonnhap", {
            templateUrl: "./Views/quanlyhoadonnhap.html"
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
        .when("/nvlayout", {
            templateUrl: "./Views/layoutnhanvien.html"
        })
        .otherwise({
            redirectTo: "/"
        });
      });