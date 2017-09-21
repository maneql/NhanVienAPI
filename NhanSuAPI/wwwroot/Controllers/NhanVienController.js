myApp.controller("NhanVienController", function ($scope, NhanVienService) {

    $scope.GetAllNhanVien = function () {
        NhanVienService.getNV().then(function succes(respone) {
            $scope.data = respone.data;
        }, function error(respone) {
            $scope.dataError = respone.statusText
        }
        );
    };

    $scope.GetAllChucVu = function () {
        NhanVienService.getCV().then(function succes(respone) {
            $scope.chucvus = respone.data;
        }, function error(respone) {
            $scope.dataError = respone.statusText
        }
        );
    };


    $scope.AddNhanVien = function () {
        if ($scope.MA_NV === undefined || $scope.MA_NV == null || $scope.MA_NV.length <= 0
            || $scope.TEN_NV === undefined || $scope.TEN_NV == null || $scope.TEN_NV.length <= 0
            || $scope.MA_CV === undefined || $scope.MA_CV == null || $scope.MA_CV.length <= 0
            || $scope.EMAIL === undefined || $scope.EMAIL == null || $scope.EMAIL.length <= 0
        ) {
            alert("Bạn phải nhập đầy đủ thông tin!");
        }
        else {
            var nhanvien = {
                MA_NV: $scope.MA_NV,
                TEN_NV: $scope.TEN_NV,
                MA_CV: $scope.MA_CV,
                EMAIL: $scope.EMAIL
            };
            //debugger;
            NhanVienService.addNV(nhanvien).then(function succes(respone) {
                $scope.data.push(respone.data);
                $scope.MA_NV = '';
                $scope.TEN_NV = '';
                $scope.MA_CV = '';
                $scope.EMAIL = '';
            }, function error() { });
        };
    };

    $scope.EditNhanVien = function (nhanvien,index) {
        //debugger;
        $scope.uId = nhanvien.Id;
        $scope.uMA_NV = nhanvien.MA_NV;
        $scope.uTEN_NV = nhanvien.TEN_NV;
        $scope.uMA_CV = nhanvien.MA_CV;
        $scope.uEMAIL = nhanvien.EMAIL;

        $scope.Index = index;
    };

    $scope.UpdateNhanVien = function () {
        var _nhanvien = {
            Id: $scope.uId,
            MA_NV: $scope.uMA_NV,
            TEN_NV: $scope.uTEN_NV,
            MA_CV: $scope.uMA_CV,
            EMAIL: $scope.uEMAIL
        };
        NhanVienService.updateNV(_nhanvien).then(function succes() {
            $scope.data[$scope.Index] = _nhanvien;
        }, function error() { }
        );
    };

    $scope.DeleteNhanVien = function (index) {
        //debugger;
        var nhanvien = $scope.data[index];
        bootbox.confirm({
            size: "small",
            message: "Xóa nhân viên: " + nhanvien.TEN_NV + " ??",
            callback: function (result) {
                if (result === true) {
                    NhanVienService.deleteNV(nhanvien.Id).then(function succes(respone) {
                        $scope.data.splice(index, 1);
                    });
                }
            }
        });
    };
});