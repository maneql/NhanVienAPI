productsmgmtApp.service('ProductService', function ($http) {

    var getAllProducts = function () {
        var request = $http({
            method: 'GET',
            cache: false,
            url: 'http://localhost:59610/products'
        });

        return request;
    };

    var addProducts = function (product) {
        var request = $http({
            method: 'POST',
            cache: false,
            url: 'http://localhost:59610/products',
            data: product
        });

        return request;
    };

    var updateProducts = function (product) {
        debugger;
        var request = $http({
            method: 'PUT',
            cache: false,
            url: 'http://localhost:59610/products',
            data: product
        });

        return request;
    };

    return {
        getProducts: getAllProducts,
        addProduct: addProducts,
        update: updateProducts
    };
});