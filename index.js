const express = require("express");

const port = 3000;
const app = express();

const superheros = [
  { id: 1, name: "HULK", image: "hulk.jpg" },
  { id: 2, name: "THOR", image: "thor.jpg" }
];

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("index", { superheros: superheros }));

app.get("/superhero/:id", (req, res) => {
  const id = +req.params.id;

  let selectedSuperhero = superheros.filter(superhero => superhero.id === id);

  res.render("superhero", { superhero: selectedSuperhero });
});

app.listen(port, err => {
  err
    ? console.error("cannot connet to server")
    : console.log(`connected to server on port ${port}`);
});
