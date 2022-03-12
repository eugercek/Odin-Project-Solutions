import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: String,
});

let Brand = new model("Brand", schema);

export default Brand;
