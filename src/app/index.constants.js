/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('productsTree')
    .constant('malarkey', malarkey)
    .constant('moment', moment)

    .constant('config', {
      api: {
        products: 'app/main/data/products.json'
      }
    });

})();
