const app = angular.module('myApp', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: './Views/home.html'
    })
    .when('/danhsach', {
        templateUrl: './Views/SanPham/danhsach.html'
    })
    .when('/login', {
        templateUrl: './Views/login.html'
    })
    .when('/loginotp', {
        templateUrl: './Views/loginotp.html'
    })
    .when('/quenmatkhau', {
        templateUrl: './Views/quenmatkhau.html'
    })
    .when('/nvlayout', {
        templateUrl: './Views/layoutnhanvien.html'
    })
    .when('/thongke', {
        templateUrl: './Views/thongke.html'
    })
    .when('/kmvoucher', {
        templateUrl: './Views/khuyenmai_voucher.html'
    })
    .when('/Acount', {
        templateUrl: './Views/layoutAcountAcc.html'
    })
    .when('/QuanLyHoaDon', {
        templateUrl: './Views/HoaDon/QuanLyHoaDon.html'
    })
    .when('/BanHangTaiQuay', {
        templateUrl: './Views/HoaDon/BanHangTaiQuay.html',
        controller: 'BanHangTaiQuayController'
    })  
    .when('/Trahang', {
        templateUrl: './Views/trahang.html',
        controller: 'trahangController'
    })  
    .otherwise({
        redirectTo: '/'
    });
});
app.controller('BanHangTaiQuayController', function($scope) {
    $scope.danhSachSanPham = [
        { id: 1, ten: 'Giày Thể Thao ABC', gia: 750000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 2, ten: 'Giày Thể Thao XYZ', gia: 650000 },
        { id: 3, ten: 'Giày Chạy Bộ DEF', gia: 800000 }
    ];

    $scope.hoaDons = [];
    $scope.maxHoaDons = 5;
    $scope.selectedHoaDonIndex = 0;

    $scope.taoHoaDonMoi = function() {
        if ($scope.hoaDons.length < $scope.maxHoaDons) {
            $scope.hoaDons.push({
                sanPham: [],
                voucher: '',
                tongTien: 0,
                customerName: '',
                paymentMethod: ''
            });
            $scope.selectedHoaDonIndex = $scope.hoaDons.length - 1;
        } else {
            alert('Đã đạt số lượng hóa đơn tối đa!');
        }
    };

    $scope.chonHoaDon = function(index) {
        $scope.selectedHoaDonIndex = index;
    };

    $scope.tinhTongTien = function(hoaDon) {
        hoaDon.tongTien = hoaDon.sanPham.reduce((sum, sp) => sum + (sp.gia * sp.soLuong), 0);
    };

    $scope.themSanPham = function(hoaDon, sanPham) {
        const sp = angular.copy(sanPham);
        sp.soLuong = 1;
        sp.thanhTien = sp.gia;
        hoaDon.sanPham.push(sp);
        $scope.tinhTongTien(hoaDon);
    };

    $scope.capNhatThanhTien = function(hoaDon, sanPham) {
        sanPham.thanhTien = sanPham.gia * sanPham.soLuong;
        $scope.tinhTongTien(hoaDon);
    };

    $scope.xoaSanPham = function(hoaDon, sanPham) {
        const index = hoaDon.sanPham.indexOf(sanPham);
        if (index > -1) {
            hoaDon.sanPham.splice(index, 1);
            $scope.tinhTongTien(hoaDon);
        }
    };
});
app.controller('trahangController',function ($scope, $http, $location, $window) {
    var url = 'https://localhost:7297/api/Trahang'
    $http.get(url)
        .then(function(response){
            $scope.Listdata = response.data
            console.log($scope.Listdata)
        })
        .catch(function(error){
            console.log('Error: '+error)
        })
    $scope.DetailsTrahang = function(id){
        $http.get(url+'/'+id)
            .then(function(response){
                $scope.Listdetails = 
                {
                    tenkhachhang: response.data.tenkhachhang,
                    idnv: parseInt(response.data.idnv),
                    idkh: parseInt(response.data.idkh),
                    sotienhoan: parseFloat(response.data.sotienhoan),
                    lydotrahang: response.data.lydotrahang,
                    trangthai: 1,
                    phuongthuchoantien: response.data.phuongthuchoantien,
                    ngaytrahangdukien: new Date(response.data.ngaytrahangdukien),
                    ngaytrahangthucte: new Date(response.data.ngaytrahangthucte),
                    chuthich: response.data.ghichu
                }
                console.log($scope.Listdetails)
            })
            .catch(function(error){
                console.log('Error: '+error)
            })
            $http.get('https://localhost:7297/api/Trahangchitiet/Chi-tiet-ma-hoa-don:'+id)
            .then(function(response){
                $scope.ListdetailsCTbyID = response.data
                console.log($scope.ListdetailsCTbyID)
            })
            .catch(function(error){
                console.log('Error: '+error)
            })
    }

    $scope.DataEditTrahang = function(id){
        $http.get(url+'/'+id)
            .then(function(response){
                $scope.dataEdit = 
                {
                    tenkhachhang: response.data.tenkhachhang,
                    idnv: parseInt(response.data.idnv),
                    idkh: parseInt(response.data.idkh),
                    sotienhoan: parseFloat(response.data.sotienhoan),
                    lydotrahang: response.data.lydotrahang,
                    trangthai: 1,
                    phuongthuchoantien: response.data.phuongthuchoantien,
                    ngaytrahangdukien: new Date(response.data.ngaytrahangdukien),
                    ngaytrahangthucte: new Date(response.data.ngaytrahangthucte),
                    chuthich: response.data.ghichu
                }
                console.log($scope.ListEdit)
            })
            .catch(function(error){
                console.log('Error: '+error)
            })
        
    }
    $scope.EditTrahang = function(id) {
        // Ensure required fields are present
        if (!$scope.dataAdd.tenkhachhang || !$scope.dataAdd.idnv || !$scope.dataAdd.idkh) {
            console.log('Error: Missing required fields');
            return;
        }
        $scope.edit = {
            tenkhachhang: $scope.dataAdd.tenkhachhang,
            idnv: parseInt($scope.dataAdd.idnv),
            idkh: parseInt($scope.dataAdd.idkh),
            sotienhoan: parseFloat($scope.dataAdd.sotienhoan),
            lydotrahang: $scope.dataAdd.lydotrahang,
            trangthai: 1,
            phuongthuchoantien: $scope.dataAdd.phuongthuchoantien,
            ngaytrahangdukien: new Date($scope.dataAdd.ngaytrahangdukien),
            ngaytrahangthucte: new Date($scope.dataAdd.ngaytrahangthucte),
            chuthich: $scope.dataAdd.ghichu
        };
    
        $http.put('https://localhost:7297/api/Trahang'+'/'+id, $scope.edit)
            .then(function(response) {
                console.log('Success:', response.data);
                $window.location.reload();
            })
            .catch(function(error) {
                console.log('Error: ' + error);
            });
    };
    $http.get('https://localhost:7297/api/Khachhang')
        .then(function(response){
            $scope.ListdataKH = response.data
            console.log($scope.ListdataKH)
        })
        .catch(function(error){
            console.log('Error: '+error)
        })
    
    $http.get('https://localhost:7297/api/Nhanvien')
        .then(function(response){
            $scope.ListdataNV = response.data
            console.log($scope.ListdataNV)
        })
        .catch(function(error){
            console.log('Error: '+error)
        })
        $http.get('https://localhost:7297/api/Phuongthucthanhtoan')
        .then(function(response) {
            // Filter data to include only items where `trangthai` is 0
            $scope.ListdataPTTT = response.data.filter(function(item) {
                return item.trangthai == 0;
            });
            console.log($scope.ListdataPTTT);
        })
        .catch(function(error) {
            console.log('Error: ' + error);
        });
    
    $scope.DeleteTrahang = function(id)
    {
        var thongbao = confirm("Bạn có muốn xóa không?")
        if(thongbao){
            $http.delete(url+'/'+id)
            .then(function(response){
                $window.location.reload();
            })
            .catch(function(error){
                console.log('Error: '+error)
            })
        }
    } 
    $scope.AddTrahang = function() {
        // Ensure required fields are present
        if (!$scope.dataAdd.tenkhachhang || !$scope.dataAdd.idnv || !$scope.dataAdd.idkh) {
            console.log('Error: Missing required fields');
            return;
        }
    
        $scope.add = {
            tenkhachhang: $scope.dataAdd.tenkhachhang,
            idnv: parseInt($scope.dataAdd.idnv),
            idkh: parseInt($scope.dataAdd.idkh),
            sotienhoan: parseFloat($scope.dataAdd.sotienhoan),
            lydotrahang: $scope.dataAdd.lydotrahang,
            trangthai: 1,
            phuongthuchoantien: $scope.dataAdd.phuongthuchoantien,
            ngaytrahangdukien: new Date($scope.dataAdd.ngaytrahangdukien),
            ngaytrahangthucte: new Date($scope.dataAdd.ngaytrahangthucte),
            chuthich: $scope.dataAdd.ghichu
        };
    
        $http.post('https://localhost:7297/api/Trahang', $scope.add)
            .then(function(response) {
                console.log('Success:', response.data);
                $window.location.reload();
            })
            .catch(function(error) {
                console.log('Error: ' + error);
            });
    };
    
})