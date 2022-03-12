import express from "express";

let indexRouter = express.Router();

indexRouter.get("/", function (req, res) {
  res.render("index");
});

export default indexRouter;
