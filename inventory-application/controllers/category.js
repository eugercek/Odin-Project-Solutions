import Category from "../models/Category.js";
import Perfume from "../models/Perfume.js";

export async function getAllCategories(req, res) {
  const items = await Category.find({});
  res.render("categories", { items });
}

export async function getCategory(req, res) {
  const { id } = req.params;
  try {
    let category = await Category.findById(id);
    let perfumes = await Perfume.find({ category: id });
    console.log(perfumes);
    res.render("category", { category });
  } catch (err) {
    res.render("error", { err });
  }
}

export async function addCategory(req, res) {
  res.render("addCategory");
}

export async function saveCategory(req, res) {
  const { name } = req.body;
  try {
    let category = await Category.create({ name });
    res.redirect("/categories/");
  } catch (err) {
    const errors = Object.values(err.errors).map(
      ({ properties }) => properties.message
    );
    res.render("addCategory", {
      errors,
      previousName: name,
    });
  }
}

export async function deleteCategory(req, res) {
  const { id } = req.params;
  try {
    let category = await Category.findByIdAndDelete(id);
    res.redirect("/categories");
  } catch (error) {
    res.render("error", { error });
  }
}

export async function editCategory(req, res) {
  const { id } = req.params;
  try {
    let category = await Category.findById(id);
    res.render("editCategory", { category });
  } catch (err) {
    res.render("error", { err });
  }
}

export async function saveEditCategory(req, res) {
  const { name, _id } = req.body;
  try {
    await Category.findByIdAndUpdate(_id, {
      name,
    });
    res.redirect("/categories");
  } catch (err) {
    console.log(err);
    res.render("editCategory", {
      perfume: { name, _id },
      errors: err,
    });
  }
}
