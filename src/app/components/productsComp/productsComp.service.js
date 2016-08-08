
(function () {
'use strict';

angular.module('productsTree')
.factory('productsCompService', function ($http, $q, config) {
    var Service = {

        getProducts: function () {
            var deferred = $q.defer();

            $http.get(config.api.products).success(function (response, status, headers, config) {

                deferred.resolve(response, status, headers, config);
            }).error(function (response, status, headers, config) {
                
                deferred.reject(response, status, headers, config);
            });

            return deferred.promise;
        }
    };

    return Service;
});

})();