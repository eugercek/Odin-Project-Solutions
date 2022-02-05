const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "pages" });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "pages" });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", { root: "pages" });
});

app.use((req, res) => {
  res.sendFile("404.html", { root: "pages" });
});

app.listen(PORT);
