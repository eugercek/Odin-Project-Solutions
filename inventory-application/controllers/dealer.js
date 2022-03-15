import Dealer from "../models/Dealer.js";
import PerfumeInstance from "../models/PerfumeInstance.js";

// TODO Learn how to use databases!
export async function getAll(req, res) {
  const [perfumes, dealers] = await Promise.all([
    PerfumeInstance.find({}).populate("dealer"),
    Dealer.find({}),
  ]);

  const numbers = perfumes.reduce(
    (acc, { dealer: { name } }) => ({ ...acc, [name]: acc[name] + 1 || 1 }),
    {}
  );

  for (const ele of dealers) {
    ele.number = numbers?.[ele.name] ?? 0;
  }

  res.render("dealer/dealers", { items: dealers });
}

export async function get(req, res) {
  const { id } = req.params;
  try {
    let dealer = await Dealer.findById(id);
    console.log(dealer);
    res.render("templates/UDcard", { item: dealer });
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function add(req, res) {
  res.render("templates/nameFormAdd");
}

export async function save(req, res) {
  const { name } = req.body;
  try {
    let dealer = await Dealer.create({ name });
    res.redirect("/dealers");
  } catch (err) {
    const errors = Object.values(errors.errors).map(
      ({ properties }) => properties.message
    );
    res.render("templates/nameFormAdd", {
      errors,
      previousName: name,
    });
  }
}

export async function deleteOne(req, res) {
  const { id } = req.params;
  try {
    let perfume = await PerfumeInstance.findOne({ dealer: id });

    if (perfume) {
      let dealer = await Dealer.findById(id);
      return res.render("templates/UDcard", {
        item: dealer,
        errors: ["There are perfumes that dealer is selling!"],
      });
    }

    await Dealer.findByIdAndDelete(id);
    res.redirect("/dealers");
  } catch (errors) {
    console.log(errors);
    res.render("error", { errors });
  }
}

export async function edit(req, res) {
  const { id } = req.params;
  try {
    let dealer = await Dealer.findById(id);
    res.render("templates/nameFormEdit", { item: dealer });
  } catch (errors) {
    res.render("error", { errors });
  }
}

export async function saveEdit(req, res) {
  const { name, _id } = req.body;
  try {
    await Dealer.findByIdAndUpdate(_id, {
      name,
    });
    res.redirect("/dealers");
  } catch (errors) {
    res.render("templates/nameFormEdit", {
      item: { name, _id },
      errors,
    });
  }
}
