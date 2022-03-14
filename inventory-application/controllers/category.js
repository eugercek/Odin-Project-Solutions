import Category from "../models/Category.js";
import Perfume from "../models/Perfume.js";

export async function getAllCategories(req, res) {
  const [perfumes, items] = await Promise.all([
    Perfume.find({}).populate("category"),
    Category.find({}),
  ]);

  const numbers = perfumes.reduce(
    (acc, { category: { name } }) => ({ ...acc, [name]: acc[name] + 1 || 1 }),
    {}
  );

  for (const ele of items) {
    ele.number = numbers?.[ele.name] ?? 0;
  }

  res.render("categories", { items });
}

export async function getCategory(req, res) {
  const { id } = req.params;
  try {
    let category = await Category.findById(id);
    let perfumes = await Perfume.find({ category: id });
    console.log(perfumes);
    res.render("category", { category });
  } catch (errors) {
    res.render("error", { errors });
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
    const errors = Object.values(errors.errors).map(
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
    let perfumes = await Perfume.find({ brand: id });

    if (perfumes !== []) {
      let brand = await Brand.findById(id);
      return res.render("brand", {
        brand,
        errors: ["There are perfumes of this category!"],
      });
    }

    let category = await Category.findByIdAndDelete(id);
    res.redirect("/categories");
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function editCategory(req, res) {
  const { id } = req.params;
  try {
    let category = await Category.findById(id);
    res.render("editCategory", { category });
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function saveEditCategory(req, res) {
  const { name, _id } = req.body;
  try {
    await Category.findByIdAndUpdate(_id, {
      name,
    });
    res.redirect("/categories");
  } catch (errors) {
    console.log(errors);
    res.render("editCategory", {
      perfume: { name, _id },
      errors: errors,
    });
  }
}
