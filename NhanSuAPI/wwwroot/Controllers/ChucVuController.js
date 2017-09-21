myApp.controller("ChucVuController", function ($scope, ChucVuService) {

    $scope.GetAllChucVu = function () {
        ChucVuService.getAllCV().then(function succes(respone) {
            $scope.data = respone.data;
        }, function error(respone) {
            $scope.dataError = respone.statusText
        }
        );
    };

    $scope.AddChucVu = function () {
        if ($scope.MA_CV === undefined || $scope.MA_CV == null || $scope.MA_CV.length <= 0
            || $scope.TEN_CV === undefined || $scope.TEN_CV == null || $scope.TEN_CV.length <= 0
            || $scope.LUONG_CV === undefined || $scope.LUONG_CV == null || $scope.LUONG_CV.length <= 0
        ) {
            alert("Bạn phải nhập đầy đủ thông tin!");
        }
        else {
            var chucvu = {
                MA_CV: $scope.MA_CV,
                TEN_CV: $scope.TEN_CV,
                LUONG_CV: $scope.LUONG_CV
            };
            //debugger;
            ChucVuService.addCV(chucvu).then(function succes(respone) {
                $scope.data.push(respone.data);
                $scope.MA_CV = '';
                $scope.TEN_CV = '';
                $scope.LUONG_CV = '';
            }, function error() { });
        };
    };

    $scope.EditChucVu = function (chucvu) {
        $scope.uId = chucvu.Id;
        $scope.uMA_CV = chucvu.MA_NV;
        $scope.uTEN_CV = chucvu.TEN_NV;
        $scope.uLUONG_CV = chucvu.MA_CV;
    };

    $scope.UpdateChucVu = function () {
        var chucvu = {
            Id: $scope.uId,
            MA_CV: $scope.uMA_CV,
            TEN_CV: $scope.uTEN_NV,
            LUONG_CV: $scope.uMA_CV
        };
        ChucVuService.updateCV(chucvu).then(function succes() {
            var index = -1;
            var DataArr = eval($scope.data);
            for (var i = 0; i < DataArr.length; i++) {
                if (DataArr[i].Id === $scope.uId) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.data[index] = chucvu;
        }, function error() { }
        );
    };

});