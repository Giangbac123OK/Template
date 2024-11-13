const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./Views/TrangChu.html",
      controller: "TrangChuCtrl"
    })
    .when("/danhsachsanpham", {
      templateUrl: "./Views/DanhSachSanPham.html",
      controller: "DanhSachSanPhamCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});

app.controller("TrangChuCtrl", function ($scope, $document) {
  let link = angular.element('<link rel="stylesheet" href="css/TrangChu.css">');
  $document.find('head').append(link);
});

