import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: { type: String, required: [true, "Name is missing"] },
});

schema.virtual("url").get(function () {
  return `/brands/${this._id}`;
});

let Brand = new model("Brand", schema);

export default Brand;
