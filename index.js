const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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

app.post("/superheros", urlencodedParser, (req, res) => {
  const newId = superheros[superheros.length - 1].id + 1;
  const newSuperHero = {
    id: newId,
    name: req.body.superhero.toUpperCase(),
    image: "wonderWoman.jpg"
  };

  superheros.push(newSuperHero);

  res.redirect("/");
});

app.listen(port, err => {
  err
    ? console.error("cannot connet to server")
    : console.log(`connected to server on port ${port}`);
});
