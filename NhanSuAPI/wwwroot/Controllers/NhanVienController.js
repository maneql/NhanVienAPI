

myApp.controller("NhanVienController", function ($scope, NhanVienService) {

    $scope.GetAllNhanVien = function () {
        $scope.data = [];
        NhanVienService.getNV().then(function succes(respone) {
            $scope.data = respone.data;
        }, function error(respone) {
            $scope.dataError = respone.statusText
        }
        );
    };

    $scope.GetAllChucVu = function () {
        $scope.chucvus = [];
        NhanVienService.getCV().then(function succes(respone) {
            $scope.chucvus = respone.data;
        }, function error(respone) {
            $scope.dataError = respone.statusText
        }
        );
    };
        

    $scope.AddNhanVien = function () {
        var nhanvien = {
            MA_NV: $scope.MA_NV,
            TEN_NV: $scope.TEN_NV,
            MA_CV: $scope.MA_CV,
            EMAIL: $scope.EMAIL
        };
        //debugger;
        NhanVienService.addNV(nhanvien).then(function succes() {
        }, function error() { });
    };

    $scope.DeleteNhanVien = function (nv) {
        //debugger;
        var ma = nv.MA_NV;
        NhanVienService.deleteNV(ma);
    };

});