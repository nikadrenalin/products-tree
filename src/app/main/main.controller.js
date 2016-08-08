(function() {
  'use strict';

  angular
    .module('productsTree')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainRestService) {
    var vm = this;

    vm.test = '123';

    // MainRestService.getProducts()
    // .then(function (data) {
    //     if (data.products.length > 0) {

    //         vm.products = data.products;
    //     }
    // });
  }
})();
