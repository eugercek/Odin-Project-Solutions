import PerfumeInstance from "../models/PerfumeInstance.js";
import Perfume from "../models/Perfume.js";
import Dealer from "../models/Dealer.js";

export async function getAllPerfumeInstances(req, res) {
  const items = await PerfumeInstance.find({}).populate("perfume dealer");

  res.render("perfumeInstances", { items });
}

export async function getPerfumeInstance(req, res) {
  const { id } = req.params;
  try {
    let perfume = await PerfumeInstance.findById(id).populate("perfume dealer");

    console.log(perfume);
    res.render("perfumeInstance", {
      perfume: perfume.perfume,
      dealer: perfume.dealer,
      stock: perfume.stock,
      obj: perfume,
    });
  } catch (errors) {
    console.log(errors);
    res.render("error", { errors });
  }
}

export async function addPerfumeInstance(req, res) {
  const [dealers, perfumes] = await Promise.all([
    Dealer.find({}),
    Perfume.find({}),
  ]);
  res.render("addPerfumeInstance", { dealers, perfumes });
}

export async function savePerfumeInstance(req, res) {
  const { perfume, dealer, stock } = req.body;
  let user;
  try {
    user = await PerfumeInstance.create({ perfume, dealer, stock });
    res.redirect("/stocks");
  } catch (err) {
    const errors = Object.values(errors.errors).map(
      ({ properties }) => properties.message
    );
    const [dealers, perfumes] = await Promise.all([
      Dealer.find({}),
      Perfume.find({}),
    ]);
    res.render("addPerfumeInstance", {
      dealers,
      categories,
      errors,
      previousPerfume: perfume,
      previousDealer: dealer,
    });
  }
}

export async function deletePerfumeInstance(req, res) {
  const { id } = req.params;
  try {
    let perfume = await PerfumeInstance.findByIdAndDelete(id);
    res.redirect("/stocks");
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function editPerfumeInstance(req, res) {
  const { id } = req.params;
  const [dealers, perfumes] = await Promise.all([
    Dealer.find({}),
    Perfume.find({}),
  ]);
  try {
    let perfume = await PerfumeInstance.findById(id).populate("perfume dealer");
    console.log(perfume);
    res.render("editPerfumeInstance", { obj: perfume, dealers, perfumes });
  } catch (errors) {
    console.log(errors);
    res.render("error", { errors });
  }
}

export async function saveEditPerfumeInstance(req, res) {
  const { perfume, _id, dealer, stock } = req.body;
  try {
    PerfumeInstance.fin;
    await PerfumeInstance.findByIdAndUpdate(_id, {
      stock,
      perfume,
      dealer,
    });
    res.redirect("/stocks/");
  } catch (errors) {
    console.log(errors);
    const { id } = req.params;
    const [dealers, perfumes] = await Promise.all([
      Dealer.find({}),
      Perfume.find({}),
    ]);
    let perfume = await PerfumeInstance.findById(id).populate("perfume dealer");
    res.render("editPerfumeInstance", {
      obj: perfume,
      dealers,
      perfumes,
      errors,
    });
  }
}
