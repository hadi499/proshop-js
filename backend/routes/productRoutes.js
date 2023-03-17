import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: "id not found." });
//     }
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   })
// );
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
