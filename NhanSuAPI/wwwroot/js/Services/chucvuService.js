chucvusApp.service('ChucVuService', function ($http) {

    var GetAllChucVu = function () {
        var request = $http({
            method: 'GET',
            cache: false,
            url: 'http://localhost:63414/api/ChucVu'
        });

        return request;
    };

    var addchucvu = function (chucvu) {
        var request = $http({
            method: 'post',
            cache: false,
            url: 'http://localhost:63414/api/ChucVu',
            data: chucvu
        });

        return request;
    };

    var updatechucvu = function (chucvu) {
        debugger;
        var request = $http({
            method: 'put',
            cache: false,
            url: 'http://localhost:63414/api/ChucVu',
            data: chucvu
        });

        return request;
    };

    return {
        getChucVus: GetAllChucVu,
        addChucVu: addchucvu,
        update: updatechucvu
    };
});