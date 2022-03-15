import express from "express";
import {
  add,
  deleteOne,
  edit,
  get,
  getAll,
  save,
  saveEdit,
} from "../controllers/dealer.js";

let dealerRouter = express.Router();

dealerRouter.get("/", getAll);
dealerRouter.get("/add", add);

dealerRouter.get("/:id", get);
dealerRouter.post("/:id", save);

dealerRouter.get("/:id/edit", edit);
dealerRouter.post("/:id/edit", saveEdit);

dealerRouter.get("/:id/delete", deleteOne);

export default dealerRouter;
