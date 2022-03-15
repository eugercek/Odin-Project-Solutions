import express from "express";
import { index } from "../controllers/index.js";

let indexRouter = express.Router();

indexRouter.get("/", index);

export default indexRouter;
