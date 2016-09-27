(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
    var buyList = this;

    buyList.alreadyBought = function (itemIndex) {
        ShoppingListCheckOffService.alreadyBought(itemIndex);
    };

    buyList.items = ShoppingListCheckOffService.getItemsBuy();
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService(){
    var service = this;

    var buyItems = [];
    var boughtItems = [];
    console.log(boughtItems.length > 0);

    buyItems.push({name: 'Apples', quantity: 1});
    buyItems.push({name: 'Bananas', quantity: 2});
    buyItems.push({name: 'Berries', quantity: 3});
    buyItems.push({name: 'Cherries', quantity: 4});
    buyItems.push({name: 'Grapes', quantity: 5});
    buyItems.push({name: 'Melons', quantity: 6});
    buyItems.push({name: 'Nectarine', quantity: 7});
    buyItems.push({name: 'Oranges', quantity: 8});
    buyItems.push({name: 'Peaches', quantity: 9});
    buyItems.push({name: 'Pineapples', quantity: 10});

    service.alreadyBought = function (itemIndex){
        var item = buyItems[itemIndex];
        buyItems.splice(itemIndex, 1);
        boughtItems.push(item);

    }

    service.getItemsBought = function () {
        return boughtItems;
        
    };

    service.getItemsBuy = function () {
        return buyItems;
    };

}
})();