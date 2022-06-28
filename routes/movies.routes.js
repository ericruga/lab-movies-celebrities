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

router.post("/create", (req, res, next) => {
  const { name } = req.body;
  Celebrity.findOne({ name })
    .then((celebritiesDocFromDB) => {
      if (!celebritiesDocFromDB) {
        // prettier-ignore
        Celebrity.create({ name, genre, plot })
        .then(() => res.redirect('/movies'));
      } else {
        res.render("movies/new-movie.hbs", { message: "It seems you are already registered. ☀️" });
        return;
      }
    })
    .catch((err) => {
      console.log(`Error while creating a new user: ${err}`);
      next(err);
    });
});

module.exports = router;