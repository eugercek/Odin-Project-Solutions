import Perfume from "../models/Perfume.js";
import Brand from "../models/Brand.js";
import Category from "../models/Category.js";

export async function getAllPerfumes(req, res) {
  const items = await Perfume.find({}).populate("category brand");
  res.render("perfume/all", { items });
}

export async function getPerfume(req, res) {
  const { id } = req.params;
  try {
    let perfume = await Perfume.findById(id).populate("category brand");
    res.render("perfume/one", { perfume });
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function addPerfume(req, res) {
  const [brands, categories] = await Promise.all([
    Brand.find({}),
    Category.find({}),
  ]);
  res.render("perfume/add", { brands, categories });
}

export async function savePerfume(req, res) {
  const { name, description, category, brand } = req.body;
  let user;
  try {
    user = await Perfume.create({ name, description, brand, category });
    console.log(user);
    res.redirect("/perfumes/");
  } catch (err) {
    const errors = Object.values(errors.errors).map(
      ({ properties }) => properties.message
    );
    const [brands, categories] = await Promise.all([
      Brand.find({}),
      Category.find({}),
    ]);
    // Optional is broken on pug
    // Can't use {previous: {name, brand ...}}
    res.render("add", {
      brands,
      categories,
      errors,
      previousName: name,
      previousDescription: description,
      previousCategory: category,
      previousBrand: brand,
    });
  }
}

export async function deletePerfume(req, res) {
  const { id } = req.params;
  try {
    let perfume = await Perfume.findByIdAndDelete(id);
    res.redirect("/perfumes");
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function editPerfume(req, res) {
  const { id } = req.params;
  const [brands, categories] = await Promise.all([
    Brand.find({}),
    Category.find({}),
  ]);
  try {
    let perfume = await Perfume.findById(id);
    console.log(perfume.url);
    res.render("perfume/edit", { perfume, brands, categories });
  } catch (errors) {
    res.render("error", { err });
  }
}

export async function saveEditPerfume(req, res) {
  const { name, description, category, brand, _id } = req.body;
  try {
    await Perfume.findByIdAndUpdate(_id, {
      name,
      description,
      category,
      brand,
    });
    res.redirect("/perfumes/");
  } catch (err) {
    console.log(err);
    const [brands, categories] = await Promise.all([
      Brand.find({}),
      Category.find({}),
    ]);
    res.render("perfume/edit", {
      perfume: { name, description, category, brand, _id },
      brands,
      categories,
      errors: err,
    });
  }
}
