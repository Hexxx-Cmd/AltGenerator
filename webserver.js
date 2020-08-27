const express = require("express");
const gen = require("./gen.js");
const app = express();
const fs = require("fs");

app.get("/generate", (request, response) => {
  let alt = gen.getAlt("alts");
  response.send(`{ "alt": "${alt}" }`);
  gen.removeAlt("alts", alt);
});

app.get("/", (request, response) => {
  response.write(fs.readFileSync("index.html"));
});

const listener = app.listen(process.env.PORT, () => {
  console.log(
    "Your application is now online on port: " + listener.address().port
  );
});