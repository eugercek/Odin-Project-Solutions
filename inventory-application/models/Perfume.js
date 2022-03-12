import mongoose from "mongoose";

const { Schema, model } = mongoose;

let schema = new Schema({
  name: { type: String, required: [true, "Name is missing"] },
  description: { type: String, required: [true, "Description is missing"] },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: [true, "Brand is missing"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is missing"],
  },
});

let Perfume = new model("Perfume", schema);

export default Perfume;
