import mongoose from "mongoose";

const { Schema, model } = mongoose;
import Category from "./Category.js";

let schema = new Schema({
  name: String,
  description: String,
  brand: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

let Perfume = new model("Perfume", schema);

export default Perfume;
