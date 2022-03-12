import Perfume from "../models/Perfume.js";
import Brand from "../models/Brand.js";
import Category from "../models/Category.js";

export async function getAllPerfumes(req, res) {
  const items = await Perfume.find({});
  res.render("items", { items });
}

export function getPerfume(req, res) {
  res.send("One Foo");
}

export async function addPerfume(req, res) {
  const [brands, categories] = await Promise.all([
    Brand.find({}),
    Category.find({}),
  ]);
  res.render("addPerfume", { brands, categories });
}

export async function savePerfume(req, res) {
  const { name, description, category, brand } = req.body;
  let user;
  try {
    user = await Perfume.create({ name, description, brand, category });
    console.log(user);
    res.redirect("/perfumes/");
  } catch (err) {
    const errors = Object.values(err.errors).map(
      ({ properties }) => properties.message
    );
    const [brands, categories] = await Promise.all([
      Brand.find({}),
      Category.find({}),
    ]);
    // Optional is broken on pug
    // Can't use {previous: {name, brand ...}}
    res.render("addPerfume", {
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
