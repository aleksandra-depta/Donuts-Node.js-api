const mongoose = require('mongoose');
const slugify = require('slugify');

const locationSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: [true, 'Address must have a street'],
    }, 
    streetNumber:  {
      type: Number,
      required: [true, 'Address must have a street number'],
    }, 
    city: {
      type: String,
      required: [true, 'Address must have a city name'],
    }, 
    state: {
      type: String,
      required: [true, 'Address must have a state'],
    },  
    zip: {
      type: Number,
      required: [true, 'Address must have a zip'],
    }, 
    openingHours: String,
    phoneNumber: String,
    coordinates: {
      type: [ Number ],
      required: [true, 'A location must have a coordinates'],
    },
    popupDescription: String 
  },
  { 
  toJSON: { virtuals: true},
  toObject: { virtuals: true},
  }
);


const Location = mongoose.model('Location', locationSchema); 

module.exports = Location;

