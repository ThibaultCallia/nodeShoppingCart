import { products, shoppingCart } from "../db.js";

const homeRender = async (req, res) => {
  try {
    res.render("home", { products, shoppingCart });
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

const addToCart = async (req, res) => {
  try {
    const { id } = req.body;

    const product = products.find((prod) => prod.id === parseInt(id));
    const productInCart = shoppingCart.find((prod) => prod.id === parseInt(id));
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      shoppingCart.push({ ...product, quantity: 1 });
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteFromCart = async (req, res) => {
  try {
    const { id } = req.body;
    const productInCart = shoppingCart.find((prod) => prod.id === parseInt(id));
    if (productInCart.quantity > 1) {
      productInCart.quantity -= 1;
    } else {
      shoppingCart.splice(
        shoppingCart.findIndex((prod) => prod.id === parseInt(id)),
        1
      );
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

export { homeRender, aboutRender, addToCart, deleteFromCart };
