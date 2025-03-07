import express, { Request } from "express";
import { v4 as uuidv4 } from "uuid";

let products = [
  {
    id: uuidv4(),
    product_name: "Banana bPhone 17",
    product_description: "Cutting Edge Banana",
    product_price: 1500,
  },
  {
    id: uuidv4(),
    product_name: "Banana Mab 2030",
    product_description: "Cutting Edge Mab",
    product_price: 2300,
  },
];

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ products });
});

router.post("/", (req, res) => {
  products.push({
    id: uuidv4(),
    product_name: "Banana bPad 12",
    product_description: "Cutting Edge Banana",
    product_price: 1500,
  });
  res.status(201).json(products);
});

router.get("/:id", (req: Request<{ id: string }>, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found!" });
  }
});

router.delete("/:id", (req: Request<{ id: string }>, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== id);
  res.json({ ok: true });
});

router.put("/:id", (req: Request<{ id: string }>, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product.id === id);
  if (!productIndex) {
    res.status(404);
  }
  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json({ message: "Product updated!" });
});

export default router;
