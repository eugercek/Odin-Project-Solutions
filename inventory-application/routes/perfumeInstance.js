import express from "express";
import {
  addPerfumeInstance,
  deletePerfumeInstance,
  editPerfumeInstance,
  getAllPerfumeInstances,
  getPerfumeInstance,
  saveEditPerfumeInstance,
  savePerfumeInstance,
} from "../controllers/perfumeInstance.js";

let perfumeInstanceRouter = express.Router();

perfumeInstanceRouter.get("/", getAllPerfumeInstances); // List all items' links to their page

perfumeInstanceRouter.get("/add", addPerfumeInstance); // Render add item form
perfumeInstanceRouter.post("/add", savePerfumeInstance);

perfumeInstanceRouter.get("/:id", getPerfumeInstance); // One item's page

perfumeInstanceRouter.get("/:id/edit", editPerfumeInstance);
perfumeInstanceRouter.post("/:id/edit", saveEditPerfumeInstance);

perfumeInstanceRouter.get("/:id/delete", deletePerfumeInstance);

export default perfumeInstanceRouter;
