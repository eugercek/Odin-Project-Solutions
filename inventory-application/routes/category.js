import express from "express";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
  getCategory,
  saveCategory,
  saveEditCategory,
} from "../controllers/category.js";

let categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/add", addCategory);

categoryRouter.get("/:id", getCategory);
categoryRouter.post("/:id", saveCategory);

categoryRouter.get("/:id/edit", editCategory);
categoryRouter.post("/:id/edit", saveEditCategory);

categoryRouter.get("/:id/delete", deleteCategory);

export default categoryRouter;
