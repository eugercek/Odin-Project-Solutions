import express from "express";
import {
  addBrand,
  deleteBrand,
  editBrand,
  getAllBrands,
  getBrand,
  saveBrand,
  saveEditBrand,
} from "../controllers/brand.js";

let brandRouter = express.Router();

brandRouter.get("/", getAllBrands);
brandRouter.get("/add", addBrand);

brandRouter.get("/:id", getBrand);
brandRouter.post("/:id", saveBrand);

brandRouter.get("/:id/edit", editBrand);
brandRouter.post("/:id/edit", saveEditBrand);

brandRouter.get("/:id/delete", deleteBrand);

export default brandRouter;
