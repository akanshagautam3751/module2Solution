(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService'ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();
  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingLisCheckOffService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
  };
}

function ShoppingListCheckOff(){
  var service = this;
  // List of shopping items

  var items=[];

  service.addItem = function(itemName,quantity) {
    var item = {
      name : itemName,
      quantity : itemQuantity
    };
    items.push(item);
  };
  service.removeItem = function (itemIndex){
    items.splice(itemIndex,1);
  }
  service.getItems = function () {
    return items;
  }

}

})();