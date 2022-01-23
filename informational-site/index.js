const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const route = req.url.slice(1);
  const files = fs.readdirSync("./pages").map((file) => path.parse(file).name);
  const [page, code] = files.some((x) => x == route)
    ? [`./pages/${route}.html`, 200]
    : ["404.html", 404];

  res.statusCode = code;
  res.setHeader("Content-Type", "text/html");
  res.end(fs.readFileSync(page));
});

server.listen(PORT);
