
var myApp = angular.module("MyAppDemo", ["ngRoute"]);
var HostAPI = 'http://localhost:59610/';

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/View/Main.html",
            controller: "NhanVienController"
        })
        .when("/NhanVien", {
            templateUrl: "/View/NhanVien.html",
            controller: "NhanVienController"
        })
        .when("/ChucVu", {
            templateUrl: "/View/ChucVu.html",
            controller: "ChucVuController"
        }).
        otherwise({
            redirectTo: '/NhanVien'
        });
});