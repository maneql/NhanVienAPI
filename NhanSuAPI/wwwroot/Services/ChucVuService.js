myApp.service('ChucVuService', function ($http) {

    var ServiceAPI = 'api/ChucVu/';

    var getAllChucVu = function () {
        var request = $http({
            method: 'GET',
            cache: false,
            url: HostAPI + ServiceAPI
        });
        return request;
    };

    var addChucVu = function (chucvu) {
        var request = $http({
            method: 'post',
            cache: false,
            url: HostAPI + ServiceAPI,
            data: chucvu
        });
        return request;
    };

    var updateChucVu = function (chucvu) {
        var request = $http({
            method: 'put',
            cache: false,
            url: HostAPI + ServiceAPI,
            data: chucvu
        });
    };

    var deleteChucVu = function (id) {
        var request = $http({
            method: 'delete',
            cache: false,
            url: HostAPI + ServiceAPI + id,
        });
    };

    return {
        getAllCV: getAllChucVu,
        addCV: addChucVu,
        updateCV: updateChucVu,
        deleteChucVu: deleteChucVu
    };
});