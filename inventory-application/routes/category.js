import express from "express";
import { getAllCategories, getCategory } from "../controllers/category.js";

let categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);

export default categoryRouter;
