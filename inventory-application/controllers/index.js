import PerfumeInstance from "../models/PerfumeInstance.js";
import Perfume from "../models/Perfume.js";
import Dealer from "../models/Dealer.js";

export async function index(req, res) {
  const perfumes = await PerfumeInstance.find({ stock: 0 }).populate(
    "perfume dealer"
  );
  res.render("index", { perfumes });
}
