import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  perfume: {
    type: Schema.Types.ObjectId,
    ref: "Perfume",
    required: [true, "Perfume is missing"],
  },
  dealer: { type: String, required: [true, "Dealer is missing"] },
  stock: { type: Number, get: (v) => Math.round(v), set: (v) => Math.round(v) },
});

schema.virtual("url").get(function () {
  return `/buy/${this._id}`;
});

let PerfumeInstance = new model("PerfumeInstance", schema);

export default PerfumeInstance;
