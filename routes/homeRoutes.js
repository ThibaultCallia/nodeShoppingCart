import express from "express";
import { homeRender, aboutRender } from "../controllers/homeController.js";

const router = express.Router();

router.route("/").get(homeRender);
router.route("/about").get(aboutRender);

export default router;
