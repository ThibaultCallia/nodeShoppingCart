import express from "express";
import homeRoutes from "./routes/homeRoutes.js";

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
