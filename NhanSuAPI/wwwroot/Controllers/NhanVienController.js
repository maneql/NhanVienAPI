

myApp.controller("NhanVienController", function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://localhost:59610/api/NhanVien"
    }).then(function succes(respone) {
        $scope.data = respone.data;
    }, function error(respone) {
        $scope.dataError = respone.statusText
    }
        );
});