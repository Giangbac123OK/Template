const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
    .when("/", {
        templateUrl: "./Views/home.html"
    })
    .when("/danhsach", {
        templateUrl: "./Views/SanPham/danhsach.html"
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
    .when("/thongke", {
        templateUrl: "./Views/thongke.html"
    })
    .when("/kmvoucher", {
        templateUrl: "./Views/khuyenmai_voucher.html"
    })
    .when("/Acount", {
        templateUrl: "./Views/layoutAcountAcc.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});
