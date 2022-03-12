import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";
import perfumeRouter from "./routes/perfume.js";
import categoryRouter from "./routes/category.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect(process.env.DB_STRING);

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/perfumes", perfumeRouter);
app.use("/categories", categoryRouter);

app.use((req, res) => {
  res.render("error");
});

app.listen(process.env.PORT || 3000);
