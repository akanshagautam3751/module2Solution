(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.items2 = ShoppingListCheckOffService.getBoughtItems();

}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getBuyItems();
  showList.removeItem = function (itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}
function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items

  var items2 = [];

  var items=[
  {
    name : "cookies",
    quantity : "10"
  },
  {
    name : "chips",
    quantity : "5"
  },
  {
    name : "toffees",
    quantity : "20"
  },
  {
    name : "drinks",
    quantity : "10"
  },
  {
    name : "chocolates",
    quantity : "20"
  },
  {
    name : "chewing-gums",
    quantity : "40"
  }
  ];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    // items2.push(item);

  };
  service.removeItem = function (itemIndex){
    var bought = items.splice(itemIndex,1)[0];
    items2.push(bought);
  }
  service.getBuyItems = function () {
    return items;
  };
  service.getBoughtItems = function () {
    return items2;
  }
}
})();
