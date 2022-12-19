const { mongoose, Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  Brand: { type: String },
  Price: { type: Number },
  Name: { type: String },
  category: { type: String },
  Image: { type: String },
  rating: { type: Number },
  discount: { type: Number },
  OlderPrice: { type: Number },
  quantity: { type: Number },
  status: { type: Boolean },
});

const Product = model('product', ProductSchema);
module.exports = { Product };
