(function() {
  'use strict';

  angular
  .module('productsTree')
  .component('productsComp', {
    templateUrl: 'app/components/productsComp/productsComp.html',
    controller: productsCompController
  });

  function productsCompController(MainRestService, productsCompService) {
    var ctrl = this;

    ctrl.test = '123';
    ctrl.products = [];
    ctrl.batchProducts = [];
    ctrl.total = 0.00;
    ctrl.checkProduct = checkProduct;

    MainRestService.getProducts()
    .then(function (data) {
        if (data.products.length > 0) {

          ctrl.products = data.products;

          console.log(ctrl.products);
        }
    });

    function checkProduct(product) {
      var idx = ctrl.batchProducts.indexOf(product),
          idxProduct = ctrl.products.indexOf(product),
          total = 0;
      
      if (idx != -1) {

        ctrl.batchProducts.splice(idx, 1);
        ctrl.products[idxProduct].checked = false;
        total = ctrl.total - parseFloat(product.amount);
        ctrl.total = total;
      }else {

        ctrl.batchProducts.push(product);
        ctrl.products[idxProduct].checked = true;
        total = ctrl.total + parseFloat(product.amount);
        ctrl.total = total;
      }
    }
  }

})();