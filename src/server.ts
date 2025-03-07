import express from "express";
import productRoutes from "./routes/product.routes";

const app = express();
const port = 3000;

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
