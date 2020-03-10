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
  console.log('/users route',req.body);
  db.Users.create({
    email: req.body.email,
    full_name: req.body.full_name
  })
    .then(function(dbUser) {
      res.send(
        JSON.stringify(
          {redirect:"/" + dbUser.dataValues.email}
        )
      )
    })
    .catch(err => err);
    // res.redirect("/questions")
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


router.put("/users", function(req, res) {
  console.log(req.body);
  const { fitness_goal, zipcode , email} = req.body;
  console.log(req.params)
  db.Users.update(
    {
      fitness_goal: fitness_goal,
      zipcode: zipcode
    },
    {
      where: { email: email }
    }
  ).then(function(dbUser) {
    console.log(dbUser);
      res.json({status:'ok'});
      //   JSON.stringify(
      //     {redirect:"/" + email}
      //   )
      // )
    })
    .catch(err => {
      console.log(err)
      });
    
    // db.Users.findAll({}).then(results=>{
    //   console.log(results)
    //   const matches =[];
    //   results.map(user=> Math.abs(zipcode - user.dataValues.zipcode) < 5 && 
    //   user.dataValues.email !== email && user.dataValues.fitness_goal === 
    //   fitness_goal? matches.push(user.dataValues): '')
    //   res.send(JSON.stringify(matches))
      // res.send(redirect towards the html route from here)
      // in front end js use window.location.href to send them to matches html route + email
      // Copy the same logic from line 71-76 and use EJS to render matches
    })
//   });
// });


module.exports = router;
