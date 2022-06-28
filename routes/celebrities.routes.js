const router = require("express").Router();

/* GET celebrities page */
router.get("/", (req, res, next) => {
  res.render("celebrities/celebrities.hbs");
});

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs");
  });

router.post("/create", (req, res, next) => {

    const {name,occupation, catchPhrase}= req.body;

    Model.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch((error) => {
        console.log(error);
        res.render("celebrities/new-celebrity.hbs");
      });
  });

module.exports = router;