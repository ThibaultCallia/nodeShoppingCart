import express from "express";
import shoppingRoutes from "./routes/shoppingRoutes.js";

const app = express();
const PORT = 9000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.static("public"));

app.use(shoppingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
