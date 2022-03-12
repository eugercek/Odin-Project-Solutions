import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: String,
});

let Category = new model("Category", schema);

export default Category;
