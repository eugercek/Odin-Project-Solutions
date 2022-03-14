import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  perfume: {
    type: Schema.Types.ObjectId,
    ref: "Perfume",
    required: [true, "Perfume is missing"],
  },
  dealer: {
    type: Schema.Types.ObjectId,
    ref: "Dealer",
    required: [true, "Dealer is missing"],
  },
  stock: { type: Number, get: (v) => Math.round(v), set: (v) => Math.round(v) },
});

schema.virtual("url").get(function () {
  return `/stocks/${this._id}`;
});

schema.virtual("name").get(function () {
  return `${this.perfume.name} by ${this.dealer.name}`;
});

let PerfumeInstance = new model("PerfumeInstance", schema);

export default PerfumeInstance;
