const router = require("express").Router();

/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities");
});

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/celibrities/create", (req, res, next) => {

    const {name,occupation, catchPhrase}= req.body;

    Model.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch((error) => {
        console.log(error);
        res.render("celebrities/new-celebrity");
      });
  });
module.exports = router;