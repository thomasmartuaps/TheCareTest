import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sku: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  tags: { type: [String] },
  image: { type: String },
});

export const productModel = mongoose.model("products", ProductSchema);
