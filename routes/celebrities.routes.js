const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")
/* GET celebrities page */


router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs");
  });

router.post("/create", (req, res, next) => {

    const {name,occupation, catchPhrase}= req.body;

    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch((error) => {
        console.log(error);
        res.render("celebrities/new-celebrity.hbs");
      });
  });

  router.get("/", (req, res, next) => {
    Celebrity.find()
    .then((allCelebrities) => {
        console.log(allCelebrities);
        res.render("celebrities/celebrities.hbs", {allCelebrities})
    })
    .catch((error) => {
        console.log(error);  
      });  
    });

module.exports = router;