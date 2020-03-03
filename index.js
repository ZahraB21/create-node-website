const express = require("express");

const port = 3000;
const app = express();

const superheros = [
  { name: "HULK", image: "hulk.jpg" },
  { name: "THOR", image: "thor.jpg" }
];

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("index", { superheros: superheros }));

app.listen(port, err => {
  err
    ? console.error("cannot connet to server")
    : console.log(`connected to server on port ${port}`);
});
