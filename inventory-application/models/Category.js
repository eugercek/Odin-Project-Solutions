import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: { type: String, required: [true, "Name is missing"] },
});

schema.virtual("url").get(function () {
  return `/categories/${this._id}`;
});

let Category = new model("Category", schema);

export default Category;
