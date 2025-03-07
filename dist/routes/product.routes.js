"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
let products = [
    {
        id: (0, uuid_1.v4)(),
        product_name: "Banana bPhone 17",
        product_description: "Cutting Edge Banana",
        product_price: 1500,
    },
    {
        id: (0, uuid_1.v4)(),
        product_name: "Banana Mab 2030",
        product_description: "Cutting Edge Mab",
        product_price: 2300,
    },
];
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json({ products });
});
router.post("/", (req, res) => {
    products.push({
        id: (0, uuid_1.v4)(),
        product_name: "Banana bPad 12",
        product_description: "Cutting Edge Banana",
        product_price: 1500,
    });
    res.status(201).json(products);
});
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product not found!" });
    }
});
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter((product) => product.id !== id);
    res.json({ ok: true });
});
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id === id);
    if (!productIndex) {
        res.status(404);
    }
    products[productIndex] = Object.assign(Object.assign({}, products[productIndex]), req.body);
    res.json({ message: "Product updated!" });
});
exports.default = router;
