!function(){"use strict";angular.module("productsTree",["ngSanitize","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";angular.module("productsTree").component("product",{templateUrl:"app/components/productsComp/product/product.html",bindings:{product:"<"}})}(),function(){"use strict";angular.module("productsTree").factory("productsCompService",["$http","$q","config",function(t,c,r){var o={getProducts:function(){var o=c.defer();return t.get(r.api.products).success(function(t,c,r,e){o.resolve(t,c,r,e)}).error(function(t,c,r,e){o.reject(t,c,r,e)}),o.promise}};return o}])}(),function(){"use strict";function t(t){function c(t){var c=r.batchProducts.indexOf(t),o=r.products.indexOf(t),e=0;-1!=c?(r.batchProducts.splice(c,1),r.products[o].checked=!1,e=r.total-parseFloat(t.amount),r.total=e):(r.batchProducts.push(t),r.products[o].checked=!0,e=r.total+parseFloat(t.amount),r.total=e)}var r=this;r.products=[],r.batchProducts=[],r.total=0,r.checkProduct=c,t.getProducts().then(function(t){t.products.length>0&&(r.products=t.products)})}t.$inject=["productsCompService"],angular.module("productsTree").component("productsComp",{templateUrl:"app/components/productsComp/productsComp.html",controller:t})}(),function(){"use strict";function t(){}angular.module("productsTree").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("productsTree").run(t)}(),function(){"use strict";function t(t,c){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),c.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("productsTree").config(t)}(),function(){"use strict";angular.module("productsTree").constant("malarkey",malarkey).constant("moment",moment).constant("config",{api:{products:"app/main/data/products.json"}})}(),function(){"use strict";function t(t,c){t.debugEnabled(!0),c.allowHtml=!0,c.timeOut=3e3,c.positionClass="toast-top-right",c.preventDuplicates=!0,c.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("productsTree").config(t)}(),angular.module("productsTree").run(["$templateCache",function(t){t.put("app/main/main.html","<products-comp></products-comp>"),t.put("app/components/productsComp/productsComp.html",'<div class="app app-aside-folded"><!-- content --><div id=content class=app-content role=main><div class="app-content-body app-content-full fade-in-up h-full"><div id=pageContent class="hbox hbox-auto-xs hbox-auto-sm fade-in-up"><div id=WiSecure_batchCol class="col w-xxl b-r"><div class=vbox><div class="col-header wrapper-sm bg-white b-b"><i class="fa fa-circle-o-notch text-success-lter pull-right fa-spin" style="display: none"></i><h4 class=h4>Products</h4></div><div class=row-row><div class=cell><div class=cell-inner><div class=wrapper-sm><div class=WiSecure_productsList><product ng-repeat="product in $ctrl.products" ng-click=$ctrl.checkProduct(product) product=product></product><!-- <div \r\n                                            ng-repeat="product in $ctrl.products" \r\n                                            class="panel wrapper-sm b-b WiSecure_productSelectContainer text-ellipsis bg-info"\r\n                                            ng-click="$ctrl.checkProduct(product)">\r\n                                                <span class="pull-right">$ {{product.amount}}</span>\r\n                                                {{product.title}}\r\n                                                <b>{{product.date}}</b>\r\n                                            </div> --></div></div></div></div></div><div class="col-footer wrapper-sm bg-white b-t"></div></div></div><div class="toggle-col col w-xxl b-r"><div class=vbox><div class="col-header wrapper-sm bg-white b-b"><h4 class=h4>Batch</h4></div><div class=row-row><div class=cell><div class=cell-inner><div class=wrapper-sm><div class=WiSecure_batchContainer><div class="run-item panel bg-white wrapper-sm b-b WiSecure_productContainer" ng-repeat="product in $ctrl.batchProducts track by $index">{{product.title}} <span class=pull-right>$ {{product.amount}}</span></div></div></div></div></div></div><div class="col-footer wrapper-sm bg-white b-t"><h4 class="h4 m-t-sm m-b-xs">Total: <span class=pull-right>$ <span class=WiSecure_batchTotal>{{$ctrl.total | number:2}}</span></span></h4></div></div></div></div></div></div></div>'),t.put("app/components/productsComp/product/product.html",'<div class="panel wrapper-sm b-b WiSecure_productSelectContainer text-ellipsis" ng-class="{\'bg-info\': $ctrl.product.checked}"><span class=pull-right>$ {{$ctrl.product.amount}}</span> {{$ctrl.product.title}} <b>{{$ctrl.product.date}}</b></div>')}]);
//# sourceMappingURL=../maps/scripts/app-2779a11f5a.js.map