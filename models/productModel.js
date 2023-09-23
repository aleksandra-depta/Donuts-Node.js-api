const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    amount: Number,
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true, 
    },
    slug: String,
    type: {
      type: String,
      required: [true, 'A product must have a type'],
      enum : ['donuts', 'specials', 'milkshake', 'coffee'], 
    },
    title: { type: String },
    subtitle: { type: String },
    description: {
      type: String,
      required: [true, 'A product must have a description'],
    },
    allergens: [String],
    nutrition: Number,
    image: {
      type: String,
      required: [true, 'A product must have a image'],
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
  },
  { 
  toJSON: { virtuals: true},
  toObject: { virtuals: true},
  }
);

//DOCUMENT MIDDLEWWARE
productSchema.pre('save', function (next){
  this.slug = slugify(this.name, {lower: true}); 
  
  next(); 
});

const Product = mongoose.model('Product', productSchema); 

module.exports = Product;

