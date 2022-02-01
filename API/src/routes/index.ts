import { Router } from "express";
import { ProductController } from "../controller/product";

const router = Router();

router.get("/test", (req, res) => {
  const { body } = req;
  return res.status(200).json({
    msg: "Test successful",
    status: "ok",
  });
});
router.post("/product", ProductController.create);

export default router;
