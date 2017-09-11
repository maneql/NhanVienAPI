myApp.service('NhanVienService', function ($http) {

    var getAllNhanVien = function () {
        var request = $http({
            method: 'GET',
            cache: false,
            url: HostAPI + 'api/NhanVien'
        });
        return request;
    };
    var addNhanVien = function (nhanvien) {
        var request = $http({
            method: 'POST',
            cache: false,
            url: HostAPI + 'api/NhanVien',
            data: nhanvien
        });

        return request;
    };

    var deleteNhanVien = function (ma) {
        var request = $http({
            method: "DELETE",
            cache: false,
            url: HostAPI + 'api/NhanVien/' + ma
        });
    };

    var getCVu = function () {
        var request = $http({
            method: "GET",
            cache: false,
            url: HostAPI + 'api/ChucVu'
        });
        return request;
    };

    return {
        getNV: getAllNhanVien,
        addNV: addNhanVien,
        deleteNV: deleteNhanVien,
        getCV: getCVu
    };
});