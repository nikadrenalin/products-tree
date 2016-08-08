(function() {
  'use strict';

  angular
  .module('productsTree')
  .component('product', {
    templateUrl: 'app/components/productsComp/product/product.html',
    bindings: {
      product: '<'
    }
  });

})();