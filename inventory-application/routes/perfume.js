import express from "express";
import {
  getAllPerfumes,
  getPerfume,
  addPerfume,
  savePerfume,
} from "../controllers/perfume.js";

let perfumeRouter = express.Router();

perfumeRouter.get("/", getAllPerfumes); // List all items' links to their page
perfumeRouter.get("/add/", addPerfume); // Render add item form
perfumeRouter.get("/:id", getPerfume); // One item's page
perfumeRouter.post("/:id", savePerfume);

export default perfumeRouter;
