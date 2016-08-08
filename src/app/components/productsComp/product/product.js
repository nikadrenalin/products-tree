(function() {
  'use strict';

  angular
  .module('productsTree')
  .component('product', {
    templateUrl: 'app/components/productsComp/product/product.html',
    controller: productController,
    bindings: {
      product: '<'
    }
  });

  function productController() {
    var ctrl = this;


  }

})();