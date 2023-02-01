import express from "express";
import { homeRender } from "../controllers/homeController.js";

const router = express.Router();

router.route("/").get(homeRender);

export default router;
