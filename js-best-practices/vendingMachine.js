'use strict';
const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  },
  {
    name: 'Snickers',
    price: 120,
    id: 'A2'
  },
  {
    name: 'Twix',
    price: 110,
    id: 'B1'
  }
];

module.exports = {

  getProducts: function() { 
    return products;
  },

  getProduct: function(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    return product;
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
