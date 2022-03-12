import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: String,
  description: String,
});

let Perfume = new model("Perfume", schema);

export default Perfume;
