const mongoose = require('mongoose');
const slugify = require('slugify');

const orderSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum : ['delivery', 'pick up'], 
      required: [true, 'Order must have a delivery type'],
    },
    order: [
      {
        product: String,
        amount: Number,
        price: Number,
      }
    ],
    totalPrice: Number,
    delivery: {
      street: {
        type: String,
        required: [true, 'Order must have a street'],
      },
      streetNumber: {
        type: Number,
        required: [true, 'Order must have a house number'],
      },
      city: {
        type: String,
        required: [true, 'Order must have a city'],
      },
      state: {
        type: String,
        required: [true, 'Order must have a state'],
      },
      zip: {
        type: Number,
        required: [true, 'Order must have a ZIP'],
      }
    },
    customer: {
      name: {
        type: String,
        required: [true, 'Order must have a customer name'],
      },
      lastName: {
        type: String,
        required: [true, 'Order must have a customer last name'],
      },
      phoneNumber: {
        type: Number,
        required: [true, 'Order must have a phone number'],
      },
      email: {
        type: String,
        required: [true, 'Order must have an email'],
      }
    }
  },
  { 
  toJSON: { virtuals: true},
  toObject: { virtuals: true},
  }
);

const Order = mongoose.model('Order', orderSchema); 

module.exports = Order;

