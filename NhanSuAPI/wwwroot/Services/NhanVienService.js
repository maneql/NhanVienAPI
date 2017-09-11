myApp.service('NhanVienService', ['$state', function ($state) {

    this.getAllNhanVien = function () {
        var request = $http({
            method: 'GET',
            cache: false,
            url: 'http://localhost:59610/api/NhanVien'
        });

        return request;
    };
}]);