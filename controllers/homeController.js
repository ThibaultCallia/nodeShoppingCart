import { products, shoppingCart } from "../db.js";

const homeRender = async (req, res) => {
  try {
    res.render("home", { products });
  } catch (error) {
    console.log(error);
  }
};

const aboutRender = async (req, res) => {
  try {
    res.render("about", { shoppingCart });
  } catch (error) {
    console.log(error);
  }
};

export { homeRender, aboutRender };
