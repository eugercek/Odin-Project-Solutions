import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: { type: String, required: [true, "Dealer is missing"] },
});

schema.virtual("url").get(function () {
  return `/dealers/${this._id}`;
});

let Dealer = new model("Dealer", schema);

export default Dealer;
