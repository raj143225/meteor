import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection('products');

if (Meteor.isServer) {
  // Code only runs on the server
  Meteor.publish('products', function productsPublication() {
    return Products.find();
  })
}

// Code only runs on both server and client
Meteor.methods({
  'products.insert': (product) => {
    Products.insert({
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      createdAt: new Date(),
    });
    return true;
  },
  'products.remove': (productId) => {
    Products.remove(productId);
    return true;
  }
});