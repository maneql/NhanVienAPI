chucvusApp.controller('AddChucVuController', function ($scope, ChucVuService) {
    $scope.AddChucVus = function () {
        var chucvu = {
            MA_CV: $scope.MA_CV,
            TEN_CV: $scope.TEN_CV,
            LUONG_CV: $scope.LUONG_CV
        };
        debugger;
        ChucVuService.addChucVu(chucvu).success(function () {
        }).error(function () { });
    };

    $scope.GetAllChucVu = function () {
        $scope.chucvus = [];
        ChucVuService.getChucVus().success(function (response) {
            $scope.chucvus = response;
        }).error(function () { });
    };

    $scope.UpdateChucVu = function (chucvu) {
        $scope.UpdateMa_CV = chucvu.MA_CV;
        $scope.UpdateTen_CV = chucvu.TEN_CV;
        $scope.UpdateLUONG_CV = chucvu.LUONG_CV;
        $('#myModal').modal('show');
    }

    $scope.Update = function (chucvu) {
        debugger;
        var updateChucVu = {
            MA_CV: chucvu.UpdateMa_CV,
            TEN_CV: chucvu.UpdateTen_CV,
            LUONG_CV: chucvu.UpdateLUONG_CV,
            Id: chucvu.Id
        };

        ChucVuService.update(updateChucVu).success(function () {
        }).error(function () { });
    }
});
