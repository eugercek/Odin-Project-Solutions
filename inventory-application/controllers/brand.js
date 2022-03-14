import Brand from "../models/Brand.js";
import Perfume from "../models/Perfume.js";

// TODO Learn how to use databases!
export async function getAllBrands(req, res) {
  const [perfumes, items] = await Promise.all([
    Perfume.find({}).populate("brand"),
    Brand.find({}),
  ]);

  const numbers = perfumes.reduce(
    (acc, { brand: { name } }) => ({ ...acc, [name]: acc[name] + 1 || 1 }),
    {}
  );

  for (const ele of items) {
    ele.number = numbers?.[ele.name] ?? 0;
  }

  res.render("brands", { items });
}

export async function getBrand(req, res) {
  const { id } = req.params;
  try {
    let brand = await Brand.findById(id);
    res.render("brand", { brand });
  } catch (err) {
    res.render("error", { err });
  }
}

export async function addBrand(req, res) {
  res.render("addBrand");
}

export async function saveBrand(req, res) {
  const { name } = req.body;
  try {
    let brand = await Brand.create({ name });
    res.redirect("/brands");
  } catch (err) {
    const errors = Object.values(err.errors).map(
      ({ properties }) => properties.message
    );
    res.render("addBrand", {
      errors,
      previousName: name,
    });
  }
}

export async function deleteBrand(req, res) {
  const { id } = req.params;
  try {
    let perfumes = await Perfume.find({ brand: id });

    if (perfumes !== []) {
      let brand = await Brand.findById(id);
      return res.render("brand", {
        brand,
        errors: ["There are perfumes of this brand"],
      });
    }

    await Brand.findByIdAndDelete(id);
    res.redirect("/brands");
  } catch (error) {
    res.render("error", { error });
  }
}

export async function editBrand(req, res) {
  const { id } = req.params;
  try {
    let brand = await Brand.findById(id);
    res.render("editBrand", { brand });
  } catch (err) {
    res.render("error", { err });
  }
}

export async function saveEditBrand(req, res) {
  const { name, _id } = req.body;
  try {
    await Brand.findByIdAndUpdate(_id, {
      name,
    });
    res.redirect("/brands");
  } catch (err) {
    console.log(err);
    res.render("editBrand", {
      brand: { name, _id },
      errors: err,
    });
  }
}
