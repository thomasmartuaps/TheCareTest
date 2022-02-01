import { Request, Response } from "express";
import { productModel } from "../model/product";

// type CreateRequest = Request & {
//   body: {
//     name: string;
//     description: string;
//     sku: string;
//     stock: number;
//     price: string;
//     tags: string[];
//     image: string;
//   };
// };

export class ProductController {
  static create(req: Request, res: Response) {
    const { body } = req;
    return res.status(200).json({
      msg: "Create successful",
      status: "ok",
    });
  }
}
