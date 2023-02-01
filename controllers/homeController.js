import { products } from "../db.js";

const homeRender = async (req, res) => {
  try {
    res.render("home", { products });
  } catch (error) {
    console.log(error);
  }
};

export { homeRender };
