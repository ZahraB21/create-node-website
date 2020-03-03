const express = require("express");
// const pug = require("pug");

const port = 3000;

const app = express();

app.set("view engine", "pug");
app.use(express.static("/public"));
app.get("/", (req, res) => res.render("index", {}));

app.listen(port, err => {
  err
    ? console.error("cannot connet to server")
    : console.log(`connected to server on port ${port}`);
});
