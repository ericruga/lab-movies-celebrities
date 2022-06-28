const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
/* GET movies page */
router.get("/", (req, res, next) => {
  res.render("movies/movies.hbs");
});

router.get("/create", (req, res, next) => {
  res.render("movies/new-movie.hbs")
});


module.exports = router;