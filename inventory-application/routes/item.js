import express from "express";
import { getAllItems, getItem } from "../controllers/item.js";

let itemRouter = express.Router();

itemRouter.get("/", getAllItems); // List all items' links to their page
itemRouter.get("/:id", getItem); // One item's page

export default itemRouter;
