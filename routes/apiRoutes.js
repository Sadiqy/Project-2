const router = require("express").Router();
let db = require("../models");
// console.log(db.Users);

// Get Route for Users
router.get("/users", function(req, res) {
  db.Users.findAll({}).then(function(dbUser) {
    res.json(dbUser);
  });
});

// Post Route for Users
router.post("/users", (req, res) => {
  console.log(req.body);
  db.Users.create({
    email: req.body.email,
    full_name: req.body.full_name
  })
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(err => err);
});

router.get("/users/results", function(req, res) {
    console.log("body",req.params);
    console.log(req.query);
    console.log(req.url);
  db.Users.findAll({
    where: {
      zipcode: req.query.zipcode,
      fitness_goal: req.query.fitness_goal
    }
  }).then(function(dbUser) {
    console.log(dbUser);
    res.json(dbUser);
  });
});

router.get("/users/:email", function(req, res) {
  console.log(req.params);
  console.log(req.params.email);
  db.Users.findOne({ where: { email: req.params.email } })
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(err => err);
});

router.put("/users/:email", function(req, res) {
  db.Users.update(
    {
      fitness_goal: req.body.fitness_goal,
      zipcode: req.body.zipcode
    },
    {
      where: { email: req.params.email }
    }
  ).then(function(dbUser) {
    console.log(dbUser);
    res.json(dbUser);
  });
});


module.exports = router;
