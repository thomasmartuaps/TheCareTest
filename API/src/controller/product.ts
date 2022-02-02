import { Request, Response } from "express";
import { productModel } from "../model/product";

type Product = {
  name: string;
  description: string;
  sku: string;
  stock: number;
  price: string;
  tags: string[];
  image: string;
};

interface ProductRequest<T> extends Request {
  body: T;
}

export class ProductController {
  static async create(req: ProductRequest<Product>, res: Response) {
    const { body } = req;
    const { name, description, sku, stock, price, tags, image } = body;
    const newProduct = new productModel({
      name,
      description,
      sku,
      stock,
      price,
      tags,
      image,
    });
    const result = await newProduct.save();
    if (result) {
      return res.status(200).json({
        msg: "Create successful",
        status: "ok",
        result,
      });
    }
    return res.status(400).json({
      status: "error bad requeest",
    });
  }

  static async read(req: ProductRequest<Product>, res: Response) {
    return res.status(200).json({});
  }
}
