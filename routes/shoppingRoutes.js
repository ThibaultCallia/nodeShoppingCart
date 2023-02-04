import express from "express";
import {
  homeRender,
  aboutRender,
  addToCart,
  deleteFromCart,
} from "../controllers/shoppingController.js";

const router = express.Router();

router.route("/").get(homeRender).post(addToCart).delete(deleteFromCart);
router.route("/about").get(aboutRender);

export default router;
