import express from "express";
import {
  getAllPerfumes,
  getPerfume,
  addPerfume,
  savePerfume,
  deletePerfume,
  editPerfume,
  saveEditPerfume,
} from "../controllers/perfume.js";

let perfumeRouter = express.Router();

perfumeRouter.get("/", getAllPerfumes); // List all items' links to their page
perfumeRouter.get("/add", addPerfume); // Render add item form
perfumeRouter.get("/:id", getPerfume); // One item's page
perfumeRouter.post("/:id", savePerfume);
perfumeRouter.get("/:id/edit", editPerfume);
perfumeRouter.post("/:id/edit", saveEditPerfume);
perfumeRouter.get("/:id/delete", deletePerfume);

export default perfumeRouter;
