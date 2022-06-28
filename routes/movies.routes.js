const router = require("express").Router();

/* GET movies page */
router.get("/", (req, res, next) => {
  res.render("movies/movies.hbs");
});

module.exports = router;